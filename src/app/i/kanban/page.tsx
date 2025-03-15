import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '../../../core/seo/seo.const';

export const metadata: Metadata = {
  title: "Kanban",
  ...NO_INDEX_PAGE,
};

export default function KanbanPage() {
  return <div>VerificationPage</div>;
}
