import { useState, useEffect } from 'react'
import useSWR from 'swr'
import RepositorySearchForm, {
  SortOption,
} from '../Components/repositorySearchForm'
import { getRepositories } from './api/githubApi'
import type { GitHubRepositorySearch } from './api/githubApi'
import HeadComp from '@/Components/head'
import Header from '@/Components/header'
import Loader from '@/Components/loader'
import RepositoryCard from '@/Components/repositoryCard'
import type { GitHubRepository } from '@/type/GitHubRepository'

const defaultSearchCondition: GitHubRepositorySearch = {
  language: 'javascript',
  sort: 'stars',
  page: 1,
  perPage: 50
}

export default function Home() {
  const [repositorySet, setRepositorySet] = useState<GitHubRepository[]>([])
  const [serachCondition, setSearchCondition] = useState<GitHubRepositorySearch>(defaultSearchCondition)
  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCondition({
      ...serachCondition,
      language: event.target.value
    })
  }
  const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value as SortOption['value']
    setSearchCondition({
      ...serachCondition,
      sort: sort
    })
  }
  const pageCountUp = () => {
    setSearchCondition({
      ...serachCondition,
      page: serachCondition.page + 1
    })
  }
  const { data: repositories, error, isLoading }
    = useSWR(serachCondition ? `fetch/repositories?language=${serachCondition.language}&sort=${serachCondition.sort}&page=${serachCondition.page}` : null, () => getRepositories(serachCondition))

  useEffect(() => {
    if (!isLoading && repositories) {
      setRepositorySet(prev => [...prev, ...repositories])
    }
  }, [isLoading, repositories, setRepositorySet])

  return (
    <>
      <HeadComp />
      <Header />
      <main>
        {isLoading && <Loader />}
        {!isLoading &&
          <>
            <div className='flex justify-end mr-8'>
              <RepositorySearchForm language={serachCondition.language} sort={serachCondition.sort} onChangeLanguage={onChangeLanguage} onChangeSort={onChangeSort} />
            </div>
            <div className='flex flex-wrap p-4 justify-center'>
              {error && <h1>API Error. Please retry </h1>}
              {!error && repositorySet && repositorySet.length > 0 ? (
                repositorySet.map((repository: GitHubRepository) => (
                  <RepositoryCard key={repository.id} repository={repository} />
                ))
              ) : (
                <h1>NO More Data</h1>
              )}
            </div>
            <div className='flex justify-center mb-8'>
              <button
                className="bg-transparent hover:bg-indigo-500 text-indigo-500 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
                onClick={pageCountUp}> Load More</button>
            </div>
          </>
        }
      </main>
    </>
  )
}