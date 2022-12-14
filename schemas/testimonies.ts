export default {
    name: 'Testimonies',
  type: 'document',
  title: 'Testimonies',
  fields: [
    {
        name: 'date',
        type: 'date',
        title: 'Date',
        options: {
          default: Date.now(),
        },
      },
      {
        name: 'message',
        type: 'string',
        title: 'Message',
      },
      {
        name: 'from',
        type: 'string',
        title: 'From Who',
      },
  ],
}