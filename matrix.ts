// [state, license, docArray]
const licenseMatrix: [string, string, string[]][] = [
  ["Hey", "There", ["A", "B", "C"]],
  ["Hello", "World", ["A", "B", "C", "D"]],
];

const requiredDocs: string[] = [];

function nestedForArray(
  stateName: string,
  licenseName: string,
  arr: [string, string, string[]][]
) {
  let loopState = "";
  let loopLicense = "";
  for (var i = 0; i < arr.length; i++) {
    var state = arr[i];
    for (var j = 0; j < state.length; j++) {
      var license = arr[j];
      //console.log(state);
      if (Array.isArray(arr[i][j])) {
        //console.log(state);
        //console.log(license);
        var docs = arr[i][j];
        Array.isArray(docs) ? requiredDocs.push(...docs) : [];
      } else if (!Array.isArray(arr[i][j]) && j === 0) {
        loopState = arr[i][j];
        console.log(`loopState: ${loopState}`);
      } else if (!Array.isArray(arr[i][j]) && j === 1) {
        loopLicense = arr[i][j];
        console.log(`loopLicense: ${loopLicense}`);
        //const flattenedArray = arr.flat();
        //loopLicense = arr.flat();
        //loopLicense = arr[j];
        //console.log(flattenedArray);
      }
    }
  }
  //console.log(requiredDocs);
}

nestedForArray("Hello", "World", licenseMatrix);
