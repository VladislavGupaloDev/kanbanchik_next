import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SERVER_URL,
  documents: ['./src/api/graphql/**/*.graphql'],
  generates: {
    './src/shared/api/graphql/generated/output.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  },
  ignoreNoDocuments: true
}

export default config
