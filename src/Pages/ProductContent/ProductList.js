import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import axios from 'axios'
import EditProduct from "../ProductContent/EditProduct"
import DeleteProduct from "../ProductContent/DeleteProduct"


class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productArray:[]
        }
    }

    componentDidMount(){
       
        axios.get(
            'https://test-binar.herokuapp.com/v1/products',
            {headers: {
                "Authorization" : sessionStorage.getItem("token")
              }
            }
          )
          .then((response) => {
            console.log(response)
            this.setState(state=>({
                        productArray: [...state.productArray, ...response.data.result]
                    }))
            },
            
          );
      
    }

    render() {
        //get()
        
        return (
            <div >


                

                <ul style={{listStyle:'none', justifyContent:"left", paddingLeft:"0", textAlign: 'center'}}>
                    {
                        this.state.productArray.map(productList=>{
                            return(
                                <li key={productList.id} className="list-product" >
                                    <Card style={{width:"330px", textAlign:"left"}}>
        <div className="container-img">
        <CardImg top className="image-product" src={productList.imageurl} onError={(e)=>{e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNls3BfPsAcwmSgY9XuPtH4KTMCuPOqwziM3DulX4j6zvRTp8_" }} alt="Card image cap" />
        <EditProduct className="btn-1"/>
        <DeleteProduct className="btn-2"/>
        {/* <Button className="btn-1"></Button> <Button className="btn-2"></Button> */}
        </div>
        
        <CardBody>
        
          <CardTitle>{productList.name}</CardTitle>
     
          <CardText>{productList.price}</CardText>
        </CardBody>
        
      </Card>
                            
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
                )
            }
}

export default ProductList;