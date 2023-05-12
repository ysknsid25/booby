type Option = {
    label: string,
    value: string
}

type Props = {
    defaultVal: string,
    name: string,
    options: Option[],
    onChangeHandle: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ name, options, defaultVal, onChangeHandle }: Props) {
    return (
        <select name={name} defaultValue={defaultVal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChangeHandle}>
            {options.map((option) => <option key={option.value} value={option.value} >{option.label}</option>)}
        </select>
    )
}