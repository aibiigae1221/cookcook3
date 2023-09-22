import {ReactNode, useEffect} from "react";
import { useAppDispatch } from "../../app/hooks";
import { initialize } from "./serverInfoSlice";


interface ServerInfoProviderProps {
    children : ReactNode;
}

const ServerInfoProvider = ({children} : ServerInfoProviderProps) => {

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);
    
    return (
        <>
            {children}
        </>
    );
};

export default ServerInfoProvider;