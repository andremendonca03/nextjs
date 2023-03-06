import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Details about product</h1>
      <h2>Product Id: {productId}</h2>
    </>
  )
}

export default ProductDetail;
