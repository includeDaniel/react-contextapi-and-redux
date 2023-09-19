import { decrement, increment } from "@/redux/counter";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center pt-5">
            <span className="text-lg">Counter: {count}</span>
            <div className="flex flex-row">
                <button
                    className="bg-black text-white p-3 rounded mr-1"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="bg-black text-white p-3 rounded ml-1"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
