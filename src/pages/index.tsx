import HeadComp from '../Components/head'
import styles from '@/styles/Home.module.css'
import { GitHubRepository, getRepositories } from "./api/githubApi"

type Props = {
  repositories: GitHubRepository[]
}

export default function Home({ repositories }: Props) {
  return (
    <>
      <HeadComp />
      <main className={styles.main}>
        <div className={styles.description}>
          {repositories.map((repository) =>
            <p key={repository.id}>
              {repository.repositoryName} / {repository.stargazersCount}
            </p>
          )}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const searchCondition = {
    language: 'javascript',
    sort: 'stars'
  }
  if (Object.keys(context.query).length > 0) {
    searchCondition.language = context.query.language
    searchCondition.sort = context.query.sort
  }
  const repositories = await getRepositories(searchCondition)
  return {
    props: {
      repositories
    }
  }
}