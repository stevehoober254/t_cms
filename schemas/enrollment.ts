export default {
  name: 'Enrollments',
  type: 'document',
  title: 'Enrollments',
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
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'training',
      type: 'string',
      title: 'Training',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
  ],
}
