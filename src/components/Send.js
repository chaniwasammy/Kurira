import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color:#131313;
height:195vh;
@media (min-width: 375px) {
             height:210vh;
        }
        @media (min-width:768px) {
           height:60vh;
        }
        @media (min-width:1024px) {
           height:45vh;
             
        }
        @media (min-width: 1200px) {
              height:100vh;
            }
.send{
    position: relative;
    @media (min-width:768px) {
              display:flex;
        }
    .text{
        h4{
            color:white;
            line-height:30px;
            padding-top:30px;
            margin-left:30px;
            font-size:20px;
            @media (min-width: 375px) {
              margin-left:29px;
              padding-top:50px;
        }
        @media (min-width:768px) {
             margin-top:95px;
             
        }
        @media (min-width:1024px) {
             margin-top:105px;
             position:relative;
             margin-left:70px;
             font-size:25px;
             
        }
        @media (min-width:1200px) {
             margin-top:105px;
             position:relative;
             margin-left:120px;
             font-size:30px;
             line-height:35px;
             
        }
        }
        a{
            color:#D9322E;
        }
        h5{
            color:white;
            margin-left:30px;
            font-size:22px;
            margin-top:32px;
            line-height:30px;
            @media (min-width:1024px) {
            margin-left:70px;
             position:relative;
             
        }
        @media (min-width:1200px) {
             position:relative;
             margin-left:120px;
             font-size:35px;
             line-height:35px;
             
        }
        }
        p{
            color:white;
            margin-left:30px;
            margin-top:20px;
            @media (min-width:1024px) {
             font-size:18px;
             margin-left:70px;
             
        }
        @media (min-width:1200px) {
             position:relative;
             margin-left:120px;
             font-size:25px;
             
        }
        }
        .zaa{
            position:relative;
            border-radius:0px 0px 20px 0px;
            background-color:#D90E17;
            border:none;
            color:white;
            height:50px;
            width:195px;
            flex-shrink:0;
            margin-top:35px;
            margin-left:20px;
            text-align:left;
            font-size:20px;
            padding-left:20px;
            @media (min-width: 375px) {
              margin-left:33px;
        }
        @media (min-width:1024px) {
           margin-left:70px;
             
        }
        @media (min-width:1200px) {
             margin-top:75px;
             position:relative;
             margin-left:120px;
             font-size:25px;
             
        }
    }
    .zwa{
        position:absolute;
        width:10%;
        color:white;
        top:940.9%;
        left:55%;
        @media (min-width: 375px) {
              top:901.1%;
              position:absolute;
              margin-left:-15px;
              width:8%;
        }
        @media (min-width: 768px) {
              top:400.7%;
              margin-left:-240px;
              width:4%;
        }
        @media (min-width:1024px) {
              top:336.2%;
              margin-left:-339px;
              width:4%;
             
        }
        @media (min-width:1200px) {
              top:92.2%;
              margin-left:-470px;
              width:2%;
             
        }
        
    }

    }
    .images{
        .first{
            width:60%;
            margin-top:50px;
            margin-left:60px;
            @media (min-width: 375px) {
              width:70%;
              margin-left:57px;
        }
        @media (min-width:768px) {
             width:40%;
             margin-top:80px;
             
        }
        @media (min-width:1024px) {
             width:30%;
             
             
        }
        @media (min-width:1200px) {
            width:25%;
            margin-left:200px;
        }
        }
        .second{
            width:60%;
            margin-top:50px;
            margin-left:60px;
            @media (min-width: 375px) {
              width:70%;
              margin-left:57px;
        }
        @media (min-width:768px) {
             width:27%;
             margin-left:25px;
            position:absolute;
            margin-top:155px;
             
        }
        @media (min-width:1024px) {
            width:20%;
             
        }
        @media (min-width:1200px) {
            width:15%;
             
        }
        }
    }
}

`

function Send() {
  return (
    <Wrapper>
         
      <div className='send'>
        <div className='text'>
            <h4>Send airtime to your loved
                 ones with<a href='#'>Kurira</a> .</h4>
                 <h5>Topup Airtime from
                    <a href='#'> anywhere</a> in the world.</h5>
                     <p>Available in 180 Countries</p>
                     <button className='zaa'>Find out how</button>
                    <img src='./images/eva_arrow-ios-forwa.png'className='zwa' alt=''></img>
        </div>
        <div className='images'>
            <img src='./images/Rectangle 19.png' className='first' alt=''></img>
            <img src='./images/Rectangle 20.png' className='second' alt=''></img>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default Send