# TempMail Dashboard

A modern, temporary email service dashboard built with Express.js and vanilla JavaScript.

## Features

- **Random Email Generation**: Generate temporary email addresses with secure random passwords
- **Multi-Account Support**: Manage multiple temporary email addresses simultaneously
- **Real-Time Updates**: Automatic inbox refresh every 10 seconds
- **Email Viewer**: View emails with automatic HTML/plain-text detection
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Persistent Storage**: Email credentials saved to `data/email.json`

## API Endpoints

### Generate New Email
```
POST /api/tempmail/generate
```
Generates a new random email address with a secure password.

**Response:**
```json
{
  "status": "success",
  "creator": "AlfiDev",
  "result": {
    "email": "example@1secmail.com",
    "password": "SecurePass123!",
    "createdAt": "2025-10-02T01:49:01.790Z"
  }
}
```

### List All Emails
```
GET /api/tempmail/list
```
Returns all saved email addresses and their credentials.

**Response:**
```json
{
  "status": "success",
  "creator": "AlfiDev",
  "result": [
    {
      "email": "example@1secmail.com",
      "password": "SecurePass123!",
      "createdAt": "2025-10-02T01:49:01.790Z"
    }
  ]
}
```

### Get Inbox
```
GET /api/tempmail/inbox/:email
```
Fetches all messages for a specific email address.

**Response:**
```json
{
  "status": "success",
  "creator": "AlfiDev",
  "result": [
    {
      "id": 123456,
      "from": "sender@example.com",
      "subject": "Test Email",
      "date": "2025-10-02 01:50:00"
    }
  ]
}
```

### Read Message
```
GET /api/tempmail/message/:email/:id
```
Retrieves the full content of a specific email message.

**Response:**
```json
{
  "status": "success",
  "creator": "AlfiDev",
  "result": {
    "id": 123456,
    "from": "sender@example.com",
    "subject": "Test Email",
    "date": "2025-10-02 01:50:00",
    "htmlBody": "<html>...</html>",
    "textBody": "Plain text content"
  }
}
```

## Usage

### Starting the Server
```bash
npm start
```

The server will start on port 5500 (or the port specified in the PORT environment variable).

### Accessing the Dashboard
Navigate to `http://localhost:5500` in your web browser.

### Generating Emails
1. Click the "GENERATE NEW EMAIL" button
2. The new email address and password will appear below the button
3. The email is automatically saved to `data/email.json`

### Viewing Inbox
1. Select an email from the dropdown menu
2. The inbox will automatically load and refresh every 10 seconds
3. Click on any email to view its full content

## Technical Details

### Email Storage
Email credentials are stored in `data/email.json` in the following format:
```json
[
  {
    "email": "example@1secmail.com",
    "password": "SecurePass123!",
    "createdAt": "2025-10-02T01:49:01.790Z"
  }
]
```

### Supported Domains
- 1secmail.com
- 1secmail.org
- 1secmail.net
- kzccv.com
- qiott.com

### Auto-Refresh
The inbox automatically refreshes every 10 seconds when an email is selected. This can be adjusted by modifying the `refreshInterval` in the JavaScript code.

## Security Notes

- Email credentials are stored locally in `data/email.json`
- The file is excluded from version control via `.gitignore`
- Passwords are randomly generated with uppercase, lowercase, numbers, and special characters
- Always ensure proper file permissions on the `data/` directory in production environments

## Dependencies

- Express.js - Web server framework
- Axios - HTTP client for external API calls
- 1secmail API - Temporary email service provider

## License

MIT License - See LICENSE file for details
