import React,{useState} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  background:#141414;
  position:absolute;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media(min-width:992px){
      justify-content: flex-start;
    }
  img{
    margin:5%;
    color:white;
    z-index:9;
    width:50%;
    margin:0;
    margin-left:25px;
    @media(min-width:768px){
      margin:2%;
      width:17%;
    
      margin-left:20px;
    }
    @media(min-width:992px){
     margin:0;
      margin-left:10px;
      height:60%;
    }
    @media(min-width:1200px){
      margin-top:0;
      margin-left:70px;
      height:60%;
    }



  }
  .hamburger{
    padding:20px 41px 20px 8px;
    position:relative;
    z-index:9;
    left:-45px;
    @media(min-width:992px){
      display:none;
    }
    span{
      width:40px;
      height:4px;
      background:white;
      position:absolute;
      border-radius:10px;
      transition:all 0.7s ease-in-out;
      &:before{
        background:white;
        width:100%;
        height:100%;
        position: absolute;
        content:"";
        top:-7px;
        border-radius:10px;
        transition:all 0.7s ease-in-out;
      }
      &:after{
        background:white;
        width:100%;
        height:100%;
        position: absolute;
        content:"";
        top:7px;
        border-radius:10px;
        transition:all 0.7s ease-in-out;
      }
    }
  }
  .open{
    span{
      background:transparent;
      &:before{
        top:0;
       
        background:white;
        transform:rotate(495deg);
      }
      &:after{
        top:0;
        background:white;
        transform:rotate(-495deg);
      }
    }
  }
  ul{
    background-color:#333;
    position:absolute;
    width:100%;
    height:100vh;
    top:0;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width:0;
    overflow:hidden;
    transition:all 0.7s ease-in-out;
    right:0;
    font-size:11px;
    margin-bottom:40px;
   @media(min-width:992px){
    margin-bottom:10px;
    .me{
      background-color:#DA332E;
      border-radius:6px;
      height:1px;
      align-items:center;
      padding:12px;
     padding-bottom:18px;
     width:45px;
     font-family:bold;
     font-weight:900;
     margin-left:10px;
     padding-left:20px;
    }
    
    .btn{
      background-color:#DA332E;
      border-radius:6px;
      align-items:center;
      align-items:center;
      height:1px;
      align-items:center;
      padding:12px;
     padding-bottom:18px;
     width:90px;
     font-family:bold;
     font-weight:900;
     margin-left:8px;
     padding-left:20px;
    }
    .btn1{
      background-color:#DA332E;
      border-radius:6px;
      height:1px;
      align-items:center;
      justify-items:center;
      padding:12px;
     padding-bottom:18px;
     width:80px;
     margin-left:10px;
     font-family:bold;
     font-weight:800;
     padding-left:20px;
    }
  }

    @media(min-width:768px){
      height:690px;
    }
    @media(min-width:992px){
      max-width:unset;
      height:auto;
      flex-direction:row;
      position:relative;
      width:max-content;
      background-color:transparent;
      font-size:7px;
      
    }
    @media(min-width:1200px){
      font-size:10px;
      .me{
      background-color:#DA332E;
      border-radius:6px;
      height:1px;
      align-items:center;
      padding:12px;
     padding-bottom:18px;
     width:45px;
     font-family:bold;
     font-weight:900;
     margin-left:30px;
     padding-left:20px;
    }
    
    .btn{
      background-color:#DA332E;
      border-radius:6px;
      align-items:center;
      align-items:center;
      height:1px;
      align-items:center;
      padding:12px;
     padding-bottom:18px;
     width:90px;
     font-family:bold;
     font-weight:900;
     margin-left:20px;
     padding-left:20px;
    }
    .btn1{
      background-color:#DA332E;
      border-radius:6px;
      height:1px;
      align-items:center;
      justify-items:center;
      padding:12px;
     padding-bottom:18px;
     width:80px;
     margin-left:20px;
     font-family:bold;
     font-weight:800;
     padding-left:20px;
    }
  }

    }
    li{
      
      
      a{
        padding:20px;
        color:white;
        display:block;
        text-transform:uppercase;
        width:max-content;
        position:relative;
      }
    }
    .active{
      a{
        background:red;
        color:white-space;
        &:before{
          position:absolute;
          bottom:-8px;
          left:0;
          height:3px;
          width:100%;
          background:white;
          content:"";
        }
      }

    }
  
  .change{
    max-width:100%;
  }
`

function Header   () {

  const [checked, setChecked] = useState(false);


  return (
    <Wrapper>
      
      <img src="./images/kurira-logo_header 1.png" alt="" />
      <div className={checked ? "hamburger open" : "hamburger"} onClick={()=> setChecked(!checked)}>
          <span></span>
      </div>
      <ul className={checked ? "change" : ""}>

        <li>
        
        <Link to="/Home">Home</Link>
          
        </li>
        <li>
          <Link to="/HowItworks">How it works</Link>
        </li>
        <li>
          <Link to="/CallRates">Call rates</Link>
        </li>
        <li>
          <a href="#">Rewards</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Mobile topups</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a className='btn' href="#">My Account</a>
        </li>
        <li>
          <a className='btn1' href="#">03333 580 550</a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Header