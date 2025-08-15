function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", margin: "10px", padding: "2px", width: "200px" }}>
      <img src={props.img} height="200px" width="200px" alt={props.cloth} />
      <div style={{ textAlign: "center" }}>
        <h3>{props.cloth}</h3>
        <h1>{props.offer}</h1>
        <h3 style={{ color: "black" }}>{props.price}</h3> {/* ✅ Price added here */}
        <h3>Shop Now</h3>
      </div>
    </div>
  );
}

export default Card;
