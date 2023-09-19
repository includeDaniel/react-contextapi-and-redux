"use client";

import { TestingRedux } from "@/components/TestingRedux";
import { TestingUseContext } from "@/components/TestingUseContext.1";

export default function Home() {
    return (
        <>
            <TestingUseContext />
            <hr />
            <TestingRedux />
        </>
    );
}
