# SheetDB Setup

1. Create a Google Sheet for submissions.
2. Put these exact column names in the first row:
   - `full_name`
   - `email`
   - `contact_number`
   - `message`
3. Create a SheetDB API for that sheet at https://sheetdb.io/.
4. Copy the API endpoint.
5. In `index.html`, replace the placeholder form action:
   - `https://sheetdb.io/api/v1/YOUR_SHEETDB_API_ID`
6. Deploy the site again.

Implementation notes:
- The contact form posts directly to the SheetDB endpoint.
- Input names use the `data[column_name]` format expected by SheetDB's HTML form integration.
- The hidden `company` field is a honeypot and is removed before submission.
