import { Octokit } from 'octokit'

export type GitHubRepositorySearch = {
  language: string
  sort: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
  page: number
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

// Octokit
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// GitHubのリポジトリを取得する
export const getRepositories = async (
  searchCondition: GitHubRepositorySearch,
): Promise<{
  totalCount: number
  repositories: GitHubRepository[]
}> => {
  const response = await octokit.rest.search.repos({
    q: `stars:>100+good-first-issues:>1+language:${searchCondition.language}`,
    sort: searchCondition.sort,
    order: 'desc',
    per_page: 50,
    page: searchCondition.page,
  })
  if (response.data.items) {
    const repositories: GitHubRepository[] = response.data.items.map((item) => {
      return {
        id: item.id,
        htmlUrl: item.html_url,
        repositoryName: item.name,
        avatorUrl: item.owner?.avatar_url ?? '',
        description: item.description ?? '',
        stargazersCount: item.stargazers_count,
        watchersCount: item.watchers_count,
        forksCount: item.forks_count,
      }
    })
    return { totalCount: response.data.total_count, repositories }
  }
  return { totalCount: 0, repositories: [] }
}
