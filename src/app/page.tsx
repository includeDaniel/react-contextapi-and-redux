"use client";

import { ShowAge } from "@/components/ShowAge";
import { ShowName } from "@/components/ShowName";
import { UserContext } from "@/context";
import { useState } from "react";

export type userProps = {
    name: string;
    age: number;
};

export default function Home() {
    const [user, setUser] = useState<userProps>({
        name: "Daniel",
        age: 18,
    });

    return (
        <UserContext.Provider value={user}>
            <ShowName />
            <ShowAge />
        </UserContext.Provider>
    );
}
