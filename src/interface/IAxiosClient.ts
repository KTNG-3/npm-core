import { CookieJar as toughCookie } from "tough-cookie";

interface IAxiosClient {
    cookie: boolean,
    jar: toughCookie | toughCookie.Serialized | any,
    headers: object,
}

interface IAxiosClient_Out {
    isError: boolean,
    data: object | any,
}

export type { IAxiosClient, IAxiosClient_Out };