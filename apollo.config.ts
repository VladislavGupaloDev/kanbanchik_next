import 'dotenv/config'

module.exports = {
  client: {
    service: {
      name: 'Kanbanchik',
      url: process.env.NEXT_PUBLIC_SERVER_URL,
      skipSSLValidation: true
    }
  }
}
