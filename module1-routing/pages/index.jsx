import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  function handleClick(e) {
    e.preventDefault();
    e.currentTarget.innerText = "Loading...";
    setTimeout(() => {
      router.push("/product");
    }, 1000);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Products</Link>

      <br />

      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  )


}

export default Home;