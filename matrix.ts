// [state, license, docArray]
const licenseMatrix: [string, string, string[]][] = [
  ["Hey", "There", ["A", "B", "C"]],
  ["Hello", "World", ["A", "B", "C", "D"]],
];

const requiredDocs: string[] = [];

function nestedForArray(stateName, licenseName, arr) {
  for (var i = 0; i < arr.length; i++) {
    var state = arr[i];
    for (var j = 0; j < state.length; j++) {
      var license = arr[j];
      //console.log(state);
      if (Array.isArray(arr[i][j])) {
        //console.log(state);
        var docs = arr[i][j];
        requiredDocs.push(docs);
      }
    }
  }
  console.log(requiredDocs);
}

nestedForArray("Hello", "World", licenseMatrix);
