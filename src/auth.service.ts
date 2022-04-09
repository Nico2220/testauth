import { client } from "./axios.config";

interface LoginDto {
  email: string;
  password: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
  accessToken: string;
}

export const login = async (loginDto: LoginDto) => {
  const url = "/loginuser";
  const response = await client.post(url, loginDto);
  return response.data;
};

export const refreshToken = async (refreshTokenDto: RefreshTokenDto) => {
  // const url = "auth/session/refresh";
  const url = "/refreshToken";
  const response = await client.post<{
    user: any;
    token: string;
    accessToken: string;
    refreshToken: string;
  }>(url, refreshTokenDto);
  return response.data;
};
