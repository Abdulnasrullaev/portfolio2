import styled from "styled-components";


export const Shopping = styled.div`
  width: 100%;
  .logo{
  img{
    width: 100%;
    height: 650px;
   
   }
 }
 .card-wrapper{
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      text-align: center;
      margin: 10px 0px 20px 80px;
      .pric{
          margin: -40px 0px 20px 0px;
          font-weight: bolder;
          font-size: 24px;
          span{
              font-size: 19px;
          }
      }
  img{
      margin: 60px 20px;
  }


  }
  .card-wraper{
      width: 80%;
      display: flex;
      margin: 100px auto;
      background-color: #EA0000;
      color: #D3D1C4;
      .card2{
          margin: auto;
          padding:20px;
          width: 30%;
          img{
             margin: 20px -2px;
          }
          .title{
            color: white;
              font-size: 22px;
              font-weight: bold;
              margin: 10px 0px 20px 0px;
          
          
            }
            .about{
                font-size: 17px;
                margin: 0px 0px 30px 0px;
            }
      }
  }
  .navbar{
    justify-content: space-between;
    display: flex;
    padding-top: 60px;
    font-size: 19px;
  }
  select{
    width: 120px;
    padding-left: 10px;
    padding-right: 10px;
    height: 35px;
    border: none;
    margin: 10px 60px;
    background-color: #F2F2F2;
    border-radius: 20px;
  }
  select:focus{
    border: none;
  }
  .titleee{
    display: flex;
    margin: 0px 60px;
    .title1{
      text-transform: capitalize;
      text-decoration: none;
      color:black;
      text-indent: 4px;
      margin: 20px 20px;
    }
    .title1:focus{
      border-bottom: 3px solid red;
      border-bottom-style: solid;
      border-spacing: 1rem;
      width:fit-content;
    }
  }
`;