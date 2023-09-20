import styled from "styled-components";
import TopBar from "../../components/top-bar/TopBar";
import Gnb from "../../components/gnb/Gnb";
import mainBannerImage from "./banner.jpg";
import MainBanner from "../../components/main-banner/MainBanner";
import SignUpDialog from "../../components/sign-up-dialog/SignUpDialog";
import { useState } from "react";

const IndexPage = () => {

    const [showSignUpDialog, setShowSignUpDialog] = useState(false);

    return (
        <div>
            <TopBar setShowSignUpDialog={setShowSignUpDialog}/>
            <Gnb />
            <MainBanner image={mainBannerImage} />
            
            <MiddleSection>
                
            </MiddleSection>

            <SignUpDialog widthPercentage={50} show={showSignUpDialog} setShowDialog={setShowSignUpDialog} />
        </div>
    );
};


const MiddleSection = styled.section`
    display:flex;
    width:80%;
    margin:0 auto;
    border:1px solid black;

`;


export default IndexPage;