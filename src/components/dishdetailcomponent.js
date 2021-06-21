import React,{ Component } from 'react';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            selectedDish: null
        }
    }

    render(){

        const dishdetail= 

            this.props.Dish.comments.map((comment)=>
                {return(
                        <div key={comment.id}  className="">
                            <p>{comment.comment}</p>
                            <p>--{comment.author}{comment.date}</p>
                        </div>
                )
                }
            )

        return (
            <div className="container">
                <div className="row">
                    {dishdetail}
                </div>
            </div>
        );
    }

}

export default DishDetail;