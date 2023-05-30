import { GitHubRepository, getRepositories } from './api/githubApi'
import HeadComp from '@/Components/head'
import Header from '@/Components/header'
import RepositoryCard from '@/Components/repositoryCard'
import RepositorySearchForm, {
  languageOprionts,
  sortOptions,
} from '@/Components/repositorySearchForm'

type Props = {
  repositories: GitHubRepository[]
  language: string
  sort: string
}

export default function Home({ repositories, language, sort }: Props) {
  return (
    <>
      <HeadComp />
      <Header />
      <main>
        <div className='flex justify-end mr-8'>
          <RepositorySearchForm language={language} sort={sort} />
        </div>
        <div className='flex flex-wrap p-4 justify-center'>
          {repositories.length > 0 ? (
            repositories.map((repository) => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))
          ) : (
            <h1>NO Data or API Error. Please wait </h1>
          )}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const searchCondition = {
    language: 'javascript',
    sort: 'stars',
  }
  let language = 'javascript'
  let sort = 'stars'
  if (Object.keys(context.query).length > 0) {
    if (context.query.language !== '') {
      searchCondition.language = context.query.language
      language =
        languageOprionts.find((option) => option.value === context.query.language)?.value ??
        'javascript'
    }
    if (context.query.sort !== '') {
      searchCondition.sort = context.query.sort
      sort = sortOptions.find((option) => option.value === context.query.sort)?.value ?? 'stars'
    }
  }
  const repositories = await getRepositories(searchCondition)
  return {
    props: {
      repositories,
      language,
      sort,
    },
  }
}
