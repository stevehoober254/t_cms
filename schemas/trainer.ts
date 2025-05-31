export default {
  name: 'Trainer',
  type: 'document',
  title: 'Trainers',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio'
    },
    {
      name: 'skills',
      type: 'text',
      title: 'Skills'
    },
    {
      name: 'experience',
      type: 'string',
      title: 'Experience Level'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Paste in their LinkedIn Profile link'
    },
    {
      name: 'profile_img',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true
      },
    }
  ]
}