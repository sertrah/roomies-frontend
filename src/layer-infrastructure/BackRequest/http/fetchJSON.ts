const defaultMessage = ({ status, statusText }: Response) =>
  statusText || `${status} error code occurred`;

export async function fetchJSON<T>(
  url: string,
  options: { headers?: any; body?: any } = {}
) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  options.headers = options.headers
    ? {
        ...headers,
        ...options.headers,
      }
    : headers;

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  debugger;
  const response = await fetch(url, options);

  try {
    const json = await response.json();
    debugger;

    return response.ok
      ? (json as T)
      : Promise.reject({
          ...json,
          status: json.status || response.status,
          message: json.message || defaultMessage(response),
        });
  } catch (error) {
    debugger;
    return Promise.reject({
      status: response.status,
      message: defaultMessage(response),
    });
  }
}