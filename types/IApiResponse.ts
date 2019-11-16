export interface IApiResponse<T = any> {
  data: T;
  ok: boolean;
  statusCode: number | null;
  statusText: string;
  type: string;
  url: string;
}
