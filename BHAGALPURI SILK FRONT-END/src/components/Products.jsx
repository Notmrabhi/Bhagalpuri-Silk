import styled from "styled-components";
import {popularproducts} from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  const[products, setProducts] = useState([])
  const[filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async ()=> {
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err){}
    };
    getProducts()
  },[cat]);



 return (
    <Container>
         {popularproducts.map((item) =>(<Product item={item} key={item.id}/>))}
    </Container>
  );
};
export default Products;