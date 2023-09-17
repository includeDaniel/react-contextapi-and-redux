import { userProps } from "@/app/page";
import { createContext } from "react";

export const UserContext = createContext<userProps | undefined>(undefined);
