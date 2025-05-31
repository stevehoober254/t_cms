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
      name: 'subscribedat',
      type: 'datetime',
      title: 'Subscribed At',
      options: {
        timeFormat: 'HH:mm',
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
        initialValue: () => (new Date().toISOString())
      }
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status'
    }
  ]
}