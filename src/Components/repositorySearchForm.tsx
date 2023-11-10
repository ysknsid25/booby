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

export type SortOption = {
  label: string
  value: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
}

export const sortOptions: SortOption[] = [
  { label: 'Stars', value: 'stars' },
  { label: 'Forks', value: 'forks' },
]

interface Props {
  language: string
  sort: string
  onChangeLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function RepositorySearchForm({ language, sort, onChangeLanguage, onChangeSort }: Props) {
  return (
    <form method='get' action='/'>
      <div className='mt-4 flex flex-row'>
        <div className='mr-4'>
          <Select name='language' selectedVal={language} options={languageOprionts} onchange={onChangeLanguage} />
        </div>
        <div className='mr-4'>
          <Select name='sort' selectedVal={sort} options={sortOptions} onchange={onChangeSort} />
        </div>
        <div>
          <button
            type='submit'
            id='searchbutton'
            className='border border-black text-black font-bold py-2 px-4 rounded-full'
          >
            <i className='ri-search-line'></i>
          </button>
        </div>
      </div>
    </form>
  )
}
