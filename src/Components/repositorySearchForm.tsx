import { useState } from "react"
import Select from "@/Components/select"

export const languageOprionts = [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Go", value: "go" },
    { label: "Java", value: "java" },
    { label: "Kotlin", value: "kotlin" },
    { label: "Rust", value: "rust" },
    { label: "Ruby", value: "ruby" },
    { label: "PHP", value: "php" },
    { label: "Perl", value: "perl" },
    { label: "Swift", value: "swift" },
    { label: "C", value: "c" },
    { label: "C#", value: "c#" },
    { label: "C++", value: "c++" },
    { label: "Vue", value: "Vue" },
]

export const sortOptions = [
    { label: "Stars", value: "stars" },
    { label: "Forks", value: "forks" },
]

type Props = {
    language: string,
    sort: string
}

export default function RepositorySearchForm({ language, sort }: Props) {
    const [languageVal, setLanguageVal] = useState(language)
    const [sortVal, setSortVal] = useState(sort)
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguageVal(event.target.value)
    }
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortVal(event.target.value)
    }
    return (
        <form method="get" action="/">
            <div className="mt-4 flex flex-row">
                <div className="mr-4">
                    <Select name="language" defaultVal={languageVal} options={languageOprionts} onChangeHandle={handleLanguageChange} />
                </div>
                <div className="mr-4">
                    <Select name="sort" defaultVal={sortVal} options={sortOptions} onChangeHandle={handleSortChange} />
                </div>
                <div>
                    <button type="submit" className="border border-black text-black font-bold py-2 px-4 rounded-full">
                        <i className="ri-search-line"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}