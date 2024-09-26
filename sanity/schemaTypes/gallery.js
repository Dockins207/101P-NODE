export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Staff Photos', 'Site Visits', 'Others', 'Ceremonies', 'Team hike', 'Charity events'],
      },
    },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
  ],
};
