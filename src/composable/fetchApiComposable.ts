import ky from 'ky'

export interface Repository {
  id: number
  full_name: string
  html_url: string
  private: boolean
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
}

const apiUrl = import.meta.env.VITE_API_URL_GITHUB

export const HandlerFunc = async (): Promise<Repository[]> => {
  try {
    const res = await ky
      .get(apiUrl)
      .json<Repository[]>()

    console.log(res)

    return res
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }

    return []
  }
}