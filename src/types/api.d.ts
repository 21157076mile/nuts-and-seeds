interface IAPIErrorResponse {
  code: number;
  data: any;
  message: string;
  isError?: boolean;
}

interface IAPISuccessReponse<T> {
  code?: number;
  message?: string;
  data: T;
  isError?: boolean;
}

interface IActionPayload<T> {
  payload: T;
}
