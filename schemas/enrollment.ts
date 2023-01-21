import { DateTimeInput } from "sanity";

export default {
  name: 'Enrollments',
  type: 'document',
  title: 'Enrollments',
  fields: [
    {
      name: 'date_submitted',
      title:'Date Submitted',
      type: 'datetime',
      initialValue: (new Date()).toISOString()

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
