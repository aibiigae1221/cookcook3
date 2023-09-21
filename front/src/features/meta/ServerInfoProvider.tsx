import {ReactNode, useEffect} from "react";
import { useAppDispatch } from "../../app/hooks";
import { initialize, selectBackBasePath } from "./serverInfoSlice";
import { useSelector } from "react-redux";

interface ServerInfoProviderProps {
    children : ReactNode;
}

const ServerInfoProvider = ({children} : ServerInfoProviderProps) => {

    const dispatch = useAppDispatch();
    const backendBasePath = useSelector(selectBackBasePath);
    
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