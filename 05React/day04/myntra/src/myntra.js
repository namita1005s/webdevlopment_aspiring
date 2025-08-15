// npm init
// npm install react-dom
// npm install react
// npm install -D parcel
// to run  RUN THE COMMAND npx parcel index.html

import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./component/utils/dummy";

// import {footerImage} from "./component/utils/sc" for export default import case 

function App() {
  let [A, setA] = useState(arr);

    function sortArray() {
        A.sort((a,b) => a.price - b.price);
        setA([...A]);
    }

    function priceAbove1000() {
       const B = arr.filter((item) => item.price > 1000);
       setA(B);
    }

  return (
    <>
      <Header />
      <button onClick={sortArray}>Sort by Price</button>
      <button onClick={priceAbove1000}>above 1000</button>

      <div className="middle" style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
      {/* <Card cloth="Graphic T-Shirt" offer="20–50% Off" img="https://cdn.shopify.com/s/files/1/0094/6326/7379/files/ian-dooley-10ca-K3e6Ko-unsplash_600x600.jpg?v=1647243404" />
      <Card cloth="Men's Jeans" offer="30% Off" img="https://cdn.shopify.com/s/files/1/0094/6326/7379/files/quentin-billington-l7lCWGszIoI-unsplash_600x600.jpg?v=1647242793" />
      <Card cloth="Casual Shirt" offer="40% Off" img="https://cdn.shopify.com/s/files/1/0094/6326/7379/files/kenzie-kraft-VBy-e_ic5Ak-unsplash_600x600.jpg?v=1647240974" />
      <Card cloth="Cotton Kurta" offer="15–35% Off" img="https://taractara.com/cdn/shop/products/blue-floral-printed-hand-block-printed-cotton-kurta-set-with-dupatta-875837_900x.jpg?v=1706182070" />
      <Card cloth="Bomber Jacket" offer="25–45% Off" img="https://m.media-amazon.com/images/I/61HknRN0TcL._SX679_.jpg" />
      <Card cloth="Printed Saree" offer="30–60% Off" img="https://mysilklove.com/cdn/shop/files/MSle1_f6168edc-e40a-4a94-8ff4-575b088e1038.jpg?v=1690263365&width=1000" />
      <Card cloth="Winter Hoodie" offer="50% Off" img="https://image.hm.com/assets/hm/df/63/df63a7b892f6a2dc1192033fb721f417c5eada70.jpg?imwidth=1260" />
      <Card cloth="Oversized Sweatshirt" offer="35% Off" img="https://m.media-amazon.com/images/I/61lpr19nDgL._SX679_.jpg" /> */} 
      
      {A.map((item, index) => (
          <Card
            key={index}
            cloth={item.cloth}
            offer={item.offer}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}




const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);

// 32:31