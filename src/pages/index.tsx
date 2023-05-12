import HeadComp from '@/Components/head'
import Header from '@/Components/header'
import RepositoryCard from '@/Components/repositoryCard'
import { GitHubRepository, getRepositories } from "./api/githubApi"
import { useState } from "react"
import Select from "@/Components/select"

type Props = {
  repositories: GitHubRepository[]
  language: string
  sort: string
}

const languageOprionts = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Go", value: "go" },
  { label: "Java", value: "java" },
  { label: "Kotlin", value: "kotlin" },
  { label: "Rust", value: "rust" },
  { label: "Ruby", value: "ruby" },
  { label: "PHP", value: "php" },
  { label: "Perl", value: "perl" },
  { label: "Swift", value: "swift" },
  { label: "C", value: "c" },
  { label: "C#", value: "c#" },
  { label: "C++", value: "c++" },
  { label: "Vue", value: "Vue" },
]

const sortOptions = [
  { label: "Stars", value: "stars" },
  { label: "Forks", value: "forks" },
]

export default function Home({ repositories, language, sort }: Props) {
  const [languageVal, setLanguageVal] = useState(language)
  const [sortVal, setSortVal] = useState(sort)
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageVal(event.target.value)
  }
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortVal(event.target.value)
  }
  return (
    <>
      <HeadComp />
      <Header />
      <main>
        <div className="flex justify-center">
          <form method="get" action="/">
            <div className="mt-4 flex flex-row">
              <div className="mr-4">
                <Select name="language" defaultVal={languageVal} options={languageOprionts} onChangeHandle={handleLanguageChange} />
              </div>
              <div className="mr-4">
                <Select name="sort" defaultVal={sortVal} options={sortOptions} onChangeHandle={handleSortChange} />
              </div>
              <div>
                <button type="submit" className="border border-black text-black font-bold py-2 px-4 rounded-full">
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 justify-center">
          {repositories.length > 0 ? repositories.map((repository) => <RepositoryCard key={repository.id} repository={repository} />) : <h1>no data</h1>}
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
  let language = "javascript"
  let sort = "stars"
  if (Object.keys(context.query).length > 0) {
    if (context.query.language !== '') {
      searchCondition.language = context.query.language
      language = languageOprionts.find((option) => option.value === context.query.language)?.value ?? "javascript"
    }
    if (context.query.sort !== '') {
      searchCondition.sort = context.query.sort
      sort = sortOptions.find((option) => option.value === context.query.sort)?.value ?? "stars"
    }
  }
  const repositories = await getRepositories(searchCondition)
  return {
    props: {
      repositories,
      language,
      sort
    }
  }
}