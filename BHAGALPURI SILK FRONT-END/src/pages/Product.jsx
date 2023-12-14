import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"
import { publicRequest } from "../requestMethod"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`

const ImgContainer = styled.div`
    width: 300px;
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 400;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`
const FilterColor = styled.div`
    width : 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmoutContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;    
`
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    

    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const res = await publicRequest.get("/product/find/"+id)
                setProduct(res.data);
            }catch{}
        } 
        getProduct()
    }, [id])

    const handleQuantity = (type) =>{
        if (type === "dec"){
            quantity > 1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }

    const handleClick = () =>{
        
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://cdn.shopify.com/s/files/1/0220/5433/8656/products/372697_20MD_2048x2048.jpg?v=1658323477"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Black Eri Silk Saree With Copper Zari</Title>
                <Desc>Defining the beauty, this Black Eri silk saree with copper zari woven floral pattern across the body, accentuated with rudraksha and floral pattern woven in copper zari in the border and pallu.</Desc>
                <Price>₹ 16205.65</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="Darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    
                </FilterContainer>
                <AddContainer>

                    <AmoutContainer>
                        <Remove onClick ={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick ={()=>handleQuantity("inc")}/>
                    </AmoutContainer>
                    <Button onClick = {handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default Product