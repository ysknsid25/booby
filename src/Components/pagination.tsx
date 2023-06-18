import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  currentPage: number
  totalCount: number
  perPage: number
}

/**
 * ページ番号を表示するための配列を返す関数です。
 *
 * @param {number} currentPage - 現在のアクティブなページ番号です。
 * @param {number} totalPage - 総ページ数です。
 * @returns {Array<string | number>} - 表示するページ番号の配列です。
 */
function getPageNumbers(currentPage: number, totalPage: number): Array<string | number> {
  // 6ページ以下の場合は全て表示する
  if (totalPage <= 6) {
    return Array.from({ length: totalPage }, (_, index) => index + 1)
  }

  const pagesArray = []
  const startPage = Math.max(currentPage - 2, 1)
  const endPage = Math.min(currentPage + 2, totalPage)

  for (let i = startPage; i <= endPage; i++) {
    pagesArray.push(i)
  }

  if (endPage <= totalPage - 1) {
    if (endPage <= totalPage - 2) pagesArray.push('...')
    pagesArray.push(totalPage)
  }
  if (startPage >= 2) {
    if (startPage >= 3) pagesArray.unshift('...')
    pagesArray.unshift(1)
  }

  return pagesArray
}

export default function Pagination({ currentPage, totalCount, perPage }: Props) {
  const router = useRouter()
  let totalPage = Math.ceil(totalCount / perPage)
  const apiMaxCount = 1000
  if (totalCount > apiMaxCount) {
    totalPage = Math.floor(apiMaxCount / perPage)
  }
  let pageNumbers: Array<string | number> = getPageNumbers(currentPage, totalPage)
  return (
    <div className='flex items-center justify-center bg-white px-4 py-3 sm:px-6'>
      <nav className='inline-flex gap-x-1.5' aria-label='Pagination'>
        {pageNumbers.map((pageNumber, i) => {
          if (pageNumber === '...') {
            return (
              <span
                key={i}
                className='w-10 h-10 rounded-full inline-flex items-center text-lg justify-center'
              >
                ...
              </span>
            )
          }
          return (
            <Link
              key={i}
              href={{ pathname: router.pathname, query: { ...router.query, page: pageNumber } }}
              className={`w-10 h-10 rounded-full inline-flex items-center justify-center text-sm ${
                pageNumber === currentPage
                  ? 'bg-indigo-600 font-semibold text-white'
                  : 'ring-1 ring-inset ring-gray-300'
              }`}
            >
              {pageNumber}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
