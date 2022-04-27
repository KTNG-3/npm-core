import { AxiosRequestHeaders } from "axios";
import { CookieJar as toughCookie } from "tough-cookie";

interface IAxiosClient {
    cookie: boolean,
    jar: toughCookie.Serialized | null,
    headers: AxiosRequestHeaders,
}

interface IAxiosClient_Out {
    isError: boolean,
    data: object | any,
}

export type { IAxiosClient, IAxiosClient_Out };