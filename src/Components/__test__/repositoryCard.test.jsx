import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepositoryCard from '@/Components/repositoryCard'


const repository = {
    id: 1,
    htmlUrl: "https://github.com/ysknsid25/booby",
    repositoryName: "booby",
    avatorUrl: "https://avatars.githubusercontent.com/u/62782878?v=4",
    description: "コントリビュートしやすそうなOSSプロジェクトを探すためのツールです",
    stargazersCount: 100,
    watchersCount: 200,
    forksCount: 300
}

describe('RepositoryCardのテスト', () => {
    test('RepositoryCardに画像が表示されているかどうか', () => {
        const { getByRole } = render(<RepositoryCard repository={repository}/>);
        const imgElement = getByRole('img');
        const src = imgElement.getAttribute('src');
        const exp = "/_next/image?url=" + encodeURIComponent(repository.avatorUrl) + "&w=128&q=75";
        expect(src).toBe(exp);
    });
    test('RepositoryCardにリポジトリ名が表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText(repository.repositoryName)).toBeInTheDocument();
    });
    test('RepositoryCardにリポジトリの説明文が表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText(repository.description)).toBeInTheDocument();
    });
    test('RepositoryCardにスター数が表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText(repository.stargazersCount)).toBeInTheDocument();
    });
    test('RepositoryCardにウォッチ数が表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText(repository.watchersCount)).toBeInTheDocument();
    });
    test('RepositoryCardにフォーク数が表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText(repository.forksCount)).toBeInTheDocument();
    });
    test('RepositoryCardにShowDetailリンクが表示されているかどうか', () => {
        const { getByText } = render(<RepositoryCard repository={repository}/>);
        expect(getByText("show detail")).toBeInTheDocument();
    });
    test('RepositoryCardにShowDetailリンクのhrefが正しく表示されているかどうか', () => {
        const { getByRole } = render(<RepositoryCard repository={repository}/>);
        const anchorElement = getByRole('link');
        const href = anchorElement.getAttribute('href');
        expect(href).toBe(repository.htmlUrl);
    });
});