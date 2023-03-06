import Link from "next/link";

function Product() {
  return (
    <>
      <h2><Link href="/product/1">Product 1</Link></h2>
      <h2><Link href="/product/2">Product 2</Link></h2>
      <h2><Link href="/product/3" >Product 3</Link></h2>
      <Link href="/">Back Home</Link>
    </>
  )
}

export default Product;
