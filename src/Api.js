import axios from "axios";

// const ENDPOINT_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    return response.data;
  } catch (error) {
    console.log(error);
  }       
}