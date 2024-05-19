import Product from "../../components/ProductCardComponent";
import HeadingComponent  from '../../components/HeadingComponent'
import ParagraphComponent from '../../components/ParagraphComponent'
import PrimaryButtonComponent  from '../../components/PrimaryButtonComponent'
import CategoryCardComponent  from '../../components/CategoryCardComponent'
import styled from 'styled-components';
import SubheadingComponent1 from '../../components/SubheadingComponent1'
import SubheadingComponent2 from '../../components/SubheadingComponent2'
import AboutUs from '../../images/aboutus.png'
import BannerLaptop from '../../images/aboutus.png'
import BannerTablet from '../../images/aboutus.png'
import BannerPhone from '../../images/aboutus.png'

const CategoryCardsWrapper = styled.div`
`
const OffersContainerWrapper = styled.div`
  padding: 1rem 0;
`

const BannerImageWrapper = styled.div`
  background: url(${BannerLaptop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    background: url(${BannerTablet});
    background-size: cover;
    background-position: unset;
    background-repeat: no-repeat;
  }

  @media (max-width: 576px) {
    background: url(${BannerPhone});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  margin-bottom: 5rem;
`
const BannerImage = styled.div`
  margin: 0 2.5rem;
  @media (max-width: 992px) {
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`
const CTAContainer = styled.div`
  padding: 3rem 1rem;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 576px) {
    margin-bottom: 15rem;
  }
`
const ButtonsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AboutUsImage = styled.div`
  background-image: url(${AboutUs});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 9rem;
`
const AboutUsTextContainer = styled.div`
  padding: 4rem;
`
const AboutUsText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #0D0909;
  text-align: left;
  line-break: auto;
  width: 90%;

  @media (max-width: 1400px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`
const Home = ({products}) => {
    return(
        <>
          <BannerImageWrapper className='container-fluid'>
            <BannerImage className='row'>
              <CTAContainer className='col-lg-6 col-md-7 col-sm-7'>
                <HeadingComponent text="Add a touch of handmade charm to your life!"></HeadingComponent>
                <ParagraphComponent text="From cozy blankets to delicate accessories, each piece in our collection is crafted with passion and precision. 
                Explore our shop to find the perfect addition to your wardrobe or a unique gift for someone special."></ParagraphComponent> 
                  <ButtonsContainerWrapper>
                    <PrimaryButtonComponent text="Shop Crafts" link="/products"></PrimaryButtonComponent>
                  </ButtonsContainerWrapper>
              </CTAContainer>
              <div className='col-lg-6 col-md-5 col-sm-4'></div>
            </BannerImage>
          </BannerImageWrapper>
                
          <div className='container'>
            <SubheadingComponent1 text="Categories"></SubheadingComponent1>
            <CategoryCardsWrapper className='row py-5'>
              <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center"> 
                <CategoryCardComponent text="Clothing" image={"/"}></CategoryCardComponent>
              </div>
              <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center"> 
                <CategoryCardComponent text="Accessories" image={"/"}></CategoryCardComponent>
              </div>
              <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center"> 
                <CategoryCardComponent text="Home" image={"/"}></CategoryCardComponent>
              </div>
            </CategoryCardsWrapper>
          </div>

          <div className='container-fluid my-5'>
            <div className='row'>
              <AboutUsImage className='col-md-6'></AboutUsImage>
              <AboutUsTextContainer className='col-md-6 col-12'>
                <HeadingComponent text="Our handcrafted journey"></HeadingComponent>
                <AboutUsText>At Pixie Crochet, we're dedicated to preserving the timeless art of crochet while infusing it with modern flair. 
                  Our team of skilled artisans pours passion and expertise into every handmade creation, ensuring that each piece reflects the highest standards of craftsmanship and style. 
                  But beyond offering exquisite crochet items, we strive to cultivate a vibrant community where creativity flourishes and connections are made. 
                  With a commitment to quality, tradition, and innovation, we invite you to explore our collection and join us in celebrating the beauty of handmade craftsmanship.</AboutUsText> 
                <PrimaryButtonComponent text="Learn More" link="/about-us"></PrimaryButtonComponent>
              </AboutUsTextContainer>
            </div>
          </div>
                
          <div className='container my-5 py-5'>
            <SubheadingComponent2 text="Our Products"></SubheadingComponent2>
            <OffersContainerWrapper className='row'>
              {products.slice(0,8).map((product) => (
                <Product key={product.id} data={product}/>
              ))}
            </OffersContainerWrapper>
          </div>
      </>
    )
}
export default Home;
