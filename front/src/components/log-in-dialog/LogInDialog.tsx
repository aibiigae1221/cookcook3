import { useState, useEffect } from "react";
import Dialog from "../dialog/Dialog";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginThunk } from "../../features/user/userSlice";

interface LogInDialogProp {
    show : boolean;
    setShowDialog: (show : boolean) => void;
};

const LogInDialog = ({show, setShowDialog} : LogInDialogProp) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useAppDispatch();

    const jwt = useAppSelector(state => state.user.jwt);
  
    useEffect(() => {
        if(jwt !== null){
            setShowDialog(false);
        }
    }, [jwt, setShowDialog]);

    const handleLogin = () => {
        if(!(userId.trim().length >= 6)){
            setErrorMessage("아이디를 6자리 이상으로 입력해주세요");
            return;
        }else if(!(password.trim().length >= 4)){
            setErrorMessage("비밀번호를 4자리 이상으로 입력해주세요");
            return;
        }         

        setErrorMessage("");
        
        dispatch(loginThunk({
            userId:userId,
            password:password
        }));
    };

    return (
        <>
            <Dialog show={show} widthPx={450} setShowDialog={setShowDialog}>
                <Container>
                    <h1>로그인</h1>

                    <InputFields>
                        <input 
                            type="text" placeholder="아이디를 입력해주세요" 
                            value={userId} 
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}/>

                        <input 
                            type="password" placeholder="비밀번호를 똑같이 입력해주세요" 
                            value={password} 
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>

                        {errorMessage !== "" && (
                            <ErrorPlaceholder>{errorMessage}</ErrorPlaceholder>
                        )}
                        
                        <LoginButton onClick={handleLogin}>로그인</LoginButton>
                    </InputFields>                   
                    
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

const LoginButton = styled.button`
    background-color: #23ABE2;
    color: #fff;
    padding: 10px 0;
    border: 0 none;
    cursor: pointer;

    &:hover{
        background-color:#27B5EF;
    }
`;

const ErrorPlaceholder = styled.p`
    color:#ff0000;
`;

export default LogInDialog;