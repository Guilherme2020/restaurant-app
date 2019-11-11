import axios from 'axios'

let API_KEY="6KYFpP1leO29LRPw32f5ZICSRSj0fS3F3RVCTpqWvzlHhhq6t2v9zBK5HZ6vYs7sRWNaLQC-zBVcpCU6lXN79fl4uVGSkxLrSNgNT-VD913GgUg2Fn1fxQonc9PEXXYx"


const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
    headers: {'Authorization': `Bearer ${API_KEY}`}
});



let endpoints = {
    search: '/search?location=lasvegas'
}


const apis = {

    loadRestaurants: () => api.get(endpoints.search)

}


export default apis;