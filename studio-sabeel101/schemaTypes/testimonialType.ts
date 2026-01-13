import {defineField, defineType} from 'sanity'
import { FaQuoteLeft } from 'react-icons/fa'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: FaQuoteLeft,
  fields: [
    defineField({ name: 'author', type: 'string', title: 'Author Name' }),
    defineField({ name: 'role', type: 'string', title: 'Role (e.g. Donor, Volunteer, Beneficiary)' }),
    defineField({ name: 'quote', type: 'text', title: 'The Testimonial' }),
    defineField({ name: 'image', type: 'image', title: 'Author Photo', options: { hotspot: true } }),
  ],
})