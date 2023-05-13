import fetch, { Headers } from 'node-fetch'

export type GitHubRepositorySearch = {
  language: string
  sort: string
}

export type GitHubRepository = {
  id: number
  htmlUrl: string
  repositoryName: string
  avatorUrl: string
  description: string
  stargazersCount: number
  watchersCount: number
  forksCount: number
}

const baseUrl = 'https://api.github.com'
const repositorySearch = '/search/repositories?q='
const headers = new Headers()
headers.set('Accept', 'application/vnd.github+json')
headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`)
headers.set('X-GitHub-Api-Version', '2022-11-28')

// GitHubのリポジトリを取得する
export const getRepositories = async (
  searchCondition: GitHubRepositorySearch,
): Promise<GitHubRepository[]> => {
  const query = `stars:>100+good-first-issues:>1+language:${searchCondition.language}&sort=${searchCondition.sort}&order=desc&per_page=50&page=1`
  const endPoint = baseUrl + repositorySearch + query
  const response = await fetch(endPoint)
  const data: any = await response.json()
  if (data.items) {
    const repositories: GitHubRepository[] = data.items.map((item: any) => {
      return {
        id: item.id,
        htmlUrl: item.html_url,
        repositoryName: item.name,
        avatorUrl: item.owner.avatar_url,
        description: item.description,
        stargazersCount: item.stargazers_count,
        watchersCount: item.watchers_count,
        forksCount: item.forks_count,
      }
    })
    return repositories
  }
  return []
}
