import styled from "styled-components";

interface TopBarProps {
    setShowSignUpDialog: (show : boolean) => void;
};

const TopBar = ({setShowSignUpDialog} : TopBarProps) => {

    return (
        <Container>
            <LinkUnOrderedList>
                <li><a href="/">홈</a></li>
                <li><a href="/">로그인</a></li>
                <li onClick={() => setShowSignUpDialog(true)}>회원가입</li>
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