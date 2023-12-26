interface User {
  id?: number | string;
  email: string;
  name: string;
  // "email": "phandinhlong0209@gmail.com",
  // "name": "Phan Đình Long",
}

interface ApiLoginRequest {
  email: string;
  password: string;
}

interface ApiLoginResponse {
  token: string,
  user: User
}

/**
 *
 *
 */