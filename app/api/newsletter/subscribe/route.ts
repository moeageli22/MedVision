import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured. Please contact administrator." },
        { status: 500 },
      )
    }

    console.log("[v0] Processing newsletter subscription for:", email)

    // Email to subscriber (confirmation)
    await resend.emails.send({
      from: "MedVision <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to MedVision Newsletter! 🎓",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 32px;">MedVision</h1>
            <h2 style="margin: 10px 0 0 0;">Welcome to Our Community!</h2>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e40af;">Thank You for Subscribing!</h2>
            <p>Hi there,</p>
            <p>We're thrilled to have you join the MedVision community! Your subscription has been successfully confirmed.</p>
            <p><strong>You'll now receive:</strong></p>
            <ul style="line-height: 1.8;">
              <li>Weekly study tips and UCAT preparation strategies</li>
              <li>Important application deadlines and key dates</li>
              <li>Success stories from current medical students</li>
              <li>Exclusive resources and practice materials</li>
            </ul>
            <p>Stay tuned for our next newsletter with valuable insights to help you achieve your dream of studying medicine!</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>The MedVision Team</strong></p>
          </div>
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
            <p>© 2025 MedVision. Empowering Future Doctors.</p>
            <p>Contact us: rasimizori@hotmail.co.uk</p>
          </div>
        </div>
      `,
    })

    // Email to admin (notification)
    await resend.emails.send({
      from: "MedVision <onboarding@resend.dev>",
      to: ["rasimizori@hotmail.co.uk", "mohammadmunir2004@gmail.com"],
      subject: `New Newsletter Subscription from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #1e40af;">🎉 New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })}</p>
          <p>Your community is growing! 🚀</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Subscription successful! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json(
      {
        error: "Failed to process subscription. Please try again later.",
      },
      { status: 500 },
    )
  }
}
