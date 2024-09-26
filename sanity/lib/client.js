import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'sqb4dkpp',
  dataset: 'production',
  apiVersion: '2023-09-17',
  useCdn: false,
  token: process.env.sk5OfnvEbkyVZcaODMVcTckPCVeXI1mvB68Pa9NU9ifWMJ6jzjF68Iyxrk1H6WhAgytAArmQ9BxLEbeYPOE1bMowWUW1UysqwfSuCgkSY3YOgDwoXKQ9j0OpdpRK74imO7bzZy3jAmmOvoUNzorAXkRGAEXzLGK22sRsLKH5Hopol6EodWeK,
});
