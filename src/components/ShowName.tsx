import { UserContext } from "@/context";
import { useContext } from "react";

export const ShowName = () => {
    const user = useContext(UserContext);
    return <div>Name: {user?.name}</div>;
};
