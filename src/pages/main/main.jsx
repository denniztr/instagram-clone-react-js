import {UserList, Content} from '../../components/index.js'
import {useGetPostsQuery} from "../../store/api/index.js";
import * as Styled from './main.styles.jsx'

export const Main = () => {
    const {data, isLoading} = useGetPostsQuery()
    return (
        <Styled.Wrapper>
            <Styled.Main>
                {/*<UserList />*/}
                {isLoading ? <p>Loading</p> : <Content posts={data}/>}
            </Styled.Main>
        </Styled.Wrapper>
    )
}