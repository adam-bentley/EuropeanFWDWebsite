
// Loads the CSV Data
function loadData() {
    return new Promise(function (resolve, reject) {
        // Filepath to the data source
        const file = "data.csv";
        // Request the data
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", file, false);

        xmlhttp.onload = function (e) {
            // Return the response
            resolve(xmlhttp.response);
        };
        xmlhttp.onerror = function () {
            // Return nothing
            resolve(undefined);
        };
        xmlhttp.send();
    });
}
