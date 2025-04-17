export const createEmailContent = (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => ({
  text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `,
  html: `
    <h2>New Design Consultation Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <h3>Message:</h3>
    <p>${data.message}</p>
  `
});