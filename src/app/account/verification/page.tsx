import { NO_INDEX_PAGE } from '../../../core/seo/seo.const'
import { Verification } from '@/page/Verification'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verification',
  ...NO_INDEX_PAGE
}

export default function VerificationPage() {
  return <Verification />
}
