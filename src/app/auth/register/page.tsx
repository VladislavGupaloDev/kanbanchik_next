import {Metadata} from 'next';
import {Register} from '@/page/Register';
import {NO_INDEX_PAGE} from '@/core/seo/seo.const';

export const metadata: Metadata = {
  title: "Register",
  ...NO_INDEX_PAGE,
};

export default function RegisterPage() {
  return <Register/>;
}
