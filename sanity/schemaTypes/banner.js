// schemas/banner.js

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
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'properties',
      title: 'Related Properties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'featuredProperties' }] }],
      validation: Rule => Rule.required(),
    },
  ],
};
