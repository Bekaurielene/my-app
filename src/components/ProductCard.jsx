function ProductCard(props) {
  return (
    <div
      className={
        props.category === "Electronics"
          ? "product electronics"
          : "product"
      }
    >
      <h2>{props.title}</h2>
      <p>ფასი: {props.price} ₾</p>
      <p>კატეგორია: {props.category}</p>

      <button onClick={props.addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;