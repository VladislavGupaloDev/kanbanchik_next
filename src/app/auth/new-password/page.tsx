import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "New Password",
  ...NO_INDEX_PAGE,
};

export default function NewPasswordPage() {
  return <div>ForgotPassword</div>;
}
