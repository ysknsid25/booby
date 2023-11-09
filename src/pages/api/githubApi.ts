import { Octokit } from 'octokit'
import type { GitHubRepository } from '@/type/GitHubRepository'
import { isGitHubRepositorys } from '@/type/GitHubRepository'

export type GitHubRepositorySearch = {
  language: string
  sort: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
  page: number
  perPage: number
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
    per_page: searchCondition.perPage,
    page: searchCondition.page,
  })
  if (response.status === 200) {
    const repositories: GitHubRepository[] = response.data.items
      .map((item) => {
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
      .filter((item) => isGitHubRepositorys(item))
    return { totalCount: response.data.total_count, repositories }
  }
  return { totalCount: 0, repositories: [] }
}
