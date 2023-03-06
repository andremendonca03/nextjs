import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>All Reviews of {productId}</h1>
}

export default Review;
