//TodoHeader.js
import styled from "styled-components"
const Header = styled.header`
   background: teal; color: #fff;
   padding: 30px;
   font-size: 30px; font-weight: 700;
   text-align: center;


   & h1{
      line-height: 1;
   }
`
export default function TodoHeader(){
   return(
      <Header>
         <h1>Todo List</h1>
      </Header>
   )
}