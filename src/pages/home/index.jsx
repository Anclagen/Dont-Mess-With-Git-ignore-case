import { Link } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/API";
import { ProductCard } from "../../components/product/productCard";
import { MainWrapper, PageWrapper, Main } from "../../components/layout/main/styles";
import { Banner, HomeHeading, ProductGrid,  } from "./styles";
import bannerImage from "../../assets/banner.jpg"

function Products({ products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading</div>;
  } 
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}

function Home(){
  const {data, isLoading, isError} = useAPI(baseURL);
  if(!isLoading){
    console.log(data)
  }
  
  return(
    <Main>
      <Banner src={bannerImage} alt="Heart shaped mechanical clock"></Banner>
      <HomeHeading>Home Page</HomeHeading>
      <PageWrapper>
        <Products products={data} isLoading={isLoading} isError={isError} />
      </PageWrapper>
      
    </Main>
  )
}

export default Home