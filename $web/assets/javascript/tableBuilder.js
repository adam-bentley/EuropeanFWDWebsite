// Builds a html table from a CSV data source
function buildTable(data, table) {
    // Break the csv into rows on new lines
    let rows = data.split("\n");
    let prevEt = 0;

    // Loop each line
    for (var x = 1; x < rows.length; x++) {
        // Stops any blank rows included in the CSV
        if (rows[x] == "") {
            continue;
        }

        // Create table row, Sub array on comma
        let columns = rows[x].split(",");

        // If there needs to a 'club' row, build it
        if (isNewClubRow(prevEt, columns[4]) && x != rows.length - 1) {
            table.appendChild(buildClubRow(columns[4]));
        }

        var row = document.createElement("tr");
        // Loop column array
        for (var i = 0; i < columns.length; i++) {
            // Create cell, assign content and append to row
            var cell = document.createElement("td");

            // Ignore flags since there are taken care of
            if (i == 2) {
                continue;
            }

            // If drivers name column
            if (i == 1) {
                // Add the name
                cell.textContent = columns[i] + "    ";
                var image = document.createElement("img");

                // Add the flag
                image.src = "assets/images/flags/" + columns[2] + ".png";
                image.className = "flagIcon";
                cell.appendChild(image);
            } else {
                cell.textContent = columns[i];
            }

            row.appendChild(cell);
        }
        // Add row to table
        table.appendChild(row);
        prevEt = Math.floor(columns[4]);
    }
}

// Check if there needs to be a new 'club' banner row
function isNewClubRow(prevEt, currEt) {
    // If the current is one digit higher than the previous ET
    return Math.floor(prevEt) != Math.floor(currEt);
}

// Builds the a 'club' row
function buildClubRow(et) {
    var clubRow = document.createElement("tr");
    var cell = document.createElement("td");
    cell.colSpan = "6";
    cell.className = "secondsClub" + Math.floor(et);
    cell.textContent = Math.round(et) + " second club";
    clubRow.appendChild(cell);
    return clubRow;
}
