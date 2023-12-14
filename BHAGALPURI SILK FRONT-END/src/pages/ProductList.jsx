import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", dispaly: "flex", flexDirection: "Column"})}
`;
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`
const Option = styled.option`
`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters,setFilter] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value,
        });
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Sarees</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="type" onChange={handleFilters}>
                    <Option disabled >Category</Option>
                    <Option>Katia</Option>
                    <Option>Eri</Option>
                    <Option>Mulberry</Option>
                    <Option>Giccha</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort Products</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select></Filter>
        </FilterContainer>
        <Products cat={cat} filters = {filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default ProductList