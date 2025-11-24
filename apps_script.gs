// Google Apps Script to receive JSON POSTs and append to a Google Sheet
const SHEET_NAME = 'responses'; // change if your sheet uses a different sheet name

function doGet(e){
  return ContentService.createTextOutput(JSON.stringify({status:'ok', message:'Use POST'})).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if(!sheet){
      sheet = ss.insertSheet(SHEET_NAME);
    }
    var body = e.postData.contents;
    var data = JSON.parse(body);
    // ensure headers exist
    var headers = sheet.getRange(1,1,1,sheet.getLastColumn()||1).getValues()[0];
    if(!headers || headers.length === 0 || headers[0] === '') {
      var keys = Object.keys(data);
      sheet.getRange(1,1,1,keys.length).setValues([keys]);
      headers = keys;
    }
    var row = headers.map(function(h){ return data[h] || ''; });
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err){
    return ContentService.createTextOutput(JSON.stringify({status:'error', message:err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
