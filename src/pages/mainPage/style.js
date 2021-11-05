import styled from "styled-components";

export const MainPages = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 95.5%;
  position: absolute;
  bottom: auto;
  padding: 30px;
  margin: 20px auto;
  background-color: lightgoldenrodyellow;
  .cards-wrapper{
      display: flex;
      padding: 40px;
      .card{
          width:20%;
          margin: 0px 20px;
          .title{
              font-size: 27px;
              font-weight: 500;
          }
          .about1{
              color: #86ABD7;
          }
      }
      .card1{
          width:20%;
          margin: 0px 23px;
          .title{
              font-size: 27px;
              font-weight: 500;
          }
          .about1{
              color: #86ABD7;
              li{
              list-style: none;
              text-transform: capitalize;
              padding: 10px 0px;
          }
          }
         
      }
  }
  .titles{
      margin-top: 40px;
      margin-left: 60px;
  }
  .icon{
      display: inline-flex;
      position: relative;
      left: 1000px;
      bottom:63px;
      img{
          margin: 0px 10px;
      }
  }
`;
