import {defineField, defineType} from 'sanity'
import { FaUserCircle } from 'react-icons/fa'

export const memberType = defineType({
  name: 'member',
  title: 'Team Members',
  type: 'document',
  icon: FaUserCircle,
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Full Name' }),
    defineField({ name: 'role', type: 'string', title: 'Role/Position' }),
    defineField({ 
      name: 'image', 
      type: 'image', 
      title: 'Profile Picture',
      options: { hotspot: true } 
    }),
    defineField({ 
      name: 'order', 
      type: 'number', 
      title: 'Display Order', 
      description: 'Use numbers to sort (e.g., 1 for Leader, 2 for Secretary)' 
    }),
  ],
})