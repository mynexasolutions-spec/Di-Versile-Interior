import fs from 'fs';
import path from 'path';

// Add new formats here if needed — everything else about the /projects
// page picks files up automatically, no other code changes required.
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.ogg'];

function humanize(fileName) {
  return fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s*\d+$/, '') // Strip trailing numbers (e.g. " 01", " 02")
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function scanDir(relativeDir, extensions) {
  const absoluteDir = path.join(process.cwd(), 'public', relativeDir);
  if (!fs.existsSync(absoluteDir)) return [];

  return fs
    .readdirSync(absoluteDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && extensions.includes(path.extname(entry.name).toLowerCase())
    )
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map((entry) => ({
      // Spaces/special characters in filenames get encoded so next/image
      // and <video> don't choke on them (see Wooden Flooring.png elsewhere
      // in this repo for the same gotcha).
      src: `/${relativeDir}/${encodeURIComponent(entry.name)}`,
      name: humanize(entry.name),
    }));
}

/**
 * Auto-discovers every image/video dropped into
 * public/projects/images and public/projects/videos.
 *
 * No manual registration, no editing this file, no importing each photo
 * by name — just add a file with a supported extension to the right
 * folder and it shows up on the /projects page on the next request
 * (dev) or the next build/deploy (production).
 */
export function getProjectMedia() {
  const mainImages = scanDir('projects/images', IMAGE_EXTENSIONS);
  const insideImages = scanDir('projects/insideImages', IMAGE_EXTENSIONS).filter(
    (item) => !item.name.toLowerCase().includes('client')
  );

  const images = [...mainImages, ...insideImages].map((item, index) => ({
    ...item,
    type: 'image',
    id: `image-${index}`,
  }));

  const videos = scanDir('projects/videos', VIDEO_EXTENSIONS).map((item, index) => ({
    ...item,
    type: 'video',
    id: `video-${index}`,
  }));

  return { images, videos };
}
