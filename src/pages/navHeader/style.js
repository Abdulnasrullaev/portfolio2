import styled from "styled-components";

export const NavHeaders = styled.div`
 width: 100%;
display: flex;
background-color: #ffffff;
position: fixed;
padding: 10px;
height: 86px;
text-align: center;
box-shadow: 0px 2px 30px gray;
z-index: 997;
 
   .logo{
      font-size: 30px;
      font-weight: 800;
      margin: 20px auto;
      span{
          color: red;
      }
  }
  ul{
      display: flex;
      list-style: none;
      text-transform: capitalize;
      margin: 28px 130px;
      li{
          margin:0px 20px;
          font-size: 18px;
         
          div{
              background-color: red;
              border-radius: 20px;
              color: white;
              text-align: center;
              font-size: 12px;
              width: fit-content;
              padding: 4px 10px 4px 10px; 
              position: relative;
              left: 34px;
              bottom: 46px;
          }
          a{
            text-decoration: none;
            color: black;
            font-weight: 400;
          }
      }
  }
  .icon{
      margin: 0px 40px;
      img{
          width: 30px;
          margin:24px 12px;
      }
  }
`;