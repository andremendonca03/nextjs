function NewsArtcilesList({articles}) {
  return (
    <>
      <h1>Lits of News Articles</h1>
      {articles.map(item => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default NewsArtcilesList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const resJSON = await res.json();
  console.log("pre-rendering NewsArtcilesList");

  return {
    props: {
      articles: resJSON,
    }
  }
}