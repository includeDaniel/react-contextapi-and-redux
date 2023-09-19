import { useState } from "react";
import store from "../redux/store";
import { Provider } from "react-redux";

export const TestingRedux = () => {
    const [state, setState] = useState(0);
    return (
        <div className="flex flex-col items-center pt-5">
            <span className="text-lg">counter: {state}</span>
            <div className="flex flex-row">
                <button className="bg-black text-white p-3 rounded mr-1">
                    Increment
                </button>
                <button className="bg-black text-white p-3 rounded ml-1">
                    Decrement
                </button>
            </div>
        </div>
    );
};
