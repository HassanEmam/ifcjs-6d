export default function createTreeTable(ifcProject) {
	
	const tableRoot = document.getElementById('boq');
  removeAllChildren(tableRoot);
  populateIfcTable(tableRoot, ifcProject)
  implementTreeLogic();

}

function populateIfcTable(table, ifcProject) {
    const initialDepth = 0;
    createNode(table, ifcProject, initialDepth, ifcProject.children);
}


function createNode(table, node, depth, children) {

	if(children.length === 0) {
		createLeafRow(table, node, depth);
	} else {
		// If there are multiple categories, group them together
		const grouped = groupCategories(children);
		createBranchRow(table, node, depth, grouped);
	}
}

function createBranchRow(table, node, depth, children) {

    const row = document.createElement('tr');
    const className = 'level' + depth;
    row.classList.add(className);
    row.classList.add('table-collapse');
    row.setAttribute('data-depth', depth);

    const dataElement = document.createElement('td');

    const toggle = document.createElement('span');
    toggle.classList.add('toggle');
    toggle.classList.add('table-collapse');


    dataElement.textContent = node.type;
    dataElement.insertBefore(toggle, dataElement.firstChild);

    row.appendChild(dataElement);
	  table.appendChild(row); 

    depth++;

	children.forEach(child => createNode(table, child, depth, child.children ));

}



function createLeafRow(table, node, depth) {
	const row = document.createElement('tr');
    const className = 'level'+ depth;
    row.classList.add(className);
    row.classList.add('table-collapse');
    row.setAttribute('data-depth', depth);

    const element = document.createElement('td');
    element.textContent = node.type;
    row.appendChild(element);
    const quantityType = document.createElement('td');
    quantityType.textContent = 'Quantity Type';
    row.appendChild(quantityType);
    const quantity = document.createElement('td');
    quantity.textContent = 'Quantity';
    row.appendChild(quantity);
    const unit = document.createElement('td');
    unit.textContent = 'Unit';
    row.appendChild(unit);
    const material = document.createElement('td');
    material.textContent = 'Material';
    row.appendChild(material);
    const emissionsPerUnit = document.createElement('td');
    emissionsPerUnit.textContent = 'Emissions per Unit';
    row.appendChild(emissionsPerUnit);
    const emissions = document.createElement('td');
    emissions.textContent = 'Emissions';
    row.appendChild(emissions);
	table.appendChild(row);

  row.onmouseenter = () => {
    viewer.IFC.selector.prepickIfcItemsByID(0, [node.expressID]);
  }

  row.onclick = async () => {
    viewer.IFC.selector.pickIfcItemsByID(0, [node.expressID]);
  }

}

function groupCategories(children) {
	const types = children.map(child => child.type);
	const uniqueTypes = new Set(types);
	if (uniqueTypes.size > 1) {
		const uniquesArray = Array.from(uniqueTypes);
		children = uniquesArray.map(type => {
			return {
				expressID: -1,
				type: type + 'S',
				children: children.filter(child => child.type.includes(type)),
			};
		});
	}
	return children;
}

//Collapsable table logic
function implementTreeLogic() {
[].forEach.call(document.querySelectorAll('#boq .toggle'), function(el) {
    el.addEventListener('click', function() {
      var el = this;
      var tr = el.closest('tr');
      var children = findChildren(tr);
      var subnodes = children.filter(function(element) {
        return element.matches('.table-expand');
      });
      subnodes.forEach(function(subnode) {
        var subnodeChildren = findChildren(subnode);
        children = children.filter(function(element) {
            return !subnodeChildren.includes(element);
        });
              // console.log(children);
        //children = children.not(subnodeChildren);
      });
      if (tr.classList.contains('table-collapse')) {
        tr.classList.remove('table-collapse');
        tr.classList.add('table-expand');
        children.forEach(function(child) {
          child.style.display = 'none';
        });
      } else {
        tr.classList.remove('table-expand');
        tr.classList.add('table-collapse');
        children.forEach(function(child) {
          child.style.display = '';
        });
      }
    })
  })}
  
  var findChildren = function(tr) {
    var depth = tr.dataset.depth;
    var elements = [...document.querySelectorAll('#boq tr')].filter(function(element) {
      return element.dataset.depth <= depth;
    });
    var next = nextUntil(tr, elements);
    return next;
  };
  
  var nextUntil = function(elem, elements, filter) {
    var siblings = [];
    elem = elem.nextElementSibling;
    while (elem) {
      if (elements.includes(elem)) break;
      if (filter && !elem.matches(filter)) {
        elem = elem.nextElementSibling;
        continue;
      }
      siblings.push(elem);
      elem = elem.nextElementSibling;
    }
    return siblings;
  };

  function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
  }