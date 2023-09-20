import styled from "styled-components";

const Gnb = () => {
    return (
        <Container>
            <MenuList>
                <li><a href="/">요리 검색</a></li>
                <li><a href="/">요리사 구인</a></li>
                <li><a href="/">공지사항</a></li>
                <li><a href="/">ABOUT ME</a></li>
            </MenuList>
        </Container>
    );
};

const Container = styled.section`
    border-bottom:1px solid #aaa;
`;

const MenuList = styled.ul`
    list-style-type:none;
    padding-inline-start: 0;
    display:flex;
    
    & li{
        transform: translateY(6px);
    }

    & li a{
        text-decoration:none;
        color:#333;
        margin-right:-1px;
        border:1px solid #aaa;
        padding:10px 20px;

    }

    & li a:hover{
        background-color:#ccc;
    }

`;

export default Gnb;