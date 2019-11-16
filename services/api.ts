import { IApiResponse } from 'types/IApiResponse';
import { IError } from 'types/IError';
import { HttpMethod } from 'enums/HttpMethod';

export async function fetchFromApi<T = any>({
  url,
  method = HttpMethod.Get,
  headers,
  body,
}: {
  url: string;
  method?: HttpMethod;
  headers?: Headers;
  body?: Object;
}): Promise<IApiResponse<T | IError>> {
  const response = await fetch(process.env.API_URL + url, {
    body: JSON.stringify(body),
    credentials: process.env.CREDENTIALS as
      | 'omit'
      | 'same-origin'
      | 'include'
      | undefined,
    headers: {
      ...((method === HttpMethod.Post || method === HttpMethod.Put) && {
        'Content-Type': 'application/json',
      }),
      'X-Requested-With': 'fetch',
      ...headers,
    },
    method,
  });

  const contentType = response.headers.get('Content-Type');
  const isJSON = contentType && contentType.includes('application/json');
  const data = isJSON ? await response.json() : null;

  return {
    data,
    ok: response.ok,
    statusCode: response.status,
    statusText: response.statusText,
    type: response.type,
    url: response.url,
  };
}
