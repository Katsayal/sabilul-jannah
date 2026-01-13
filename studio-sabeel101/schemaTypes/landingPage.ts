import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page Content',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string', title: 'Hero Title' }),
    defineField({ name: 'heroDescription', type: 'text', title: 'Hero Description' }),
    defineField({ 
      name: 'heroImage', 
      type: 'image', 
      title: 'Hero Background Image',
      options: { hotspot: true } // Crucial for responsive design
    }),
  ],
})