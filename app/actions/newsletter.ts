"use server"

import emailjs from "@emailjs/browser"

export async function subscribeToNewsletter(email: string) {
  try {
    // Send confirmation email to subscriber
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      {
        to_email: email,
        to_name: email.split("@")[0],
        from_name: "MedVision Team",
        subject: "Welcome to MedVision Newsletter!",
        message: `Thank you for subscribing to the MedVision newsletter! You'll receive weekly updates on medical school applications, UCAT tips, and more.`,
      },
      process.env.EMAILJS_PUBLIC_KEY || "",
    )

    // Send notification to admins
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_ADMIN_TEMPLATE_ID || "",
      {
        to_email: "rasimizori@hotmail.co.uk, mohammadmunir2004@gmail.com",
        subscriber_email: email,
        subscription_date: new Date().toLocaleDateString(),
      },
      process.env.EMAILJS_PUBLIC_KEY || "",
    )

    return { success: true }
  } catch (error) {
    console.error("Subscription error:", error)
    return { success: false, error: "Failed to subscribe. Please try again." }
  }
}
