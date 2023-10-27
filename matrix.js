// [state, license, docArray]
var licenseMatrix = [
    ["Hi", "Sir", ["T", "R", "S"]],
    ["Hello", "World", ["A", "B", "C", "D"]],
    ["Hey", "There", ["M", "N", "O"]],
];
function printRequiredDocs(stateQuery, licenseQuery, arr) {
    var requiredDocs = [];
    var superbReqDocs = ["1", "2", "3", "4", "5"];
    var loopState = "";
    var loopLicense = "";
    for (var i = 0; i < arr.length; i++) {
        var state = arr[i];
        for (var j = 0; j < state.length; j++) {
            if (!Array.isArray(arr[i][j]) && j === 0) {
                loopState = arr[i][j];
            }
            else if (!Array.isArray(arr[i][j]) && j === 1) {
                loopLicense = arr[i][j];
            }
            else if (Array.isArray(arr[i][j]) &&
                loopState === stateQuery &&
                loopLicense === licenseQuery) {
                var docs = arr[i][j];
                Array.isArray(docs) ? requiredDocs.push.apply(requiredDocs, docs) : [];
            }
        }
    }
    requiredDocs.push.apply(requiredDocs, superbReqDocs);
    console.log(requiredDocs);
    return requiredDocs;
}
printRequiredDocs("Hello", "World", licenseMatrix);
