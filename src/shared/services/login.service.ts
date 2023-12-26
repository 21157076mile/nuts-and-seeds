import axios from "@config/axios";
import { BASE_URL_API } from "@shared/constant";

function promisedFunction(): Promise<ApiLoginResponse> {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token: "fdfdfs",
        user: {
          id: 8,
          email: "phandinhlong0209@gmail.com",
          name: "Phan Đình Long",
        },
      });
    }, 2000);
  });
}

export async function loginApi({
  email,
  password,
}: ApiLoginRequest): Promise<ApiData<ApiLoginResponse>> {
  try {
    // const result: ApiLoginResponse = await axios.post(
    //   `${BASE_URL_API}/api/login`,
    //   {
    //     email,
    //     password
    //   });

    const result: ApiLoginResponse = await promisedFunction().then((response) => response);
    return { data: result, status: "succeeded" };
  } catch (error: unknown) {
    const _error = error as ApiError;
    if (!_error?.data || !_error?.handleError) {
      return { error: "unknown error", status: "failed" };
    }
    /* if we want to handle globally */
    _error.handleError(); // or we can customize error

    return {
      error: { ..._error?.data, http_status: _error?.http_status },
      status: "failed",
    };
  }
}

// https://appdicho.longapp.site/api/login?email=phandinhlong0209@gmail.com&password=12345678
