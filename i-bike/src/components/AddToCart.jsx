export default function AddToCartBtn({ btnStyles, text, icon }) {
  return (
    <>
      <button className={`${btnStyles}`}>
        <div>{text}</div>
        <div>{icon}</div>
      </button>
    </>
  );
}
