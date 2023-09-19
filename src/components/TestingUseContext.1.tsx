import { ShowAge } from "@/components/ShowAge";
import { ShowName } from "@/components/ShowName";
import { UserContext } from "@/context";
import { useState } from "react";
import { userProps } from "./TestingUseContext";

export const TestingUseContext = () => {
    const [user, setUser] = useState<userProps>({
        name: "Daniel",
        age: 18,
    });

    return (
        <UserContext.Provider value={user}>
            <div className="flex flex-col items-center pb-5">
                <h1 className="text-lg">Using ContextAPI</h1>
                <ShowName />
                <ShowAge />
            </div>
        </UserContext.Provider>
    );
};
