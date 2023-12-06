import { fetchJSON } from "./fetchJSON";

const API_BASE_URL = `https://dummyjson.com`;

function call<T>(
    path: string,
    options: { headers?: any; method?: string; body?: any } = {}
) {
    const url = `${API_BASE_URL}/${path}`;
    return fetchJSON<T>(url, options).catch((error: any) => {
        return Promise.reject(error);
    });
}

const get = <T>(path: string) => {
    return call<T>(path, { method: "GET" });
};

export const http = {
    get,
};