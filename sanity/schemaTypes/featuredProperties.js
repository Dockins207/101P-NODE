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
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' }
        ]
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
      type: 'number', 
      validation: Rule => Rule.required().min(0),
    },
    {
      name: 'installmentPrice',
      title: 'Installment Price',
      type: 'number', 
      validation: Rule => Rule.required().min(0),
    }
  ],
};
