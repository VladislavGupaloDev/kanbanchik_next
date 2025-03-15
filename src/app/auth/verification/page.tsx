import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "Verification",
  ...NO_INDEX_PAGE,
};

export default function VerificationPage() {
  return <div>VerificationPage</div>;
}
