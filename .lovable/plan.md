

# Google Apps Script Contact Form Integration

## Overview
Connect the existing contact form to a Google Sheet using Google Apps Script (free, no backend needed). The form already matches the site theme -- we just need to wire up the submission logic.

## How It Works

1. You create a Google Sheet and a small Apps Script attached to it
2. The script acts as a free web endpoint that receives form data
3. Our contact form sends data to that endpoint on submit
4. The data appears as rows in your Google Sheet

## What You Need To Do (One-Time Setup)

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Add these column headers in Row 1: **First Name | Last Name | Email | Phone | Service Interest | Message | Submitted At**
3. Click **Extensions > Apps Script**
4. Replace the default code with this script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.serviceInterest,
    data.message,
    new Date().toISOString()
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Click **Deploy > New deployment**
6. Choose **Web app**, set "Execute as" to **Me**, and "Who has access" to **Anyone**
7. Click **Deploy** and copy the Web App URL
8. Share that URL with me (it's safe -- it can only append rows to your sheet)

## What I Will Build

### Update: `src/pages/Contact.tsx`
- Add form state management (track each field value)
- On submit, send a `fetch()` POST request to your Google Apps Script URL
- Add loading state on the submit button while sending
- Show the existing "Thank you" success message on success
- Show a toast error if the request fails
- Add basic client-side validation with proper encoding

### Technical Details
- The Google Apps Script URL will be stored as a constant in the component (it's a public endpoint, not a secret)
- No backend, edge functions, or Cloud credits required
- The form design, colors, and layout stay exactly as they are now
- Input validation using basic checks before submission

## After Setup
Once you give me the Apps Script Web App URL, I will wire everything up in one step.

