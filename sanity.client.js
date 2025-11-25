import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'sqb4dkpp',
  dataset: 'production',
  apiVersion: '2024-09-18',
  useCdn: true,
});
