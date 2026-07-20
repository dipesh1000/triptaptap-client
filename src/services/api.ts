import { API_BASE_URL } from '../config/api'

export async function apiGet<T>(path: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${path}`)
  }

  return res.json() as Promise<T>
}
