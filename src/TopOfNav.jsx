function TopOfNav({setSearchQuery}){
    const handleSearchQuery = (event) => {
        setSearchQuery(event.target.value)
    }

    return(
        <div className="top-of-nav-conatiner">
            <img src='https://github.com/Kowshik-8055/Fake-Shop-App-Resources/blob/main/Top-of-Nav/42.png?raw=true' className="top-nav-images"/>
            <h1 className="top-of-nav-text">Fake Store</h1>
            <div className="div-center">
                <input type="search" className="search-bar" placeholder="Search Products..." onChange={handleSearchQuery}/>
                <img src='https://github.com/Kowshik-8055/Fake-Shop-App-Resources/blob/main/Top-of-Nav/44.png?raw=true'className="top-nav-images"/>
            </div>
        </div>
    )
}

export default TopOfNav