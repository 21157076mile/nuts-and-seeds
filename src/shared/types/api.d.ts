// interface ApiResponse { // maybe we have a standard of api response

interface ApiData<T> {
  data?: T;
  error?: unknown;
  status: "idle" | "loading" | "succeeded" | "failed";
}

interface ApiError {
  data: unknown;
  http_status: string | number;
  handleError?: () => void;
}

// temp
interface IPagination {
  limit: number;
  page: number;
  total: number;
}

interface ListResponse<T> {
  data: T[];
  pagination: IPagination;
}

// interface IiiParams {
//   [key: string]: unknown;
// }

interface IUnknownObject { // @_@ - ★ ♬△ ☆ ◆ ♪
  [key: string]: unknown;
}


// interface ApiError {
//   code: number;
//   data: unknown;
//   message: string;
//   isError?: boolean;
// }

// interface IAPISuccessReponse<T> {
//   code?: number;
//   message?: string;
//   data: T;
//   isError?: boolean;
// }

// interface IActionPayload<T> {
//   payload: T;
// }
