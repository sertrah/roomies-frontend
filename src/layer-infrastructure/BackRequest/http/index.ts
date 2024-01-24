import { fetchJSON } from "./fetchJSON";

const API_BASE_URL = `http://localhost:3000/api`;

function call<T>(
    path: string,
    options: { headers?: any; method?: string; body?: any } = {}
) {
    const url = `${API_BASE_URL}/${path}/`;
    debugger;
    return fetchJSON<T>(url, options).catch((error: any) => {
        return Promise.reject(error);
    });
}

const get = <T>(path: string) => {
    return call<T>(path, { method: "GET" });
};

const post = <T>(path: string, body: T) => {
    return call<T>(path, { method: "POST", body });
};

export const http = {
    get,
    post
};