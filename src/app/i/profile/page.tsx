import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "Profile",
  ...NO_INDEX_PAGE,
};

export default function ProfilePage() {
  return <div>VerificationPage</div>;
}
