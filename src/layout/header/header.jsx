import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo, Navigation } from './ui/index.js';
import { IoIosAddCircleOutline } from 'react-icons/io';
import * as Styled from './header.styles.js';

export const Header = () => {
    // const user = useSelector((state) => state.user.user);
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Logo />
                    {user ? (
                        <Link to="add">
                            <IoIosAddCircleOutline size={35} />
                        </Link>
                    ) : null}
                    <Navigation user={user} />
                </Styled.Container>
            </Styled.Wrapper>
            <Outlet />
        </>
    );
};
