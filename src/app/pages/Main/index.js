import React,{Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'

import apis from '../../services/api'
import './main.css'

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            restaurants: [],
            categorys:[],
            carregando : false,
            is_open: false,
            price: 1,
            category: ''
        }
     
    }
    makeRequest(){
        apis.loadRestaurants().then((response) => {
            console.log(response)
            this.setState({
                restaurants: response.data.businesses
            })
        })
        apis.loadCategories().then((response) => {
            console.log(response)
            this.setState({
                categorys: response.data.categories
            })
        }).catch((err) => console.log(err.response))
    }
   
    componentDidMount(){

        this.makeRequest()

    }
    handlePrice = async (event) =>{
        
        console.log(event)

        await this.setState({
            price: event.target.value
        })

        await this.makeFilterRequest()

    }   
  
    choiseCategory = async (event) => {
        console.log(event)
        
        await this.setState({
            category: event.target.value
        })
        await this.makeFilterRequest()

    }
    handleOpen =  async (event) =>{

        console.log(event)
        
      
        await this.setState({
            is_open:true
        })
        console.log(this.state.is_open)
        await this.makeFilterRequest()
       
    }
    async makeFilterRequest(){
        let is_open = this.state.is_open
        let price = this.state.price
        let categories = this.state.category
        let params = `${'&open_now='}${is_open}${'&price='}${price}${'&category='}${categories}`
        console.log(params)

        await apis.loadFilterRestaraunts(params).then((response) => {
            console.log("make filter request",response)
            this.setState({
                restaurants: response.data.businesses
            })
        }).catch(err => console.log(err.response))
        
    }
    renderSelectCategorys(){
        
        let category = this.state.categorys
        
        let optionsCategory = category.map((category) =>  ( 
            <option value={category.title} key={category.title}>{category.title}</option>)
        )
        
        return optionsCategory
    }
    clearFilter(){
        this.setState({
            is_open:false,
            price: "",
        })
        this.makeRequest()
    }
    render(){
        console.log(typeof this.state.price)
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
                        <input 
                            type="radio" 
                            name="open-now" 
                            value={this.state.is_open}
                            checked={ this.state.is_open} 
                            onChange={() => this.handleOpen(event)} 
                        /> 
                        <p >Open Now</p>   
                        <select   className={"select-container"} name="price" onChange={() =>this.handlePrice(event)}>
                      
                            <option selected value="price">Price</option>
                            <option data-default="all" value="all">All</option> 
                            <option value={1} >$</option>
                            <option value={2}>$$</option>
                            <option value={3}>$$$</option>
                            <option value={4}>$$$$</option>

                        </select>
                        <div style={{width:20}} /> 

                        <select
                             name="categorys" className={'select-container'} 
                            onChange={() => this.choiseCategory(event)} id=""
                        >
                            {this.renderSelectCategorys()}
                        </select>
                        <div style={{width:50}}/>

                        <div style={{width:600}}/>

                        <div className="container-clear-all">
                            <button className="btn-clear-all" onClick={() => this.clearFilter()}>
                               CLEAR ALL
                            </button>
                        </div>
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
                                                {restaurant.is_closed == false ?  <div className="dot"></div> : <div className="dot-not-open"></div>}
                                               
                                                <div style={{width:5}}/>
                                                <p>   {restaurant.is_closed == false ? 'OPEN NOW' : "CLOSED"}</p>
                                            </div>
                                           
                                        </div>
                                        <div>
                                            <button className="btn-more">
                                            <Link 
                                                to={{ 
                                                    pathname: `/detailView/${restaurant.restaurant.id}`,
                                                    state: { restaurant: restaurant.id }  
                                                }}
                                            >
                                                LEARN MORE
                                            </Link>
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