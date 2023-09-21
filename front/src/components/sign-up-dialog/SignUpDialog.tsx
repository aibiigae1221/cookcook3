import { useEffect, useState } from "react";
import Dialog from "../dialog/Dialog";
import styled from "styled-components";
import rawContract from "./contract.txt";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectBackBasePath } from "../../features/meta/serverInfoSlice";

interface SignUpDialogProp {
    show : boolean;
    widthPercentage: number;
    setShowDialog: (show : boolean) => void;
};

const SignUpDialog = ({show, widthPercentage, setShowDialog} : SignUpDialogProp) => {

    const [showContract, setShowContract] = useState(false);
    const [contractTxt, setContractTxt] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [nickname, setNickname] = useState("");

    const basePath = useSelector(selectBackBasePath);

    useEffect(() => {
        fetch(rawContract)
            .then(r => r.text())
            .then(txt => setContractTxt(txt));
    }, []);

    const handleSignUp = () => {
        if(!(userId.trim().length >= 6)){
            setErrorMessage("아이디를 6자리 이상으로 입력해주세요");
            return;
        }else if(!(password.trim().length >= 4)){
            setErrorMessage("비밀번호를 4자리 이상으로 입력해주세요");
            return;
        }else if(!(password.trim() === password2.trim())){
            setErrorMessage("비밀번호와 재확인 비밀번호를 일치시켜주세요");
            return;
        }else if(!(nickname.trim().length >= 2)){
            setErrorMessage("닉네임을 2자리 이상으로 입력해주세요")
            return;
        }     

        fetch(`${basePath}/sign-up`, {
            method:"post",
            headers: {
                "Content-Type": "applicaiton/json;charset=utf-8"
            },
            body: JSON.stringify({
                userId: userId.trim(),
                password: password.trim(),
                nickname: nickname.trim()
            })
        }).then(result => {
            setUserId("");
            setPassword("");
            setPassword2("");
            setNickname("");

            setErrorMessage("");
            setSuccessMessage("회원가입에 성공하였습니다.");
        });
        

        

    };

    return (
        <>
            <Dialog show={show} widthPercentage={widthPercentage} setShowDialog={setShowDialog}>
                <Container>
                    <h1>회원가입</h1>

                    <InputFields>
                        <input 
                            type="text" placeholder="아이디를 입력해주세요" 
                            value={userId} 
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}/>

                        <input 
                            type="password" placeholder="비밀번호를 똑같이 입력해주세요" 
                            value={password} 
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                        <input 
                            type="password" placeholder="비밀번호를 입력해주세요" 
                            value={password2} 
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}/>
                        <input 
                            type="text" placeholder="닉네임을 입력해주세요"
                            value={nickname}
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}/>

                        <ErrorPlaceholder>{errorMessage}</ErrorPlaceholder>
                        <p>{successMessage}</p>
                    </InputFields>

                    <ButtonGroup>
                        <button className="confirm" onClick={handleSignUp}>회원가입</button>
                        <button onClick={() => setShowContract(!showContract)}>약관보기</button>
                        <button onClick={() => setShowDialog(false)}>닫기</button>
                    </ButtonGroup>

                    
                    <ContractContent readOnly value={contractTxt} className={classNames({"show" : showContract})} />
                    
                    

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
    height:0px;
    resize:none;
    overflow-y:auto;
    transition:height 1s;

    &.show{
        height:200px;
        transition:height 1s;
    }
`;

const ErrorPlaceholder = styled.p`
    color:#ff0000;
`;

export default SignUpDialog;