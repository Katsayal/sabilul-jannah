// Change the import to use the named export explicitlyimport { createClient } from 'next-sanity' // (If applicable to your setup)
import { createImageUrlBuilder } from '@sanity/image-url' 
import { client } from './client'

// Initialize the builder
const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}