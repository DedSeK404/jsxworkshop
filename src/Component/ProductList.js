import "./Product.css";
const ProductList = () => {
  const list = [
    {
      name: "Adidas",
      price: 199,
      qts: 9,
      description: "Great shoes",
      image:
        "https://th.bing.com/th/id/OIP.7MN2qlozSStUwXC77tlxzQHaFS?pid=ImgDet&rs=1",
    },
    {
      name: "Nike",
      price: 320,
      qts: 2,
      description: "Great for running",
      image:
        "https://th.bing.com/th/id/OIP.tJQjxbLRRaEt9B4OB546kAHaHw?pid=ImgDet&rs=1",
    },
    {
      name: "Jordan",
      price: 9550,
      qts: 1,
      description: "The best shoes of all time",
      image:
        "https://assets.bigcartel.com/product_images/194375452/aj1banned.jpg?auto=format&fit=max&h=1200&w=1200",
    },
    {
      name: "Converse",
      price: 2,
      qts: 0,
      description: "Good for nothing",
      image:
        "https://th.bing.com/th/id/R.2822b693a24d38c26ff49c1f9df92289?rik=DXqs0Lz%2bP1wbbg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fconverse%2fconverse_PNG1.png&ehk=5aBPOodgmxxiEXebGh7NBK8F%2fLhC%2fU4l81OdtV5B0BM%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div className="container">
      {list.map((el,i)=><div key={i} className="card">
        <div className="imgBx">
          <img src={el.image} />
        </div>
        <div className="contentBx">
          <h2>{el.name}</h2>
          <div className="size">
            <h3>Qts : {el.qts ? el.qts : "Out of stock"}</h3>
            
          </div>
          <div className="color">
            <h3>price : {el.price} dt</h3>
            
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>

      )}
    </div>
  );
};
export default ProductList;
