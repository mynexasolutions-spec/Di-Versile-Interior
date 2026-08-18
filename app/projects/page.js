import { getProjectMedia } from '@/lib/projects';
import ProjectsGallery from '@/components/ProjectsGallery';

// Re-scan the public/projects folders on every request instead of only at
// build time, so new photos/videos show up as soon as they're dropped in
// (during `next dev`) without needing a rebuild.
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Projects | Di Versile Interior',
  description:
    'Browse completed interior and exterior projects by Di Versile Interior — real photos and videos from sites across Goa.',
};

export default function ProjectsPage() {
  const { images, videos } = getProjectMedia();
  return <ProjectsGallery images={images} videos={videos} />;
}
