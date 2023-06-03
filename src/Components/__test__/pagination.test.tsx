import { fireEvent, getAllByRole, getByRole, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../pagination'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: '/',
    query: {language: 'javascript'},
  }),
}))

describe('Paginationのテスト', () => {
  test('Paginationのページ数が5以下の場合にlinkの数がページと同じように表示されているかどうか', () => {
    const totalCount = 100;
    const perPage = 50;
    const totalPage = Math.ceil(totalCount / perPage); // 2
    const { getAllByRole } = render(<Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />)
    expect(getAllByRole('link')).toHaveLength(totalPage)
  })
  test('Paginationのページ数が6以上の場合に「...」が表示されているかどうか', () => {
    const totalCount = 300
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 6
    const { getByText } = render(<Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />)
    expect(getByText('...')).toBeInTheDocument()
  })
  test('Paginationのページ数が6以上の場合にlinkの数が4つ表示されているかどうか', () => {
    const totalCount = 251
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 6
    const { getAllByRole } = render(<Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />)
    expect(getAllByRole('link')).toHaveLength(4)
  })
  test('Paginationのページ数が6以上の場合にlinkの数が4つ表示されているかどうか', () => {
    const totalCount = 251
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 6
    const { getAllByRole } = render(<Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />)
    expect(getAllByRole('link')).toHaveLength(4)
  })
  test('PaginationのtotalCountが1000を超える場合は1000を超えるアイテムが表示されるページへの遷移をしないようにする', () => {
    const totalCount = 2000
    const perPage = 50
    const { getAllByRole } = render(<Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />)
    const links = getAllByRole('link')
    const lastLink = links[links.length - 1]
    expect(lastLink.textContent).toBe('20')
  })
  test('Paginationの現在のページのボタンがアクティブ表記されているか', () => {
    const totalCount = 500
    const perPage = 50
    const { getByText } = render(<Pagination currentPage={2} totalCount={totalCount} perPage={perPage} />)
    const activePageLink = getByText('2')
    expect(activePageLink).toHaveClass('bg-indigo-600')
  })
  test('Paginationのlinkが遷移するか', () => {
    const totalCount = 500
    const perPage = 50
    const totalPage = Math.ceil(totalCount / perPage) // 10
    const { getAllByRole } = render(
      <Pagination currentPage={1} totalCount={totalCount} perPage={perPage} />,
    )
    const links = getAllByRole('link')
    const lastLink = links[links.length - 1]
    expect(lastLink.textContent).toBe('10')
    expect(lastLink).toHaveAttribute('href', '/?language=javascript&page=10')
  })
})
