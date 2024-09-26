import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          'Selling Now',
          'Offers',
          'New Properties',
          'Sold Out',
        ],
      },
    },
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
          of: [
            {
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
        
        { name: 'description', title: 'Description', type: 'text' },

       
        {
          name: 'detailSlug',
          title: 'Detail Page Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200,
            slugify: (input) =>
              `${input.toLowerCase().replace(/\s+/g, '-').slice(0, 100)}-${uuidv4()}`, 
          },
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
