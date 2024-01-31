import * as Styled from './search.styles.js';

export const SearchQuery = () => {
    return (
        <Styled.SearchContainer>
            <Styled.SearchInput
                type="text"
                placeholder="Поиск по хештегам..."
            />
            <Styled.HashTagIcon>#</Styled.HashTagIcon>
        </Styled.SearchContainer>
    );
};
