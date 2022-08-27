// import { data1 } from "./01.js";
// import { data2 } from "./02.js";
// import { data3 } from "./03.js";
// import { data4 } from "./04.js";
// import { data5 } from "./05.js";
// import { data7 } from "./07.js";
// import { data8 } from './08.js'
import { data9 } from "./09.js";
import { data10 } from "./10.js";
import { data11 } from "./11.js";

// const data = {
//   "01": data1,
//   "02": data2,
//   "03": data3,
//   "04": data4,
//   "05": data5,
//   "06": data6,
//   "07": data7,
//   // '08': data8,
//   "09": data9,
//   10: data10,
//   11: data11,
// };

export function getData(id) {
  switch (id) {
    // case "01":
    //   return data1;
    //   break;
    // case "02":
    //   return data2;
    //   break;
    // case "03":
    //   return data3;
    //   break;
    // case "04":
    //   return data4;
    //   break;
    // case "05":
    //   return data5;
    //   break;
    // case "06":
    //   return data6;
    //   break;
    // case "07":
    //   return data7;
    //   break;
    // case '08':
    //     return data8;
    case "09":
      return data9;
      break;
    case "10":
      return data10;
      break;
    case "11":
      return data11;
      break;
    default:
      return null;
  }
  return data[id];
}
