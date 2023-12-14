import { Copyright, Facebook, Instagram, LocalPhone, LocalPostOfficeOutlined, LocationOn, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flex: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title= styled.h3`
     margin-bottom: 30px;  
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 100%;
`
const CopyRighttag = styled.div`
    font-size: 15px;
    margin-top: 60px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BHAGALPURI SILK.</Logo>
            <Desc>Bhagalpuri Silk is a combination of royalty with various designs and is extremely soft and light-weight that's why it is known as the Queen of all fabrics.</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon >
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/>
                </SocialIcon>
            </SocialContainer>
            <CopyRighttag>
                <Copyright style={{height: "18px", paddingBottom: "0px"}}/>Copyright 2022 By Notmrabhi . All rights reserved.
            </CopyRighttag>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Best Seller</ListItem>
                <ListItem>Best Quality</ListItem>
                <ListItem>Last Orders</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Settings</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOn style={{marginRight: "10px"}}/>
                BS-42-802 ,Near Seemanchal Motors Sailbag Aliganj Bhagalpur
            </ContactItem>
            <ContactItem><LocalPhone style={{marginRight: "10px"}}/>
                +91 860 30 22967
            </ContactItem>
            <ContactItem><LocalPostOfficeOutlined style={{marginRight: "10px"}}/>
                abhishekanand5603@gmail.com
            </ContactItem>
            <Payment src="https://nutrifuelz.com/wp-content/uploads/2019/11/Footer-payment-icons.png"/>
        </Right>
    </Container>
  );
};
export default Footer;