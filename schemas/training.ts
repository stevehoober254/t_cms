export default {
  name: 'Trainings',
  type: 'document',
  title: 'Trainings',
  fields: [
    {
      name: 'cover_img',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'category',
      title: 'Select Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Categories' },
          ]
        }
      ],
    },
    {
      name: 'description',
      type: 'array', // Changed from 'text' to 'array'
      title: 'Description',
      of: [
        {
          type: 'block', // Added 'block' type for Rich Text
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        // You can add other types here if you want to allow images, videos, etc. directly in the rich text
        // { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'trainer',
      type: 'array',
      title: 'Select Trainer',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Trainer' },
          ]
        }
      ],
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'fee',
      type: 'string',
      title: 'Fee (Kshs)/Duration',
    },
    // {
    //   name: 'start',
    //   type: 'date',
    //   title: 'Start Date',
    // },
    // {
    //   name: 'end',
    //   type: 'date',
    // },
    {
      title: 'gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'intro_video',
      title: 'Introductory Video',
      type: 'file', // Type 'file' for general file uploads
      options: {
        accept: 'video/*', // Restrict to video files
      },
      description: 'Upload an introductory video for this training.',
    }
  ],
};
