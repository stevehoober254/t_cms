export default {
  name: 'Subscriptions',
  type: 'document',
  title: 'Subscriptions',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'subscribedAt',
      type: 'datetime',
      title: 'Date Subscribed',
      readOnly: true,
      description: 'Auto-set when the subscription is submitted via the website.',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status'
    }
  ]
}