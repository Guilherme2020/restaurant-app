import React,{Component} from 'react'
import apis from '../../services/api'
import './main.css'

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            restaurants: []
        }
    }
    makeRequest(){
        apis.loadRestaurants().then((response) => {
            console.log(response)
            this.setState({
                restaurants: response.data.businesses
            })
        })
    }
    componentDidMount(){

        this.makeRequest()

    }
    
   
    render(){
        return(
            <section className="main-container">
                
                <div className="title">
                    
                    <h1>Restaurants</h1>

                </div>
                <div className="text-info">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="filter-restaurants">

                </div>

                <div className="list-restarant-item title">
                    <h1>All Restaurants</h1>
                </div>
                
                <div className="restaurant-item">
                    

                </div>

            </section>
        )
    }

}  




export default Main