import { UserContext } from "@/context";
import { useContext } from "react";

export const ShowAge = () => {
    const user = useContext(UserContext);
    return <div>Age: {user?.age}</div>;
};
