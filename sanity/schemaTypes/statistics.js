export default {
    name: 'statistics',
    title: 'Statistics',
    type: 'document',
    fields: [
      {
        name: 'happyClients',
        title: 'Happy Clients',
        type: 'number',
      },
      {
        name: 'yearsOfExperience',
        title: 'Years of Experience',
        type: 'number',
      },
      {
        name: 'titleDeeds',
        title: 'Title Deeds Awarded',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  