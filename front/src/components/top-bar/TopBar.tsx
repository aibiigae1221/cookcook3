import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";

interface TopBarProps {
    setShowSignUpDialog: (show : boolean) => void;
    setShowLoginDialog : (show : boolean) => void;
};

const TopBar = ({setShowSignUpDialog, setShowLoginDialog} : TopBarProps) => {

    const jwt = useAppSelector(state => state.user.jwt);

    const invalidateJwt = () => {
        
    };

    return (
        <Container>
            <LinkUnOrderedList>
                <li><Link to={"/"}>홈</Link></li>
                {jwt === null && (
                    <>
                        <li onClick={() => setShowLoginDialog(true)}>로그인</li>
                        <li onClick={() => setShowSignUpDialog(true)}>회원가입</li>
                    </>
                )}

                {jwt !== null && (
                    <>
                        <li onClick={() => invalidateJwt()}>로그아웃</li>
                    </>
                )}

                
            </LinkUnOrderedList>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: flex-end;
`;


const LinkUnOrderedList = styled.ul`
    list-style-type:none;
    padding-inline-start: 0;
    display:flex;

    & li{
        margin-right:30px;
        color:#333;
        text-decoration:none;
        cursor:pointer;
    }

    & li a{
        color:#333;
        text-decoration:none;
        cursor:pointer;
        
    }

`;

export default TopBar;