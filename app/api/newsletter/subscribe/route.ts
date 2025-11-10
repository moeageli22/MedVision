import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Email to subscriber (confirmation)
    const subscriberEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
            .logo { font-size: 32px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">MedVision</div>
              <h1>Welcome to MedVision!</h1>
            </div>
            <div class="content">
              <h2>Thank You for Subscribing!</h2>
              <p>Hi there,</p>
              <p>We're thrilled to have you join the MedVision community! Your subscription has been successfully confirmed.</p>
              <p>You'll now receive:</p>
              <ul>
                <li>Weekly study tips and UCAT preparation strategies</li>
                <li>Important application deadlines and key dates</li>
                <li>Success stories from current medical students</li>
                <li>Exclusive resources and practice materials</li>
              </ul>
              <p>Stay tuned for our next newsletter with valuable insights to help you achieve your dream of studying medicine!</p>
              <p>Best regards,<br><strong>The MedVision Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 MedVision. Empowering Future Doctors.</p>
              <p>Contact us: rasimizori@hotmail.co.uk</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Email to admin (notification)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
            .highlight { background: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎉 New Newsletter Subscription</h2>
            </div>
            <div class="content">
              <p><strong>Great news!</strong></p>
              <p>A new subscriber has joined the MedVision newsletter:</p>
              <div class="highlight">
                <strong>Email:</strong> ${email}<br>
                <strong>Date:</strong> ${new Date().toLocaleString("en-GB", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </div>
              <p>Your community is growing! 🚀</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to subscriber
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MedVision <noreply@medvisionn.vercel.app>",
        to: [email],
        subject: "Welcome to MedVision Newsletter! 🎓",
        html: subscriberEmailHtml,
      }),
    })

    // Send notification to admin
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MedVision Notifications <noreply@medvisionn.vercel.app>",
        to: ["rasimizori@hotmail.co.uk", "mohammadmunir2004@gmail.com"],
        subject: "New Newsletter Subscription",
        html: adminEmailHtml,
      }),
    })

    return NextResponse.json({ success: true, message: "Subscription successful" })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}
