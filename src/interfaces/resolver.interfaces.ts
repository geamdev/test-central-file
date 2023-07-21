export interface Resolver<T> {
  statusCode: number;
  message: string | null;
  result: any;
}
