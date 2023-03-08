import { ProductLoaderContainer, ProductLoaderImage, ProductLoaderHeading, ProductLoaderPrice, ProductLoaderButton } from "./styles";

export function ProductCardLoader() {
  return (
    <ProductLoaderContainer>
      <ProductLoaderImage/>
      <ProductLoaderHeading/>
      <ProductLoaderPrice/>
      <ProductLoaderButton/>
    </ProductLoaderContainer>
  );
}