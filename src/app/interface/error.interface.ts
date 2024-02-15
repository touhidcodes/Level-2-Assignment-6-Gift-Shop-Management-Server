export type TErrorSources = {
  path?: string | number;
  message: string | undefined;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
