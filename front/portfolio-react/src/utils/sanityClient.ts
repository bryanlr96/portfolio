import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

// Construye URLs de imagen
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
