/**
 * Example usage:
      const wrappedSlice = createFetchApiSlice({
        name: 'test',
        initialState: { status: 'loading' } as ApiData<string>,
        reducers: {
          magic(state) {
            state.status = 'finished'
            state.data = 'hocus pocus'
          },
        },
      })
*/
export { default as createFetchApiSlice } from "./fetch-api-slice";

