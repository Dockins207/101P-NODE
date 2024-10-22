export default {
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true, 
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 5,
      },
      readOnly: true,
    },
    {
      name: 'isRead',
      title: 'Is Read',
      type: 'boolean',
      initialValue: false,
      description: 'Mark this submission as read/unread.',
    },
  ],
};
