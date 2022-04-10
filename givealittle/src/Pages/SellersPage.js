import React from 'react';
import Card from '../components/Card';
import data from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProductPopup from '../components/AddProductPopup';
import {useState} from 'react';


import {
     Container, Row, Col
} from 'reactstrap';

const SellersPage = () => {
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [products, setProducts] = useState(data);

    return (
        <div>
            
            <div style={{textAlign: "center"}}>

                <h1>Red Onion</h1>

                <button
                    className='button-add'
                    onClick={() => setButtonPopup(true)}>
                    Add
                </button>


                <AddProductPopup 
                    trigger={buttonPopup} 
                    setTrigger={setButtonPopup}>
                </AddProductPopup>
            </div>
            

            <Container fluid="lg">
                <Row style={{justifyContent: "center"}}>
                    {products.map((product) => {
                        return (
                            <Col xs="auto" style={{padding: "1rem"}}>
                                <Card 
                                    name={product.name} 
                                    image={product.image}  
                                    desc={product.desc} 
                                    price={product.price} 
                                    stock={product.stock} >
                                </Card>
                            </Col>
                            
                        )
                    })}
                    
                </Row>
            </Container>
        </div>
    )
}

export default SellersPage;