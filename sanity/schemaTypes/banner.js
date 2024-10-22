import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'propertyName',
      title: 'Property Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'propertyName',
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
        {
          name: 'detailedDescription',
          title: 'Detailed Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
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
