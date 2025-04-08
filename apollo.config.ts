import 'dotenv/config'

module.exports = {
  client: {
    includes: ['src/**/*.graphql'],
    excludes: ['**/_generated_/**'],
    service: {
      name: 'Kanbanchik',
      url: process.env.NEXT_PUBLIC_SERVER_URL,
      skipSSLValidation: true
    }
  }
}
