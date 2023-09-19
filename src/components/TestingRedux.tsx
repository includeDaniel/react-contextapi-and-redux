import store from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { Counter } from "./Counter";

export const TestingRedux = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};
