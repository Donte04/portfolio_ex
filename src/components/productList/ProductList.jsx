import Product from "../product/Product";
import "./productList.css";
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptate fugit vel quidem, eius in, libero ratione sapiente 
                    molestiae quis aut est aspernatur, debitis nisi perspiciatis 
                    quasi nihil odio. Facere, quibusdam.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product 
                        key={item.id} 
                        img={item.img} 
                        link={item.link} 
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
