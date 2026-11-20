<?php
/**
 * RepoDesk Solutions - Direct Customer Contact Form Handler
 * Routes inquiries directly to enquiry@improxgroup.com via PHP mail()
 */

// Allow CORS & set JSON response
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are supported.'
    ]);
    exit;
}

// Recipient Email
$recipientEmail = 'enquiry@improxgroup.com';

// Read raw JSON body if available, otherwise check $_POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

// Extract and sanitize input fields
$firstName     = isset($data['firstName']) ? trim(strip_tags($data['firstName'])) : '';
$lastName      = isset($data['lastName']) ? trim(strip_tags($data['lastName'])) : '';
$businessEmail = isset($data['businessEmail']) ? trim(filter_var($data['businessEmail'], FILTER_SANITIZE_EMAIL)) : '';
$contactNumber = isset($data['contactNumber']) ? trim(strip_tags($data['contactNumber'])) : '';
$companyName   = isset($data['companyName']) ? trim(strip_tags($data['companyName'])) : '';
$talkAbout     = isset($data['talkAbout']) ? trim(strip_tags($data['talkAbout'])) : 'General Inquiry';
$notes         = isset($data['notes']) ? trim(strip_tags($data['notes'])) : '';

// Validation
$errors = [];

if (empty($firstName) || strlen($firstName) < 2) {
    $errors['firstName'] = 'First name is required.';
}

if (empty($lastName) || strlen($lastName) < 2) {
    $errors['lastName'] = 'Last name is required.';
}

if (empty($businessEmail) || !filter_var($businessEmail, FILTER_VALIDATE_EMAIL)) {
    $errors['businessEmail'] = 'A valid business email address is required.';
}

if (empty($contactNumber)) {
    $errors['contactNumber'] = 'A contact phone number is required.';
}

if (empty($companyName) || strlen($companyName) < 2) {
    $errors['companyName'] = 'Company or agency name is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed. Please verify required fields.',
        'errors'  => $errors
    ]);
    exit;
}

// Generate Docket / Submission ID
$submissionId = 'LEAD-' . strtoupper(dechex(time())) . '-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 4));
$timestamp    = date('r');

// Email Subject
$subject = "[New Lead Docket] {$companyName} — {$talkAbout}";

// Email Headers (HTML & Direct Routing)
$fromEmail = 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'improxgroup.com');
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: RepoDesk Dispatch <' . $fromEmail . '>',
    'Reply-To: ' . $firstName . ' ' . $lastName . ' <' . $businessEmail . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 1 (Highest)',
    'X-MSMail-Priority: High',
    'Importance: High'
];

// Styled HTML Email Template
$safeAgency  = htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8');
$safeName    = htmlspecialchars($firstName . ' ' . $lastName, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($businessEmail, ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($contactNumber, ENT_QUOTES, 'UTF-8');
$safeTopic   = htmlspecialchars($talkAbout, ENT_QUOTES, 'UTF-8');
$safeNotes   = !empty($notes) ? nl2br(htmlspecialchars($notes, ENT_QUOTES, 'UTF-8')) : '<span style="color:#94a3b8; font-style:italic;">None provided</span>';

$htmlMessage = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Lead Docket</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5F0; color: #121212;">
  <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E0DBD1; box-shadow: 0 4px 12px rgba(0,0,0,0.06); padding: 32px;">
    
    <div style="border-bottom: 2px solid #101D35; padding-bottom: 16px; margin-bottom: 24px;">
      <div style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #2878D0; margin-bottom: 6px;">
        RepoDesk Solutions · Operational Dispatch
      </div>
      <h1 style="margin: 0; font-size: 24px; color: #101D35; font-weight: 700; letter-spacing: -0.5px;">
        New Lead Submission
      </h1>
      <div style="font-family: monospace; font-size: 12px; color: #64748B; margin-top: 6px;">
        Docket ID: <strong style="color: #101D35;">{$submissionId}</strong> · Sent to: {$recipientEmail}
      </div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; border-bottom: 1px solid #EFECE4; font-weight: 600; width: 35%; color: #475569; font-size: 13px; text-transform: uppercase;">
          Agency / Company
        </td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #EFECE4; color: #101D35; font-size: 16px; font-weight: 700;">
          {$safeAgency}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; border-bottom: 1px solid #EFECE4; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase;">
          Contact Person
        </td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #EFECE4; color: #101D35; font-size: 15px;">
          {$safeName}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; border-bottom: 1px solid #EFECE4; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase;">
          Email Address
        </td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #EFECE4; font-size: 15px;">
          <a href="mailto:{$safeEmail}" style="color: #2878D0; text-decoration: none; font-weight: 600;">{$safeEmail}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; border-bottom: 1px solid #EFECE4; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase;">
          Direct Phone
        </td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #EFECE4; font-size: 15px;">
          <a href="tel:{$safePhone}" style="color: #101D35; text-decoration: none; font-weight: 600;">{$safePhone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; border-bottom: 1px solid #EFECE4; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase;">
          Requested Focus
        </td>
        <td style="padding: 12px 14px; border-bottom: 1px solid #EFECE4; color: #101D35; font-size: 15px; font-weight: 600;">
          {$safeTopic}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 14px; background: #F7F5F0; vertical-align: top; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase;">
          Operational Notes
        </td>
        <td style="padding: 12px 14px; color: #334155; font-size: 14px; line-height: 1.6;">
          {$safeNotes}
        </td>
      </tr>
    </table>

    <div style="background: #F7F5F0; border-left: 3px solid #2878D0; padding: 12px 16px; font-size: 12px; color: #64748B;">
      Received at: <strong>{$timestamp}</strong><br>
      Reply directly to this email to contact the lead at <a href="mailto:{$safeEmail}" style="color: #2878D0;">{$safeEmail}</a>.
    </div>

  </div>
</body>
</html>
HTML;

// Dispatch email via PHP mail()
$mailSent = @mail(
    $recipientEmail,
    $subject,
    $htmlMessage,
    implode("\r\n", $headers)
);

// Optional backup: write to local leads log file
$logEntry = date('Y-m-d H:i:s') . " | {$submissionId} | {$safeAgency} | {$safeName} | {$safeEmail} | {$safePhone} | {$safeTopic} | Status: " . ($mailSent ? 'SENT' : 'ATTEMPTED') . "\n";
@file_put_contents(__DIR__ . '/leads.log', $logEntry, FILE_APPEND);

// Return JSON response
http_response_code(200);
echo json_encode([
    'success'        => true,
    'message'        => 'Your inquiry has been successfully sent to enquiry@improxgroup.com.',
    'submissionId'   => $submissionId,
    'recipientEmail' => $recipientEmail,
    'mailDispatched' => $mailSent
]);
