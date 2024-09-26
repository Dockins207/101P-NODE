import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'newProperties',
  title: 'New Properties',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          `${input.toLowerCase().replace(/\s+/g, '-').slice(0, 100)}-${uuidv4()}`,
      },
    },
    {
      name: 'detailedPage',
      title: 'Detailed Page',
      type: 'object',
      fields: [
        {
          name: 'detailedGallery',
          title: 'Detailed Photo Gallery',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'detailedInformation',
          title: 'Detailed Information',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
};
