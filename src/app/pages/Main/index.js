import React,{Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';

import apis from '../../services/api'
import './main.css'

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            restaurants: [],
            carregando : false,
            is_open: true
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
                    <div className="filter" >
                        <p>Filter By: </p>
                        <input type="radio" name="open-now" value={this.state.is_open} /> Open Now
                        <label for="price">Price</label>
                        <select name="price">
                            <option value="valor1">Valor 1</option> 
                            <option value="valor2" selected>Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </div>
                </div>

                <div className="restaurant-container">
                    <div className="list-restarant-item title">
                        <h1>All Restaurants</h1>
                    </div>
                    
                    <div className="restaurant-item">

                    
                            {
                                this.state.restaurants.map(restaurant => (
                                    <div className={'restaurant-item-container'}  key={restaurant.id} >
                                        <img src={restaurant.image_url} alt={restaurant.name}/>
                                        <h1>{restaurant.name}</h1>
                                        <div className="restaurant-item-rating">
                                            <span>

                                                <StarRatingComponent
                                                    name="rate2"
                                                    editing={false}
                                                    starCount={5}
                                                    starColor={'#002B56'}
                                                    emptyStarColor={'yellow'}
                                                    value={restaurant.rating}
                                                />
                                            </span>
                                        </div>
                                        
                                        <div className="restaurant-item-category-price">
                                            <p>{restaurant.categories[0].title}-{restaurant.price}</p>   
                                            
                                            

                                            <div className="status">
                                                <div className="dot"></div>
                                                <div style={{width:5}}/>
                                                <p>   {restaurant.is_closed == false ? 'OPEN NOW' : "CLOSED"}</p>
                                            </div>
                                           
                                        </div>
                                        <div>
                                            <button className="btn-more">
                                                LEARN MORE
                                            </button>
                                        </div>
                                      
                                    </div>
                                ))
                            }
                    </div>
                </div>
                
                <div className="container-load-more">
                    <button className="btn-load-more">
                        LOAD MORE
                    </button>
                </div>

        
              
            </section>
             
        )
    }

}  




export default Main