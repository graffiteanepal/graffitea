# Google Sheets Submission Setup

1. Create or open the Google Sheet that should receive contact submissions.
2. Open `Extensions -> Apps Script`.
3. Replace the default script with the contents of `Code.gs` in this folder.
4. Save the project.
5. Deploy it as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the deployed web app URL.
7. In `index.html`, replace the placeholder value on `#contact-form`:
   - `data-sheet-endpoint="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"`
8. Redeploy the static site.

Notes:
- The frontend uses `fetch(..., { mode: "no-cors" })` so the request can post cleanly to Apps Script from a static site.
- The `company` field is a honeypot and should stay empty.
- Submitted columns are: timestamp, full name, email, contact number, message, page URL, and user agent.
