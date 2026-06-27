export default {
  name: 'partnershipInquiry',
  type: 'document',
  title: 'Partnership Inquiries',
  preview: {
    select: { title: 'companyName', subtitle: 'submittedAt' },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleString('en-KE') : 'No date',
      };
    },
  },
  fields: [
    {
      name: 'submittedAt',
      type: 'datetime',
      title: 'Date Submitted',
      readOnly: true,
      description: 'Auto-set when the inquiry is submitted via the website.',
    },
    {
      name: 'companyName',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'contactName',
      type: 'string',
      title: 'Contact Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'employeeCount',
      type: 'string',
      title: 'Number of Employees',
    },
    {
      name: 'trainingNeeds',
      type: 'string',
      title: 'Training Focus Area',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
      rows: 4,
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Review', value: 'in_review' },
          { title: 'Responded', value: 'responded' },
          { title: 'Closed', value: 'closed' },
        ],
      },
    },
  ],
}
