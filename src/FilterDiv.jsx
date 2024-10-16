function FilterDiv({ setSortOption }){

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return(
        <>
            <hr/>
                <div className="filter-div-container">
                <p>30 Items</p>
                <select onChange={handleSortChange}>
                    <option value="recommended">Recommended</option>
                    <option value="alphabeticAZ">Alphabetic A:Z</option>
                    <option value="alphabeticZA">Alphabetic Z:A</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                </div>
            <hr/>
        </>
    )
}

export default FilterDiv