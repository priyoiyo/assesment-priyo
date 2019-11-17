import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import axios from 'axios'
import EditProduct from "../ProductContent/EditProduct"
import DeleteProduct from "../ProductContent/DeleteProduct"


class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guestListArray:[]
        }
    }

    componentDidMount(){
        axios.get('https://reduxblog.herokuapp.com/api/posts?key=tugas-pri-1-portofolio')
        .then((response)=>{
            
            this.setState(state=>({
                        guestListArray: [...state.guestListArray, ...response.data]
                    }))

        })
        // .then(response=>response.json())
        // .then(data=>{
        //     this.setState(state=>({
        //         guestListArray: [...state.guestListArray, ...data]
        //     }))
        // })
    }

    render() {
        //get()
        return (
            <div >


                

                <ul style={{listStyle:'none', justifyContent:"left", paddingLeft:"0", textAlign: 'center'}}>
                    {
                        this.state.guestListArray.map(guestList=>{
                            return(
                                <li key={guestList.id} className="list-product" >
                                    <Card style={{width:"330px", textAlign:"left"}}>
        <div className="container-img">
        <CardImg top className="image-product" src={guestList.content} alt="Card image cap" />
        <EditProduct className="btn-1"/>
        <DeleteProduct className="btn-2"/>
        {/* <Button className="btn-1"></Button> <Button className="btn-2"></Button> */}
        </div>
        
        <CardBody>
        
          <CardTitle>{guestList.title}</CardTitle>
     
          <CardText>{guestList.categories}</CardText>
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