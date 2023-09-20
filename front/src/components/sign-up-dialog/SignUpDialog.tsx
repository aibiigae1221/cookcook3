import { useEffect, useState } from "react";
import Dialog from "../dialog/Dialog";
import styled from "styled-components";
import rawContract from "./contract.txt";

interface SignUpDialogProp {
    show : boolean;
    widthPercentage: number;
    setShowDialog: (show : boolean) => void;
};

const SignUpDialog = ({show, widthPercentage, setShowDialog} : SignUpDialogProp) => {

    const [showContract, setShowContract] = useState(false);
    const [contractTxt, setContractTxt] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch(rawContract)
            .then(r => r.text())
            .then(txt => setContractTxt(txt));
    }, []);

    return (
        <>
            <Dialog show={show} widthPercentage={widthPercentage} setShowDialog={setShowDialog}>
                <Container>
                    <h1>회원가입</h1>

                    <InputFields>
                        <input type="text" placeholder="아이디를 입력해주세요"/>
                        <input type="password" placeholder="비밀번호를 입력해주세요" />
                        <input type="password" placeholder="비밀번호를 똑같이 입력해주세요" />
                        <input type="text" placeholder="닉네임을 입력해주세요"/>
                        <p>{errorMessage}</p>
                    </InputFields>

                    <ButtonGroup>
                        <button className="confirm">회원가입</button>
                        <button onClick={() => setShowContract(!showContract)}>약관보기</button>
                        <button onClick={() => setShowDialog(false)}>닫기</button>
                    </ButtonGroup>

                    {showContract && (
                        <ContractContent readOnly value={contractTxt} />
                    )}
                    

                </Container>
            </Dialog>
        </>
    );
};

const Container = styled.div`
    width:80%;
    margin: 0 auto;
    margin-bottom:30px;
`;




const InputFields = styled.div`
    display:flex;
    flex-direction:column;
    
    & input {
        border:0 none;
        border-bottom:1px solid #000;
        margin-bottom:10px;
        font-size:16pt;
        outline:none;
    }
`;

const ButtonGroup = styled.div`

    margin-top:20px;
    text-align:center;

    & button{
        border:0 none;
        padding:5px;
        cursor:pointer;
        margin-right:10px;
        box-shadow: 3px 3px rgba(0, 0, 0, .2);
    }

    & .confirm{
        background-color:#3FBD20;
        color:#fff;
        box-shadow:
    }
`;

const ContractContent = styled.textarea`
    width:100%;
    margin-top:30px;
    border:0 none;
    border-right:1px solid #333;
    border-left:1px solid #333;
    height:200px;
    resize:none;
    overflow-y:auto;
    
`;


export default SignUpDialog;