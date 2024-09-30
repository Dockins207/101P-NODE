import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'sqb4dkpp',
  dataset: 'production',
  apiVersion: '2023-09-17',
  useCdn: false,
});
