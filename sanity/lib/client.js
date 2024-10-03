import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'sqb4dkpp',
  dataset: 'production', 
  apiVersion: '2023-09-17', 
  useCdn: false, 
});
