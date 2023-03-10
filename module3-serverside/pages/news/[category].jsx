function ArticleListByCategory({data, category}) {
  return (
    <>
      <h1>Showing news for {category}</h1>
      {data.map(item => <h1 key={item.id}>{item.title}</h1>)}
    </>
  )
}

export default ArticleListByCategory; 

export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:4000/news?category=${params.category}`);
  const data = await res.json();
  console.log("pre-rendering Articles for category" + params.category);

  if (!data.length) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      data,
      category: params.category,
    }
  }
}
