import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'uuid',
      title: 'UUID',
      type: 'string',
      readOnly: true,
      initialValue: () => uuidv4(), 
    },
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
      name: 'relatedProperty',
      title: 'Related Property',
      type: 'reference',
      to: [
        { type: 'sellingNow' },
        { type: 'offers' },
        { type: 'newProperties' },
      ],
      description: 'The single property linked to this banner.',
    },
  ],
};
