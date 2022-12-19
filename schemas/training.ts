import trainer from "./trainer";

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
              {type: 'Categories'},
            ]
          }
        ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    }, 
    {
        name: 'trainer',
        type: 'array',
        title: 'Select Trainer',
        of: [
            {
              type: 'reference',
              to: [
                {type: 'Trainer'},
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
        type: 'number',
        title: 'Fee (Kshs)',
      },
      // {
      //   name: 'start',
      //   type: 'date',
      //   title: 'Start Date',
      // },
      // {
      //   name: 'end',
      //   type: 'date',
      //   title: 'End Date',
      // },
      {
        title: 'gallery',
        name: 'gallery',
        type: 'array',
        of: [{type: 'image', options: {hotspot: true}}],
      }
  ],
}
