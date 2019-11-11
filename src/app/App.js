import React from 'react'
import Home from './components/Home'
import axios from 'axios'


export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
            request: ''
        }
    }
    componentDidMount(){

        let API_KEY = '6KYFpP1leO29LRPw32f5ZICSRSj0fS3F3RVCTpqWvzlHhhq6t2v9zBK5HZ6vYs7sRWNaLQC-zBVcpCU6lXN79fl4uVGSkxLrSNgNT-VD913GgUg2Fn1fxQonc9PEXXYx'

        let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=lasvegas"
        let headers = {
            "Authorization" : "Bearer "+API_KEY
        }
        axios.get(url,{headers:headers})
            .then((response) => {
                console.log(response)
            }).catch((err) => console.log(err))

    }

    render(){
        return(
            <Home/>
        )
    }

}