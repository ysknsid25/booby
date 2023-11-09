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

export const isGitHubRepositorys = (data: unknown): boolean => {
  if (data !== undefined && data !== null) {
    const item = data as GitHubRepository
    return (
      typeof item.id === 'number' &&
      typeof item.htmlUrl === 'string' &&
      typeof item.repositoryName === 'string' &&
      (typeof item.avatorUrl === 'string' || typeof item.avatorUrl === 'undefined') &&
      (typeof item.description === 'string' || typeof item.description === 'undefined') &&
      typeof item.stargazersCount === 'number' &&
      typeof item.watchersCount === 'number' &&
      typeof item.watchersCount === 'number' &&
      typeof item.forksCount === 'number'
    )
  }
  return false
}
