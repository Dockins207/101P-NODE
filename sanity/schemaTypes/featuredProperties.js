// schemas/featuredProperties.js

export default {
  name: 'featuredProperties',
  title: 'Featured Properties',
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
      name: 'price',
      title: 'Price',
      type: 'number', 
      validation: Rule => Rule.required().min(0),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
};
