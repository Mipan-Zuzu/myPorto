import ky from "ky"
const apiUrl = import.meta.env.VITE_API_URL_GITHUB

export const HandlerFunc = async() => {
    try {
        const res = await ky.get(apiUrl).json()
        console.log(res)
        return res
    }catch (error) {
        if (error instanceof Error) {
            return error
        }
    }
}