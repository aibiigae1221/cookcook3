import { ReactNode } from "react";
import styled from "styled-components";

interface DialogProps{
    children : ReactNode;
    widthPx : number;
    show: boolean;
    setShowDialog: (show : boolean) => void;
}

const Dialog = ({widthPx, show, setShowDialog, children} : DialogProps) => {

    const handleClose = () => setShowDialog(false);

    if(!show){
        return <></>;
    }    

    return (
        <BackgroundWrapper>
            <ContentContainer $widthPx={widthPx}>
                {children}
                <CloseButton onClick={handleClose}>X</CloseButton>
            </ContentContainer>
        </BackgroundWrapper>
    );
};

const BackgroundWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.5);
    z-index:0;

`;

const ContentContainer = styled.div<{$widthPx : number}>`
    background-color:#fff;
    z-index:1;
    position:absolute;
    width: ${props => props.$widthPx}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
    position:absolute;
    right:0;
    top: 1px;
    border:0 none;
    cursor:pointer;
    font-size:16pt;
    width:50px;
    height:50px;
`;

export default Dialog;