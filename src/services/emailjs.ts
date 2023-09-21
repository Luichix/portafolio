export const sendEmail = async (params: {
  email: string
  issue: string
  message: string
}) => {
  const data = {
    service_id: 'service_4wymdde',
    template_id: 'template_y8uk5gg',
    user_id: '-go0pC4oFwjAo9l-c',
    template_params: params,
  }

  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('Your mail is sent!')
      } else {
        return response.json().then((error) => {
          throw new Error(JSON.stringify(error))
        })
      }
    })
    .catch((error) => {
      alert('Oops... ' + error.message)
    })
}
