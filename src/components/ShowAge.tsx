import { useUserContext } from "@/context";

export const ShowAge = () => {
    const user = useUserContext();

    return <div>Age: {user.age}</div>;
};
