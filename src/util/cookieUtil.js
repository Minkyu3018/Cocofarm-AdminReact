import {Cookies} from "react-cookie";

const cookies = new Cookies()

export const setCookie = ( cookieName , value , days ) => {

    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate + days);
    cookies.set(cookieName , value , {path: "/" , expires:expires})

}

export const getCookis = (cookieName) => {
    return cookies.get(cookieName)
}

export const removeCookis = (cookieName , path="/") => {
    cookies.remove(cookieName , {path:path})
}