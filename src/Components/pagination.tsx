import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  currentPage: number
  totalCount: number
  perPage: number
}

export default function Pagination({ currentPage, totalCount, perPage }: Props) {
  const router = useRouter()
  let totalPage = Math.ceil(totalCount / perPage)
  // 1000件以上はAPI制限でエラーになるため、1000件までの遷移先しか表示しない
  if (totalCount > 1000) {
    totalPage = Math.floor(1000 / perPage)
  }
  // 5ページ以下の場合は全て表示する
  let pageNumbers: Array<string | number> = []
  if (totalPage <= 5) {
    pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1)
  } else {
    pageNumbers = [1, 2, '...', totalPage - 1, totalPage]
  }
  return (
    <div className='flex items-center justify-center bg-white px-4 py-3 sm:px-6'>
      <nav className='inline-flex gap-x-1.5' aria-label='Pagination'>
        {pageNumbers.map((pageNumber) => {
          if (pageNumber === '...') {
            return (
              <span
                key={pageNumber}
                className='w-10 h-10 rounded-full inline-flex items-center text-lg justify-center'
              >
                ...
              </span>
            )
          }
          if (pageNumber === currentPage) {
            return (
              <Link
                key={pageNumber}
                href={{ pathname: router.pathname, query: { ...router.query, page: pageNumber } }}
                className='w-10 h-10 rounded-full inline-flex items-center justify-center bg-indigo-600 text-sm font-semibold text-white'
              >
                {pageNumber}
              </Link>
            )
          }
          return (
            <Link
              key={pageNumber}
              href={{ pathname: router.pathname, query: { ...router.query, page: pageNumber } }}
              className='w-10 h-10 rounded-full inline-flex items-center justify-center ring-1 ring-inset ring-gray-300 text-sm'
            >
              {pageNumber}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
