import React, { useState } from 'react'

type Option = {
  label: string
  value: string
}

type Props = {
  defaultVal: string
  name: string
  options: Option[]
}

export default function Select({ name, options, defaultVal }: Props) {
  const [selected, setSelected] = useState(defaultVal)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }
  return (
    <select
      name={name}
      defaultValue={selected}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
