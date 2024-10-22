export default {
  name: 'siteVisitRequest',
  type: 'document',
  title: 'Site Visit Request',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required().error('Name is required'),
      readOnly: true,
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      validation: (Rule) => Rule.required().error('Phone number is required'),
      readOnly: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
            name: 'email',
            invert: false,
          })
          .error('A valid email address is required'),
      readOnly: true,
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
      validation: (Rule) => Rule.required().error('Message is required'),
      readOnly: true,
    },
    {
      name: 'siteVisit',
      type: 'boolean',
      title: 'Site Visit',
      readOnly: true, 
    },
    {
      name: 'visitDate',
      type: 'date',
      title: 'Preferred Visit Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      readOnly: true,
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Submitted At',
      readOnly: true,
    },
    {
      name: 'isRead',
      type: 'boolean',
      title: 'Read Status',
      initialValue: false,
      readOnly: true,
    },
  ],
};
