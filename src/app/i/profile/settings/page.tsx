import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "Settings",
  ...NO_INDEX_PAGE,
};

export default function SettingsPage() {
  return <div>VerificationPage</div>;
}
