export default {
  name: 'Enrollments',
  type: 'document',
  title: 'Enrollments',
  preview: {
    select: { title: 'name', subtitle: 'date_submitted' },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleString('en-KE') : 'No date',
      };
    },
  },
  fields: [
    {
      name: 'date_submitted',
      title: 'Date Submitted',
      type: 'datetime',
      readOnly: true,
      description: 'Auto-set when the enrollment is submitted via the website.',
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
    {
      name: 'trainerId',
      type: 'reference', // Changed to 'reference'
      title: 'Trainer',
      to: [{ type: 'Trainer' }], // References the 'Trainer' document type
    },
    {
      name: 'trainerName',
      type: 'string',
      title: 'Trainer Name',
    },
    {
      name: 'enrolledAt',
      type: 'datetime', // Use 'datetime' for ISO date strings
      title: 'Enrolled At',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: { // It's good practice to define possible values for status
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
    },
  ],
}
