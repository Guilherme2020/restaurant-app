import axios from 'axios'

let API_KEY="6KYFpP1leO29LRPw32f5ZICSRSj0fS3F3RVCTpqWvzlHhhq6t2v9zBK5HZ6vYs7sRWNaLQC-zBVcpCU6lXN79fl4uVGSkxLrSNgNT-VD913GgUg2Fn1fxQonc9PEXXYx"


const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/",
    headers: {'Authorization': `Bearer ${API_KEY}`}
});


let endpoints = {
    search: 'businesses/search?location=lasvegas',
    businessesDetail: 'businesses',
    businessesReview: 'businesses',
    categories: 'categories?locale=en_US'
}


const apis = {

    loadFilterRestaraunts: (params) => api.get(`${endpoints.search}${params}`),
    loadRestaurants: () => api.get(endpoints.search),
    detailRestaurant: (id) => api.get(`${endpoints.businessesDetail}/${id}`),
    reviews: (id) => api.get(`${endpoints.businessesReview}/${id}/${'reviews'}`),
    loadCategories: () => api.get(endpoints.categories)

}


export default apis;