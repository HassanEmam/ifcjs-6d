export function DecodeIFCString (ifcString)
{
    const ifcUnicodeRegEx = /\\X2\\(.*?)\\X0\\/uig;
    let resultString = ifcString;
    let match = ifcUnicodeRegEx.exec (ifcString);
    while (match) {
        const unicodeChar = String.fromCharCode (parseInt (match[1], 16));
        resultString = resultString.replace (match[0], unicodeChar);
        match = ifcUnicodeRegEx.exec (ifcString);
    }
    return resultString;
}