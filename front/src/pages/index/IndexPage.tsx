import styled from "styled-components";
import TopBar from "../../components/top-bar/TopBar";
import Gnb from "../../components/gnb/Gnb";
import mainBannerImage from "./banner.jpg";
import MainBanner from "../../components/main-banner/MainBanner";
import SignUpDialog from "../../components/sign-up-dialog/SignUpDialog";
import { useState } from "react";
import LogInDialog from "../../components/log-in-dialog/LogInDialog";

const IndexPage = () => {

    const [showSignUpDialog, setShowSignUpDialog] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    return (
        <div>
            <TopBar setShowSignUpDialog={setShowSignUpDialog} setShowLoginDialog={setShowLoginDialog}/>
            <Gnb />
            <MainBanner image={mainBannerImage} />
            
            <MiddleSection>
                
            </MiddleSection>

            <SignUpDialog show={showSignUpDialog} setShowDialog={setShowSignUpDialog} />
            <LogInDialog show={showLoginDialog} setShowDialog={setShowLoginDialog} />

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