import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;

  return <h1>Review {reviewId} of product {productId}</h1>
}

export default Review;
