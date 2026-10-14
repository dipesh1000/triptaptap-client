import { apiGet } from './api'

export type SiteCategory = {
  _id: string
  name: string
  icon?: string
}

interface CategoryApiResponse {
  message?: string
  data?: SiteCategory[]
}

export async function fetchCategories(signal?: AbortSignal): Promise<SiteCategory[]> {
  const json = await apiGet<CategoryApiResponse>('/admin/category', signal)
  return Array.isArray(json.data) ? json.data : []
}
