import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'soldOut',
  title: 'Sold Out',
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
      name: 'name',
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
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cashPrice',
      title: 'Cash Price',
      type: 'string',
      validation: Rule => Rule.required().min(0),
    },
    {
      name: 'installmentPrice',
      title: 'Deposit Price',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
        { name: 'description', title: 'Description', type: 'array',
          of: [{ type: 'block' }], },
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
