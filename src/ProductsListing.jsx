import React, {useState, useEffect} from "react"
import axios from 'axios'

function ProductListing({searchQuery, sortOption}){
    const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data);
            console.log('Loaded the products successfully!')
            //setLoading(false);
        })
        .catch((error)=> {
            console.log('Error in fetching the products', error);
            //setLoading(false);
        })
    }, [])

    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const sortedProducts = [...filteredProducts].sort((a,b) => {
        switch (sortOption){
            case 'alphabeticAZ':
                return a.title.localeCompare(b.title)
            case 'alphabeticZA':
                return b.title.localeCompare(a.title)
            case 'priceLowHigh':
                return a.price - b.price
            case 'priceHighLow':
                return b.price - a.price
            case 'jewelery':
                return (a.category === 'jewelery' ? -1 : 1)
            case "men's clothing":
                return (a.category === "men's clothing" ? -1 : 1)
            case "women's clothing":
                return (a.category === "women's clothing" ? -1 : 1)
            case "electronics":
                return (a.category === "electronics" ? -1 : 1)
            default:
                return 0;
        }
    })

    /*if (loading){
        return (
            <div className="circle-rotate"></div>
        )
    }*/

    return(
        <div className="product-listing-conatiner">
            <h2 className="text-heading">Products</h2>
            <div className="product-listing-container-child">
                {
                    sortedProducts.map((sortedProduct) => {
                        return(
                            <div key={sortedProduct.id} className="product-card">
                                <img src={sortedProduct.image} alt={sortedProduct.title} className="product-image"/>
                                <p className="product-category">{sortedProduct.category.toUpperCase()}</p>
                                <h2 className="product-title">{sortedProduct.title}</h2>
                                <p className="product-price">$ {sortedProduct.price}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ProductListing