import styled from 'styled-components';
import ProductDetailsComponent from "../../components/ProductDetailsComponent";

const ProductDetailWrapper = styled.div`
    padding: 2rem;
`

const ProductDetails = ({}) => {
    return (
        <ProductDetailWrapper className="container">
            <ProductDetailsComponent></ProductDetailsComponent>
        </ProductDetailWrapper>
    );
};

export default ProductDetails;
