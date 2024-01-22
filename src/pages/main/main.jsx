import {UserList, Content} from '../../components/index.js'

import * as Styled from './main.styles.jsx'

export const Main = () => {
    return (
        <Styled.Wrapper>
            <Styled.Main>
                <UserList />
                <Content />
            </Styled.Main>
        </Styled.Wrapper>
    )
}