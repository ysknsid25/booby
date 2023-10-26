import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import Select from '@/Components/select'

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
]

describe('SelectBoxのテスト', () => {
  test('SelectBoxにname属性が設定されているかどうか', () => {
    const { getByRole } = render(
      <Select name='optionstest' defaultVal={options[0].value} options={options} />,
    )
    const selectElement = getByRole('combobox')
    expect(selectElement).toHaveAttribute('name', 'optionstest')
  })
  test('defaultValueが正しく設定されていることを確認する', () => {
    const defaultVal = 'a'
    const { getByRole } = render(
      <Select name='optionstest' options={options} defaultVal={options[0].value} />,
    )
    const selectElement = getByRole('combobox')
    const selectedOptionValue = selectElement.selectedOptions[0].value
    expect(selectedOptionValue).toBe(defaultVal)
  })
})
