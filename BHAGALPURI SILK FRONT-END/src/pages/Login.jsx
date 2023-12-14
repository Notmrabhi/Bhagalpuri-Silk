import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#f4f4747a,#f0eb8c7a), url("https://t3.ftcdn.net/jpg/04/45/82/50/360_F_445825035_YP4715YEw93cLneKYQ6a4kFcLNqE7l2x.jpg") ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12x;
  text-decoration: underline;
  cursor: pointer;
`
const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="Username"/>
        <Input placeholder="Password"/>
        <Button>LOGIN</Button>
        <Link>FORGOTTEN PASSWORD ?</Link>
         <Link>CREAT A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}
export default Login