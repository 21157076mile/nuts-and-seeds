"use client";

/**
 * https://redux-toolkit.js.org/usage/nextjs
 */

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, reduxStore } from "@redux/store";

export const StoreProvider = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {props.children}
      {/* </PersistGate> */}
    </Provider>
  );
};
