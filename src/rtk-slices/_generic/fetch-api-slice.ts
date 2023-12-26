import type {
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<ApiData<T>>
>({
    name = "@-@ →「 need define a name 」",
    initialState,
    reducers,
  }: {
  name: string
  initialState: ApiData<T>
  reducers: ValidateSliceCaseReducers<ApiData<T>, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      fetch(state) {
        state.status = "loading";
      },
      /**
       * If you want to write to values of the state that depend on the generic
       * (in this case: `state.data`, which is T), you might need to specify the
       * State type manually here, as it defaults to `Draft<ApiData<T>>`,
       * which can sometimes be problematic with yet-unresolved generics.
       * This is a general problem when working with immer's Draft type and generics.
       */
      fetchSuccess(state: ApiData<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = "succeeded";
      },
      fetchFailed(state: ApiData<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = "failed";
      },
      ...reducers,
    },
  });
};

export default createGenericSlice;

/**
 * copied:
 *    https://redux-toolkit.js.org/usage/usage-with-typescript#wrapping-createslice
 */
