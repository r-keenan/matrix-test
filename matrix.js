// [state, license, docArray]
var licenseMatrix = [
    ["Hi", "Sir", ["T", "R", "S"]],
    ["Hello", "World", ["A", "B", "C", "D"]],
    ["Hey", "There", ["M", "N", "O"]],
];
function printRequiredDocs(state, license, arr) {
    var requiredDocs = [];
    var superbReqDocs = ["1", "2", "3", "4", "5"];
    for (var i = 0; i < arr.length; i++) {
        var loopState = "";
        var loopLicense = "";
        for (var j = 0; j < arr[i].length; j++) {
            if (!Array.isArray(arr[i][j]) && j === 0) {
                loopState = arr[i][j];
            }
            else if (!Array.isArray(arr[i][j]) && j === 1) {
                loopLicense = arr[i][j];
            }
            else if (Array.isArray(arr[i][j]) &&
                loopState === state &&
                loopLicense === license) {
                var docs = arr[i][j];
                Array.isArray(docs) ? requiredDocs.push.apply(requiredDocs, docs) : [];
            }
        }
        if (requiredDocs.length > 0) {
            break;
        }
    }
    requiredDocs.push.apply(requiredDocs, superbReqDocs);
    console.log(requiredDocs);
    return requiredDocs;
}
printRequiredDocs("Hello", "World", licenseMatrix);
