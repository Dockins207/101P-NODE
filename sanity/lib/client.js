import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a client for server-side rendering
export const sanityClient = createClient({
  projectId: "sqb4dkpp",
  dataset: "production",
  apiVersion: '2025-06-18', // Using the latest API version
  useCdn: process.env.NODE_ENV === 'production', // Only use CDN in production
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  perspective: 'published',
  stega: false
});

// Create a preview client for draft documents
export const previewClient = createClient({
  projectId: "sqb4dkpp",
  dataset: "production",
  apiVersion: '2025-06-18',
  useCdn: false, // Always fetch fresh data in preview mode
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  perspective: 'previewDrafts',
  stega: false
});

// Helper function to switch between preview and production clients
export const getClient = (preview = false) => preview ? previewClient : sanityClient;

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};
