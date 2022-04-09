import axios from "axios";

export const client = axios.create({
  baseURL: "https://apistaging.thegoodseat.fr",
  headers: {
    "x-api-key": "ts2QBkU8EY20TBjsqbG2H3Lsq6RnFFZ33muTl1sj",
    "Content-Type": "application/json",
  },
});
