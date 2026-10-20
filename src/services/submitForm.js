// src\services\submitForm.js
const WEBHOOK_URL =
  'https://umar10.app.n8n.cloud/webhook/logistic-enquiry'

export async function submitForm(formType, formData) {
  if (!['enquiry', 'quote'].includes(formType)) {
    throw new Error('Invalid form type')
  }

  const payload = {
    ...formData,
    formType,
    submittedAt: new Date().toISOString(),
  }

  console.log(`📤 [submitForm] Submitting ${formType} payload:`, payload)

  const body = new URLSearchParams()

  for (const [key, value] of Object.entries(payload)) {
    body.append(
      key,
      value == null
        ? ''
        : typeof value === 'object'
          ? JSON.stringify(value)
          : String(value)
    )
  }

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status}`)
  }

  const responseData = await response.text().catch(() => '')
  console.log(`✅ [submitForm] ${formType} successfully delivered to webhook. Server response:`, responseData, 'Payload sent:', payload)

  return { success: true, payload }
}
