import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fbf5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" &&  "10px"};
    right: ${props=> props.direction === "right" &&  "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translate(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex ;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height:100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
    padding-left: 80px;
`

const infoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    width: 600px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 50px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideindex] = useState(0);
    const handleClick = (direction) =>{

        if(direction==="left"){
            setSlideindex(slideIndex  > 0 ? slideIndex -1 : 2)
        }
        else{
            setSlideindex(slideIndex  < 2 ? slideIndex +1 : 0)
        }

    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
             <ImgContainer>
                <Image src={item.img} />
             </ImgContainer>
             <infoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
             </infoContainer>
            
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
        
    </Container>
  )
}

export default Slider