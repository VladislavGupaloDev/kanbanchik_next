import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "Forgot Password",
  ...NO_INDEX_PAGE,
};

export default function ForgotPasswordPage() {
  return <div>ForgotPassword</div>;
}
