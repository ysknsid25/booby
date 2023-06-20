import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../pagination'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: '/',
    query: { language: 'javascript' },
  }),
}))

describe('Paginationのテスト', () => {
  test('Paginationのページ数が6以下の場合にlinkの数がページと同じように表示されているかどうか', () => {
    const totalCount = 100
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 2
    const { getAllByRole } = render(
      <Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />,
    )
    expect(getAllByRole('link')).toHaveLength(totalPage)
  })
  test('Paginationのページ数が7以上の場合に「...」が表示されているかどうか', () => {
    const totalCount = 350
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getByText } = render(
      <Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />,
    )
    expect(getByText('...')).toBeInTheDocument()
  })
  test('Paginationのページ数が7以上の場合にlinkの数が5つ表示されているかどうか', () => {
    const totalCount = 301
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getAllByRole } = render(
      <Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />,
    )
    expect(getAllByRole('link')).toHaveLength(6)
  })
  test('Paginationのページ数が7以上の場合かつ現在ページが4のときに左右に「...」が表示されているかどうか', () => {
    const totalCount = 301
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getByRole } = render(
      <Pagination currentPage={4} totalCount={totalCount} perPage={perPage} />,
    )
    const pagination = getByRole('navigation')
    const children = pagination.children
    expect(children[1].textContent).toBe('...')
    expect(children[children.length - 2].textContent).toBe('...')
  })
  test('Paginationのページ数が7以上の場合かつ現在ページが4のときにlinkの数が5つ表示されているかどうか', () => {
    const totalCount = 301
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getAllByRole } = render(
      <Pagination currentPage={4} totalCount={totalCount} perPage={perPage} />,
    )
    expect(getAllByRole('link')).toHaveLength(7)
  })
  test('Paginationのページ数が7以上の場合かつ現在ページが最終ページの2ページ前のときに左に「...」が表示されているかどうか', () => {
    const totalCount = 301
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getByRole } = render(
      <Pagination currentPage={totalPage - 2} totalCount={totalCount} perPage={perPage} />,
    )
    const pagination = getByRole('navigation')
    const children = pagination.children
    expect(children[1].textContent).toBe('...')
    expect(children[children.length - 1].textContent).not.toBe('...')
  })
  test('Paginationのページ数が7以上の場合かつ現在ページが最終ページの2ページ前のときにlinkの数が5つ表示されているかどうか', () => {
    const totalCount = 301
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 7
    const { getAllByRole } = render(
      <Pagination currentPage={totalPage - 2} totalCount={totalCount} perPage={perPage} />,
    )
    expect(getAllByRole('link')).toHaveLength(6)
  })
  test('PaginationのtotalCountが1000を超える場合は1000を超えるアイテムが表示されるページへの遷移をしないようにする', () => {
    const totalCount = 2000
    const perPage = 50
    const { getAllByRole, queryByText } = render(
      <Pagination currentPage={20} totalCount={totalCount} perPage={perPage} />,
    )
    const links = getAllByRole('link')
    const lastLink = links[links.length - 1]
    expect(lastLink.textContent).toBe('20')
    expect(queryByText('21')).toBeNull()
  })
  test('Paginationの現在のページのボタンがアクティブ表記されているか', () => {
    const totalCount = 500
    const perPage = 50
    const { getByText } = render(
      <Pagination currentPage={2} totalCount={totalCount} perPage={perPage} />,
    )
    const activePageLink = getByText('2')
    expect(activePageLink).toHaveClass('bg-indigo-600')
  })
  test('Paginationのlinkが遷移するか', () => {
    const totalCount = 500
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 10
    const { getByText } = render(
      <Pagination currentPage={8} totalCount={totalCount} perPage={perPage} />,
    )
    const link = getByText('9')
    expect(link).toHaveAttribute('href', '/?language=javascript&page=9')
  })
})
