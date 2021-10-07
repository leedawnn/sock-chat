const fs = require('fs');

module.exports = (filePath) => {
  dataToRead = fs.readFileSync(
    filePath,
    {encoding:"utf-8"}
  );

  const rows = dataToRead.split('\n');
  const headers = rows[0].split(',');

  const rowsData = [];

  rows.slice(1).forEach((row) => {
    rowData = {};

    for (let headerIndex=0; headerIndex < headers.length; headerIndex++) {
      const hedaer = headers[headerIndex];
      rowData[hedaer] = row.split(',')[headerIndex];
    }

    rowsData.push(rowData);
  });
  return rowsData;
};
