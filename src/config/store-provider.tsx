"use client";

/**
 * https://redux-toolkit.js.org/usage/nextjs
 */

import { Provider } from "react-redux";

import { reduxStore } from "./redux-store/store";

export const StoreProvider = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      {props.children}
    </Provider>
  );
};
