import './Product.css';

function Product(props) {
return(
    <div className='card' > 
        
        <img src= {props.product.image} alt=''/>
        <h1 className='card-title'> {props.product.title} </h1>
        <p className='card-price'> Price: {props.product.price} €</p>
        
        <p className='card-description'> Description :{props.product.description}</p>
        <p className='card-category'>Category :{props.product.category}</p>

    </div>
)

}
export default Product; 