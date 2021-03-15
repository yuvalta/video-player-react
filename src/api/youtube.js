import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 10,
    key: "AIzaSyCMnY5GWJDAKS0vIPcWbADq5TbLqFftKdY",
    chart: "mostPopular",
  },
});
