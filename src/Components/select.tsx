import React, { useState } from 'react'

type Option = {
  label: string
  value: string
}

interface Props {
  selectedVal: string
  name: string
  options: Option[],
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ name, options, selectedVal, onchange }: Props) {
  return (
    <select
      name={name}
      defaultValue={selectedVal}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      onChange={onchange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
