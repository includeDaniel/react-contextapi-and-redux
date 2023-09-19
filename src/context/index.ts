import { userProps } from "../components/TestingUseContext";
import { createContext, useContext } from "react";

export const UserContext = createContext<userProps | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(UserContext);

    if (user === undefined) {
        throw new Error(
            "useUserContext must be used with a UserContext.Provider"
        );
    }

    return user;
};
