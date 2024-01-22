import {UserList} from '../../components/index.js'

import * as Styled from './main.styles.jsx'

export const Main = () => {
    return (
        <Styled.Wrapper>
            <Styled.Main>
                <UserList />
                {/*<div style={{width: '1000px', height: '1000px', backgroundColor: 'gray'}}></div>*/}
            </Styled.Main>
        </Styled.Wrapper>
    )
}