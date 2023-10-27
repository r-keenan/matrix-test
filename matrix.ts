// [state, license, docArray]
const licenseMatrix: [string, string, string[]][] = [
  ["Hi", "Sir", ["T", "R", "S"]],
  ["Hello", "World", ["A", "B", "C", "D"]],
  ["Hey", "There", ["M", "N", "O"]],
];

function printRequiredDocs(
  state: string,
  license: string,
  arr: [string, string, string[]][]
) {
  const requiredDocs: string[] = [];
  const superbReqDocs = ["1", "2", "3", "4", "5"];

  for (var i = 0; i < arr.length; i++) {
    let loopState = "";
    let loopLicense = "";
    for (var j = 0; j < arr[i].length; j++) {
      if (!Array.isArray(arr[i][j]) && j === 0) {
        loopState = arr[i][j];
      } else if (!Array.isArray(arr[i][j]) && j === 1) {
        loopLicense = arr[i][j];
      } else if (
        Array.isArray(arr[i][j]) &&
        loopState === state &&
        loopLicense === license
      ) {
        var docs = arr[i][j];
        Array.isArray(docs) ? requiredDocs.push(...docs) : [];
      }
    }
    if (requiredDocs.length > 0) {
      break;
    }
  }
  requiredDocs.push(...superbReqDocs);
  console.log(requiredDocs);
  return requiredDocs;
}

printRequiredDocs("Hello", "World", licenseMatrix);
