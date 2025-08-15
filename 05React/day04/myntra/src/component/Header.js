// header
function Header(){
    return( 
        <div className="heading" >
            <img className="images" src="https://logos-world.net/wp-content/uploads/2021/02/New-Myntra-Logo.png" height={70} width={100}/>
        


        <div className="option">
             <button className="category-btn">Men</button>
             <button className="category-btn">Women</button>
             <button className="category-btn">Kids</button>
             <button className="category-btn">Home and Living</button>
             <button className="category-btn">Beauty</button>
             <button className="category-btn">Studio</button>
            </div>

            <input className="searchbar" placeholder="Search for products"></input>
            
            <div className="Profile">   
                <button className="pro">Profile</button>
             <button className="pro">Wishlist</button>
              <button className="pro">Bag</button>
            </div>


        </div>
    )
}
export default Header;