"use server"

export async function subscribeToNewsletter(email: string) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const adminTemplateId = process.env.EMAILJS_ADMIN_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    console.log("[v0] EmailJS config check:", {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasAdminTemplateId: !!adminTemplateId,
      hasPublicKey: !!publicKey,
    })

    if (!serviceId || !templateId || !adminTemplateId || !publicKey) {
      console.error("[v0] Missing EmailJS environment variables")
      return {
        success: false,
        error: "Email service not configured. Please contact admin.",
      }
    }

    const subscriberResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: email,
          to_name: email.split("@")[0],
          from_name: "MedVision Team",
          subject: "Welcome to MedVision Newsletter!",
          message: `Thank you for subscribing to the MedVision newsletter! You'll receive weekly updates on medical school applications, UCAT tips, and more.`,
        },
      }),
    })

    console.log("[v0] Subscriber email status:", subscriberResponse.status)

    if (!subscriberResponse.ok) {
      const errorText = await subscriberResponse.text()
      console.error("[v0] Subscriber email error:", errorText)
      throw new Error("Failed to send confirmation email")
    }

    const adminResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: adminTemplateId,
        user_id: publicKey,
        template_params: {
          to_email: "rasimizori@hotmail.co.uk",
          to_email_2: "mohammadmunir2004@gmail.com",
          subscriber_email: email,
          subscription_date: new Date().toLocaleDateString(),
        },
      }),
    })

    console.log("[v0] Admin email status:", adminResponse.status)

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text()
      console.error("[v0] Admin email error:", errorText)
      // Don't fail the whole operation if admin notification fails
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Subscription error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
    }
  }
}
