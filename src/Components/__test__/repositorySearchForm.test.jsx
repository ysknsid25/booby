import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepositorySearchForm from "@/Components/repositorySearchForm"

describe('RepositSearchFormのテスト', () => {
    test('RepositSearchFormに言語選択コンボボックスが設定されているかどうか', () => {
        const { getAllByRole } = render(<RepositorySearchForm language="php" sort="stars"/>);
        const selectElements = getAllByRole('combobox');
            const targetElement = selectElements.find((element) =>
                element.getAttribute('name') === "language"
            );
            expect(targetElement).toBeInTheDocument();
    })
    test('RepositSearchFormにソート選択コンボボックスが設定されているかどうか', () => {
        const { getAllByRole } = render(<RepositorySearchForm language="php" sort="stars"/>);
        const selectElements = getAllByRole('combobox');
            const targetElement = selectElements.find((element) =>
                element.getAttribute('name') === "sort"
            );
            expect(targetElement).toBeInTheDocument();
    });
    test('RepositSearchFormに検索ボタンが設定されているかどうか', () => {
        const { getByRole } = render(<RepositorySearchForm language="php" sort="stars"/>);
        const buttonElements = getByRole('button');
        expect(buttonElements).toHaveAttribute('name', 'searchbutton')
    });
});