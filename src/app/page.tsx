import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '@/core/seo/seo.const';
import {Home} from '@/page/Home';

export const metadata: Metadata = {
  title: "Home",
  ...NO_INDEX_PAGE,
};

export default function HomePage() {
  return <Home/>;
}
