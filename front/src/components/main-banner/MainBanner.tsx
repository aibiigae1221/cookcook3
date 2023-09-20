import styled from "styled-components";

interface MainBannerProps{
    image : string;
}

const MainBanner = ({image} : MainBannerProps) => {
    return (
        <Container>
            <Image $src={image}/>
        </Container>
    );
};

const Container = styled.section`

`;

const Image = styled.div<{$src: string}>`
    width:100%;
    height:300px;
    background-image:url(${props => props.$src});
    background-position:center;
    background-size: cover;
`;

export default MainBanner;