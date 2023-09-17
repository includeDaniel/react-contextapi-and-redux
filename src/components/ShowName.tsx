import { useUserContext } from "@/context";

export const ShowName = () => {
    const user = useUserContext();

    return <div>Name: {user.name}</div>;
};
