import axios from "axios"

export const getMemes = async () => {
    try {
        const result = await axios.get("https://api.imgflip.com/get_memes")
        return result.data.data.memes
    } catch (error) {
        console.log(error)
    }
}