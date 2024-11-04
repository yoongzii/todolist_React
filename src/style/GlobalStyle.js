//GlobalStyle.js
//전체 스타일 적용
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   *{box-sizing: border-box;}
   body{
      background: #ccc;
      font-family: 'Pretendard', sans-serif;


   }
   #root{
      width: 500px; min-height: 80vh;
      margin: 50px auto;
      background: #fff;
      border: 1px solid #999; border-radius: 10px;
      overflow: hidden;
   }

   button{
      background: none; border: none;
      margin: 0; padding: 0;
   }
`
export default GlobalStyle;