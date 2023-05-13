import Select from '@/Components/select'

export const languageOprionts = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'Go', value: 'go' },
  { label: 'Java', value: 'java' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'Rust', value: 'rust' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'PHP', value: 'php' },
  { label: 'Perl', value: 'perl' },
  { label: 'Swift', value: 'swift' },
  { label: 'C', value: 'c' },
  { label: 'C#', value: 'c#' },
  { label: 'C++', value: 'c++' },
  { label: 'Vue', value: 'Vue' },
]

export const sortOptions = [
  { label: 'Stars', value: 'stars' },
  { label: 'Forks', value: 'forks' },
]

type Props = {
  language: string
  sort: string
}

export default function RepositorySearchForm({ language, sort }: Props) {
  return (
    <form method='get' action='/'>
      <div className='mt-4 flex flex-row'>
        <div className='mr-4'>
          <Select name='language' defaultVal={language} options={languageOprionts} />
        </div>
        <div className='mr-4'>
          <Select name='sort' defaultVal={sort} options={sortOptions} />
        </div>
        <div>
          <button
            type='submit'
            name='searchbutton'
            className='border border-black text-black font-bold py-2 px-4 rounded-full'
          >
            <i className='ri-search-line'></i>
          </button>
        </div>
      </div>
    </form>
  )
}
