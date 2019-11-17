import React from 'react';
import HeaderContent from '../CommonContent/HeaderContent'
import ProductList from '../ProductContent/ProductList'

 



export default class DashboardPage extends React.Component{
    




render() {
    return(
        <div className="bg-dashboard">
            <HeaderContent/>
            <ProductList/>
            
            
        </div>
    );

}
}