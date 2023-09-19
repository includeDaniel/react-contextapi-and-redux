import { ShowAge } from "@/components/ShowAge";
import { ShowName } from "@/components/ShowName";
import { UserContext } from "@/context";
import { useState } from "react";

export type userProps = {
    name: string;
    age: number;
};

export const TestingUseContext = () => {
    const [user, setUser] = useState<userProps>({
        name: "Daniel",
        age: 18,
    });

    return (
        <UserContext.Provider value={user}>
            <div>
                <h1>Using ContextAPI</h1>
                <ShowName />
                <ShowAge />
            </div>
        </UserContext.Provider>
    );
};
