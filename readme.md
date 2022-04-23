# European FWD Website
A website for Luke Stevenson for the European FWD Leader board. It shows a list of each drivers best 1/4 time under 9 seconds.

## Data source
The data should be a `.csv` file, stored in the root directory `data.csv`. It **must** be in the correct order when uploaded and should be 7 columns wide in the order of 
1. Position
2. Driver name
3. 3 Character Country Code
4. Vehicle Make / Model
5. ET
6. MPH
7. Track

## Data display
The CSV data is requested and parsed using Javascript. It is then built into a HTML table. At the 7, 8 and 9 second cut off points are `clubrows`. These act a banner to indicated the new threshold.

## Deployment
The `$web` folder is deployed to a static web app in Azure under the following URLS:
 - https://europeanfwdwebsite.z33.web.core.windows.net/
 - ~~EuropeanFWD.com~~
 - ~~EuropeanFWD.co.uk~~