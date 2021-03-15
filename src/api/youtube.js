import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: "AIzaSyCMnY5GWJDAKS0vIPcWbADq5TbLqFftKdY",
    chart: "mostPopular",
  },
});
