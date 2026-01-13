import {defineField, defineType} from 'sanity'

export const activityType = defineType({
  name: 'activity',
  title: 'Our Activities',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Activity Name' }),
    defineField({ 
      name: 'image', 
      type: 'image', 
      options: { hotspot: true } 
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link (Optional)',
      description: 'Where should this tile go? (e.g., /blog/ramadan)'
    }),
  ],
})