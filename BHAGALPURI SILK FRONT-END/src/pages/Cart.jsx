import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Component = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({display: "none"})}
`

const Toptext = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 130px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props=>props.color};
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginButtom: "20px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.div`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor:pointer;
`

const Cart = () => {
  return (
    <Component>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <Toptext>Shooping Bag(2)</Toptext>
                    <Toptext>Your Wishlist(0)</Toptext>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Buttom>

                <Info>
                  <Product> 
                    <ProductDetail>
                      <Image src="https://m.media-amazon.com/images/I/91in1L5BsWL._UY879_.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> Ethnic Junction Women's Patola Silk Blend Woven Saree With Blouse Piece </ProductName>
                            <ProductId><b>ID:</b> 93813718293</ProductId>
                            <ProductColor color="pink"/>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ 8245.67</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr/>
                  <Product> 
                    <ProductDetail>
                      <Image src="https://m.media-amazon.com/images/I/81anIX8V-2L._UY879_.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> Yashika women's art silk kalamkari and bhagalpuri style saree with blouse piece (Multi-Color_Free_Size) SDPL-SHRADDHA NAVY </ProductName>
                            <ProductId><b>ID:</b> 9381868348347</ProductId>
                            <ProductColor color="yellow"/>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>3</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ 5677.67</ProductPrice>
                    </PriceDetail>
                  </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>₹ 16491.34</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Estimated Shipping</SummaryItemText>
                      <SummaryItemPrice>₹ 120</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>₹ -12</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                      <SummaryItemText >Total</SummaryItemText>
                      <SummaryItemPrice>₹ 16599.34</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECK OUT NOW</Button>
                </Summary>
            </Buttom>
        </Wrapper>
        <Footer/>
    </Component>
  )
}
export default Cart