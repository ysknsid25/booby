import { GitHubRepository } from "../pages/api/githubApi"
import Image from 'next/image';

type Props = {
    repository: GitHubRepository
}

export default function RepositoryCard({ repository }: Props) {
    return (
        <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex mb-4 md:flex-row lg:text-7xl font-bold text-slate-500">
                        <Image
                            src={repository.avatorUrl}
                            width={50}
                            height={50}
                            className="rounded-full mb-3 mr-4 h-max"
                            alt="illustration"
                        />
                        <div className="flex justify-center md:items-start flex-col">
                            <h1 className="title-font text-2xl font-medium text-gray-900">{repository.repositoryName}</h1>
                        </div>
                    </div>
                    <p className="leading-relaxed mb-3">{repository.description}</p>
                    <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <i className="ri-star-fill"></i>{repository.stargazersCount}
                        </span>
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <i className="ri-eye-fill"></i>{repository.watchersCount}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <i className="ri-git-branch-line"></i>{repository.forksCount}
                        </span>
                    </div>
                    <div className="flex items-center flex-wrap mt-4">
                        <a className="text-indigo-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none" href={repository.htmlUrl} target="blank">show detail
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}