import styled from "styled-components";

export const Banner = styled.img`
  width: 100%;
  max-width: 1900px;
  display: block;
  margin: 0 auto;
  box-shadow: inset 40px 0 40px -16px, inset -40px 0 40px -16px;
`

export const HomeHeading = styled.h1`
  font-size: 3rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 280px;
  @media (min-width: 640px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    max-width: 640px;
  }

  @media (min-width: 990px) {
    max-width: 990px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (min-width: 1350px) {
    max-width: 1350px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
`;

