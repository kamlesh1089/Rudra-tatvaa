import services from '../../../lib/services.json';
import BookingClient from './BookingClient';

// Pre-render every public service route when exporting for GitHub Pages.
export function generateStaticParams() {
  return services.map(({ id }) => ({ id }));
}

export default async function ServicePage({ params }) {
  const { id } = await params;
  return <BookingClient id={id} />;
}
