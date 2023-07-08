import { render } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import Header from '../header'

describe('Header部分のテスト', () => {
  test('boobyというタイトル文字が表示されているかどうか', () => {
    const { getByText } = render(<Header />)
    expect(getByText('booby')).toBeInTheDocument()
  })
  test('Sponsorボタンが表示されているかどうか', () => {
    const { getByRole } = render(<Header />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveAttribute('name', 'sponsorbutton')
  })
})
