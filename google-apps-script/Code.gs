const SHEET_NAME = 'Submissions';
const HEADER_ROW = [
  'Timestamp',
  'Full Name',
  'Email',
  'Contact Number',
  'Message',
  'Page URL',
  'User Agent',
];

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_();
    ensureHeader_(sheet);

    const params = e && e.parameter ? e.parameter : {};
    const honeypot = String(params.company || '').trim();

    if (honeypot) {
      return jsonOutput_({ ok: true, ignored: true });
    }

    sheet.appendRow([
      new Date(),
      String(params.fullName || ''),
      String(params.email || ''),
      String(params.contactNumber || ''),
      String(params.message || ''),
      String(params.pageUrl || ''),
      String(params.userAgent || ''),
    ]);

    return jsonOutput_({ ok: true });
  } catch (error) {
    return jsonOutput_({ ok: false, error: error.message });
  }
}

function doGet() {
  return jsonOutput_({ ok: true, message: 'Graffitea submissions endpoint is live.' });
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER_ROW);
    sheet.setFrozenRows(1);
  }
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
