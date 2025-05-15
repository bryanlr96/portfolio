import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2025-04-30',
  useCdn: import.meta.env.VITE_SANITY_USE_CDN,
  token: import.meta.env.VITE_SANITY_ACCESS_TOKEN,
})

// Construye URLs de imagen
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
