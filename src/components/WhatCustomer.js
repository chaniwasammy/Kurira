import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
height:230vh;
background-color:#131313;
@media (min-width: 375px) {
              height:214vh;
        }
        @media (min-width: 768px) {
              height:70vh;
              
            }
        @media (min-width: 1024px) {
              height:57vh;
              
            }
            @media (min-width: 1200px) {
             height:100vh;
        }
.what{
  position: relative;
    .our{
        h2{
            padding-top:40px;
            margin-left:20px;
            color:white;
            @media (min-width: 375px) {
              margin-left:50px;
        }
        @media (min-width: 768px) {
                font-size:35px;
                margin-left:35px;
                padding-top:80px;
                position:relative;
            }
        @media (min-width:1024px) {
                font-size:35px;
                margin-left:45px;
                padding-top:170px;
                position:relative;
            }
            @media (min-width: 1200px) {
              margin-left:109px;
              padding-top:140px;
             
        }
        }
        button{
            border-radius: 0px 0px 20px 0px;
            width: 257px;
            height: 60px;
            flex-shrink: 0;
            background: #D90E17;
            border:none;
            color:white;
            font-size:20px;
            margin-top:36px;
            margin-left:27px;
            @media (min-width: 375px) {
              margin-left:60px;
        }
        @media (min-width: 768px) {
               margin-left:490px;
               position:absolute;
               top:221.2%;
               font-size:15px;
            }
        @media (min-width: 1024px) {
               margin-left:690px;
               position:absolute;
               top:208.2%;
               font-size:16px;
               height:50px;
            }
            @media (min-width: 1200px) {
              margin-left:979px;
              height:40px;
              width:280px;
              top:18.2%;
              
        }
        }
    }
   .blue{
    @media (min-width: 768px) {
             display:flex;
        }
    .customer{
        @media (min-width:1200px) {
              width:100%;
              margin-left:90px;
        }
          img{
            width:40%;
            margin-top:40px;
            margin-left:20px;
            @media (min-width: 768px) {
             width:18%;
             margin-top:50px;
        }
            @media (min-width: 1200px) {
             width:18%;
             
             
        }
        
          }
          .one{
           width:40%;
          position:relative;
          @media (min-width: 768px) {
             width:18%;
        }
          }
          .two{
            position:absolute;
            left:-1%;
            width:43%;
            @media (min-width: 768px) {
             width:13%;
             left:-0.7%;
             margin-top:42px;
        }
            @media (min-width: 1200px) {
             width:8%;
             left:6%;
             margin-top:42px;
        }
          }
    }

    .say{
        position:relative;
        .ff{
            width:60%;
            margin-top:40px;
            margin-left:50px;
            @media (min-width: 768px) {
               position:absolute;
               margin-left:-80px;
               margin-top:100px;
               width:50%;
               
            }
            @media (min-width: 1024px) {
               position:absolute;
               margin-left:-130px;
               margin-top:100px;
               width:50%;
               
            }
            @media (min-width: 1200px) {
                position:absolute;
               margin-left:-79px;
               margin-top:50px;
               width:17%;
               height:100%;
               
               
            }
        }
        h5{
            color:white;
            font-size:30px;
            margin-left:40px;
            @media (min-width: 768px) {
               margin-top:90px;
            }
            @media (min-width: 1200px) {
              font-size:39px;
            }
        }
        p{
            color:white;
            padding:25px;
            line-height:20px;
            @media (min-width: 375px) {
              margin-left:17px;
        }
        @media (min-width: 768px) {
              font-size:28px;
              line-height:30px;
            }
        }
        h6{
            color:red;
            margin-left:30px;
            @media (min-width: 375px) {
              margin-left:46px;
        }
        @media (min-width: 768px) {
               font-size:13px;
            }
        @media (min-width: 1024px) {
               font-size:15px;
            }
        }
        .about{
            
            .oo{
                position:absolute;
                top:85%;
                width:10%;
                margin-left:230px;
                @media (min-width: 768px) {
               margin-left:210px;
               margin-top:59px;
              
            }
                @media (min-width: 1024px) {
               margin-left:240px;
               margin-top:37.6px;
              
            }
            @media (min-width: 1200px) {
               margin-left:440px;
               margin-top:1.6px;
               width:4%;
              
            }
            }
            .uu{
                position:absolute;
                top:85%;
                width:10%;
                margin-left:266px;
                @media (min-width: 768px) {
               margin-left:219px;
               margin-top:59px;
              
            }
            @media (min-width: 1024px) {
               margin-left:259px;
               margin-top:37.6px;
              
            }
            @media (min-width: 1200px) {
               margin-left:480px;
               margin-top:1.6px;
               width:4%;
              
            }
            }
        }
    }
   }
}


`


function WhatCustomer() {
  return (
    <Wrapper> 
       
        <div className='what'>
    <div className='our'>
    <h2>What our customers say</h2>
    <button>Tell us what you like about Kurira</button>
    </div>
    <div className='blue'>
    <div className='customer'>
       <img src='./images/Ellipse 1.png' alt=''></img>
       <img src='./images/Ellipse 2.png' alt=''></img>
       <img src='./images/Ellipse 3.png' alt=''></img>
       <img src='./images/Ellipse 3.png' alt=''></img>
       <img src='./images/Ellipse 4.png' alt=''></img>
       <img src='./images/Ellipse 5.png' className='one' alt=''></img>
       <img src='./images/Ellipse_7-removebg-preview (2).png' className='two' alt=''></img>
       <img src='./images/Ellipse 9.png' alt=''></img>
       <img src='./images/Ellipse 9.png' alt=''></img>
    </div>
    
    <div className='say'>
        <img src='./images/ph_quotes-fill.png' className='ff' alt=''></img>
        <h5>Saves money</h5>
        <p>I call abroad a lot and Kurira has helped me to save money. With rates
             that are the same as those charged within the country I call to, Kurira is
              best.</p>
              <h6>Jane Chimuti, Accountant</h6>
              <div className='about'>
                <img src='./images/eva_arrow-ios-forward-outline.png'className='oo' alt=''></img>
                <img src='./images/eva_arrow-ios-forward.png'className='uu' alt=''></img>
              </div>
    </div>
    </div>
   
  </div>

  </Wrapper>
  )
}

export default WhatCustomer