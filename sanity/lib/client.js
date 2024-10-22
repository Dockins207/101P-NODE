import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: "sqb4dkpp",
  dataset: "production",
  apiVersion: '2023-09-17',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};
