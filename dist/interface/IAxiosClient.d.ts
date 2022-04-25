import { CookieJar as toughCookie } from "tough-cookie";
interface IAxiosClient {
    cookie: boolean;
    jar: toughCookie | toughCookie.Serialized | any;
    headers: object;
}
interface IAxiosClientOut {
    isError: boolean;
    data: object | any;
}
export type { IAxiosClient, IAxiosClientOut };
//# sourceMappingURL=IAxiosClient.d.ts.map