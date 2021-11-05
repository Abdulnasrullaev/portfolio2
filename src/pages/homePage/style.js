import styled from "styled-components";

export const FirstPage = styled.div`
width: 100%;
padding-top: 40px;
background-color: #F0F0F2;
height: 1074px;
display: flex;
img{
    margin: auto;
}
.title{
    margin: 130px auto;
    color: #0B1C39;
    width: 124%;
    font-size: 85px;
    font-weight: bolder;
    text-transform: capitalize;
}
.about{
    margin: -80px auto;
    font-size: 18px;
}
button{
    text-transform: uppercase;
    margin: 140px auto;
    width: 160px;
    height: 45px;
    border:none;
    font-size: 19px;
    font-weight: 500;
    background-color: #4A4A4B;
    color: white;
}
button:hover{
    transition-duration: 0.4s;
    background-color: red;
    cursor: pointer;
}
`;

export const SecondPage = styled.div`
  width: 100%;
  background-color:whitesmoke;
  margin: 0px 0px 50px 0px;
 padding-top: 20px;
 padding-bottom: 30px;
  height: 1550px;
  .title{
    
      font-size: 40px;
      margin: 30px 70px;
      font-weight: bolder;
      text-transform: capitalize;
  }
  .card{
      width: 90%;
      position: relative;
      left: 40px;
      display: flex;
      div{
          font-weight: bold;
          text-align: center;
    p{
font-size: 23px;
margin: 30px auto;
span{
    margin: 20px auto;
    color: red;
}
    }      
      img{
          width: 88%;
     height: 500px;
          margin: 0px 28px;

      }
      img:hover{
        transform: scale(1.1);
        opacity: 0.6;
        transition-duration: 2s;
      }
    }
  }
  .card2{
      margin-top: 120px;
      .img1{
          width: 47%;
          height: 680px;
          background-image: initial;
          background-size: cover;
      }
      .img2{
          width: 22%;
          background-size:contain;
          margin: 0px 40px;
          height: 680px;
      }
      .img3{
          display: grid;
          position: relative;
          left: 505px;
          bottom: 704px;
          width: 25%;
          height: 330px;
          margin: 20px auto;
      }
  }
`;

export const ThirdPage = styled.div`
  width:100%;
  background-color: wheat;
  padding-top: 20px;
  .title{
      font-size: 40px;
      font-weight: bolder;
  }
  .about{
      width: 57%;
      text-align: center;
      margin: auto;
      font-size: 19px;
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
  button{
    width: 250px;
    align-items: center;
    height: 45px;
    border: none;
    background-color: red;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 20px;
}
`;

export const FourthPage = styled.div`
  width: 100%;
  margin: 200px  auto;
  .watch1{
      width: 80%;
      margin: 120px 80px auto;
      display: flex;
      div{
          width: 55%;
          margin:120px 100px;
      .title{
          text-transform: capitalize;
          font-size: 53px;
          width: 500px;
          font-weight: bolder;
          margin: 42px -40px;
      }
      .about{
    margin: 60px -40px;
    font-size: 18px;
    width: 115%;
}
button{
    width: 220px;
    height: 50px;
    font-weight: 500;
    border: none;
    background-color: red;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    margin: 10px -40px;
}
        }
        img{
       position: relative;
       left: 80px;
       height: 550px;
        }
  }
  .watch2{
      width: 80%;
      margin: 120px 80px auto;
      display: flex;
      div{
          width: 90%;
          margin:120px 120px;
      .title{
          text-transform: capitalize;
          font-size: 53px;
          width: 500px;
          font-weight: bolder;
          margin: 42px 20px;
      }
      .about{ 
    margin: 60px 20px;
    font-size: 18px;
    width: 100%;
}
button{ 
    width: 220px;
    height: 50px;
    font-weight: 500;
    border: none;
    background-color: red;
    color: white;
    text-transform: uppercase;
   margin: 0px 20px;
    font-size: 20px;
}
        }
        img{
       position: relative;
       left: 0px;
       height: 550px;
       margin: 0px 0px;
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
`;