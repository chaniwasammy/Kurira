import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background-color:#FFFFFF;
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
              height:120vh;
            }
.send{
    @media (min-width:768px) {
              display:flex;
        }
        .images{
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
            width:48%;
            margin-top:125px;
            margin-left:125px;
            height:90%;
        }
        }
    }
   

    .text{
        @media (min-width:1200px) {
             width:40%;
             margin-left:700px;
             
        }
        h4{
            color:white;
            line-height:30px;
            padding-top:30px;
            margin-left:30px;
            font-size:20px;
            color:black;
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
             margin-top:110px;
             position:relative;
             margin-left:90px;
             font-size:35px;
             line-height:40px;
             
        }
        }
       
        p{
            color:white;
            margin-left:30px;
            margin-top:20px;
            color:black;
            @media (min-width:1024px) {
             font-size:18px;
             margin-left:70px;
             
        }
        @media (min-width:1200px) {
             position:relative;
             margin-left:120px;
             font-size:25px;
             line-height:35px;
             
        }
        }
        .one{
            width:1.2%;
            position:absolute;
            margin-top:-302px;
            margin-left:90px;
        }
        .two{
            width:1.2%;
            position:absolute;
            margin-top:-245px;
            margin-left:90px;
        }
        .three{
            width:1.2%;
            position:absolute;
            margin-top:-189px;
            margin-left:90px;
        }
        .four{
            width:1.2%;
            position:absolute;
            margin-top:-136px;
            margin-left:90px;
        }
        .five{
            width:1.2%;
            position:absolute;
            margin-top:-82px;
            margin-left:90px;
        }
        .six{
            width:1.2%;
            position:absolute;
            margin-top:-23px;
            margin-left:90px;
        }
       
    }

    }
   


`

function HowKurira() {
  return (
    <Wrapper>
      <div className='send'>
      <div className='images'>
            <img src='./images/features 1.png' className='second' alt=''></img>
        </div>
        <div className='text'>
            <h4>Some Exciting Features On Kurira</h4>
                
            <p>Check itemised calls anytime	 </p>       
            <p>Easy topup NO pins	 </p>       
            <p>Get balance on app	 </p>       
            <p>Crystal clear calls	 </p>       
            <p>Easy call connection	 </p>       
            <p>Use own password on App </p>  
            <img src='./images/5.png' className='one' alt=''></img>     
            <img src='./images/5.png' className='two' alt=''></img>     
            <img src='./images/5.png' className='three' alt=''></img>     
            <img src='./images/5.png' className='four' alt=''></img>     
            <img src='./images/5.png' className='five' alt=''></img>     
            <img src='./images/5.png' className='six' alt=''></img>     
        </div>
       
      </div>
    </Wrapper>
  )
}

export default HowKurira