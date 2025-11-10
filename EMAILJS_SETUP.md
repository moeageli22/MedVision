# EmailJS Setup Instructions

To enable newsletter email functionality, follow these steps:

## 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Note down your **Service ID**

## 3. Create Email Templates

### Template 1: Subscriber Confirmation Email
1. Go to "Email Templates" → "Create New Template"
2. Name it: "Newsletter Subscription Confirmation"
3. Template content:
   \`\`\`
   Subject: Welcome to MedVision Newsletter!
   
   Hi {{to_name}},
   
   Thank you for subscribing to the MedVision newsletter!
   
   You'll receive weekly updates on:
   - Medical school application tips
   - UCAT preparation strategies
   - Interview guidance
   - Success stories from current medical students
   
   We're excited to support you on your journey to becoming a doctor!
   
   Best regards,
   {{from_name}}
   MedVision Team
   \`\`\`
4. Note down the **Template ID**

### Template 2: Admin Notification Email
1. Create another template
2. Name it: "New Newsletter Subscriber"
3. Template content:
   \`\`\`
   Subject: New Newsletter Subscription
   
   New subscriber details:
   
   Email: {{subscriber_email}}
   Date: {{subscription_date}}
   \`\`\`
4. Note down this **Template ID** (Admin Template ID)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Add Environment Variables
In your Vercel project settings (Vars section in the sidebar), add these environment variables:

**IMPORTANT: Use these exact names WITHOUT the NEXT_PUBLIC_ prefix (server-side only):**

\`\`\`
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_subscriber_template_id
EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
EMAILJS_PUBLIC_KEY=your_public_key
\`\`\`

## 6. Test
1. Redeploy your application
2. Try subscribing to the newsletter
3. Check both subscriber email and admin emails (rasimizori@hotmail.co.uk, mohammadmunir2004@gmail.com)

## Notes
- Free tier: 200 emails/month
- Emails are sent from server-side for security
- Both subscriber and admins will receive emails instantly
- Environment variables are kept secure on the server
