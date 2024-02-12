import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background-color:#131313;
height:25vh;
@media (min-width: 375px) {
            height:30vh;
        }
        @media (min-width:768px) {
            height:20vh;
            
        }
        @media (min-width:1200px) {
            height:10vh;
            
        }
.one{
    @media (min-width:768px) {
            display:flex;
        }
    
    .copy{
        p{
            color:white;
        margin-left:50px;
        padding-top:20px;
        @media (min-width: 375px) {
            padding-top:40px;
        }
        @media (min-width:768px) {
            font-size:30px;
            width:160%;
            margin-top:50px;
        }
        @media (min-width:1200px) {
            font-size:30px;
            width:160%;
            margin-top:-15px;
            margin-left:120px;
        }
        }
    }
    .images{
        @media (min-width:1200px) {
           
            margin-top:-70px;
            
        }
        .ee{
            width:20%;
            margin-top:30px;
            right:-899px;
            margin-left:60px;
            @media (min-width: 375px) {
             width:25%;
             margin-left:46px;
             margin-top:40px;
        }
        @media (min-width:768px) {
            width:15%;
            margin-left:260px;
            margin-top:90px;
        }
        @media (min-width:1200px) {
            width:5%;
            margin-left:799px;
            
        }
        }
        .ii{
            width:20%;
            margin-top:30px;
            right:-899px;
            @media (min-width: 375px) {
            width:25%;
        }
        @media (min-width:768px) {
            width:15%;
        }
        @media (min-width:1200px) {
            width:5%;
            
        }
        }
        .uu{
            width:20%;
            margin-top:30px;
            right:-899px;
            @media (min-width: 375px) {
           width:25%;
        }
        @media (min-width:768px) {
            width:15%;
        }
        @media (min-width:1200px) {
            width:5%;
        
        }
        }
    }
}


`




function SFooter() {
  return (
    <Wrapper>
        <div className='one'>
            <div className='copy'>
                <p>Copyright © 2021 Kurira ®</p>
            </div>
            <div className='images'>
                <img src='./images/1-e1499299216292.png' className='ee' alt=''></img>
                <img src='./images/5-e1499299427642.png'className='ii' alt=''></img>
                <img src='./images/2-e1499299443766.png' className='uu' alt=''></img>
            </div>
        </div>
    </Wrapper>
  )
}

export default SFooter