import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#5622227d,#612b2b7d), url("https://vaanisilks.com/images/b5.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fffdfd;
  ${mobile({width: "75%"})}
  `
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE  AN  ACCOUNT</Title>
        <Form>
          <Input placeholder="First name"/>
          <Input placeholder="Last name"/>
          <Input placeholder="Username"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Input placeholder="Confirm password"/>
          <Agreement>By Creating account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Login