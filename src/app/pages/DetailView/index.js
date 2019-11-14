import React,{Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import apis from '../../services/api'
import './main.css'

export default class DetailView extends Component{

    constructor(props){
        super(props)
        this.state = {
            business_id: '',
            detailBusiness: {},
            category: '',reviews:[]
        }
    }

    async componentWillMount(){
        console.log(this.props)
        
        await this.setState({
            business_id: this.props.location.state.restaurant.id
        })

        console.log("bussinessid",this.state.business_id)
    }

    makeRequestReviews(){
        let id = this.state.business_id
        apis.reviews(id)
            .then((response) => {
                console.log("businesse reiviews",response)
                this.setState({
                    reviews: response.data.reviews
                })
            }).catch((err) => console.log("err",err))
    }
    makeRequest(){

        let id = this.state.business_id
        apis.detailRestaurant(id)
            .then((response) => {
                console.log(response)
                this.setState({
                    detailBusiness: response.data,
                    category: response.data.categories[0].title
                })
        })

    }

    async componentDidMount(){
        this.makeRequest()  
        this.makeRequestReviews()  
    }
    render(){
        return(
            <section className="main-container">
                <div className="title-restaurant-info">
                    <h1>{this.state.detailBusiness.name}</h1>
                    
                    <div className="restaurant-rating">
                        <span>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                starCount={5}
                                starColor={'#002B56'}
                                emptyStarColor={'white'}
                                value={this.state.detailBusiness.rating}
                            />
                        </span>

                    </div>

                    <div className='restaurant-info'>
                        <p>
                            {this.state.category} - {this.state.detailBusiness.price}
                        </p>

                    </div>
                   
                </div>
                <div style={{height:200}} />


                <div className='restaurant-reviews'>
                    <h3>{this.state.detailBusiness.review_count} Reviews </h3>
                    {this.state.reviews.map(review => (

                        <div className="restaurant-review-item" key={review.id}>
                            <div className="restaurant-review-profile">
                                <img src={review.user.image_url} alt={''}/>
                                <div>
                                    <p>{review.user.name}</p>
                                    <p>{review.time_created}</p>
                                </div>   
                              
                            </div>
                            
                            <div className="restaurant-preview-comment">
                                <span>
                                    <StarRatingComponent
                                        name="rate2"
                                        editing={false}
                                        starCount={5}
                                        starColor={'#002B56'}
                                        emptyStarColor={'white'}
                                        value={review.rating}
                                    />
                                </span>
                                <p>{review.text}</p>
                                
                            </div>
                           
                      
                        </div>

                    ))}

                </div>

            </section>
        )
    }


}