import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background-color:white;
height:250vh;
@media (min-width: 375px) {
            height:194vh;
        }
        @media (min-width:768px) {
            height:65vh;
        }
        @media (min-width:1024px) {
           height:50vh;
             
        }
        @media (min-width:1200px) {
            height:80vh;
             
        }
.whole{
    @media (min-width:768px) {
            display:flex;
        }
   .divide{
    @media (min-width:1200px) {
        width:200%;
             
        }
    @media (min-width:768px) {
            display:flex;
        }
    .text{
        @media (min-width:1024px) {
            margin-top:90px;
             
        }
        @media (min-width:1200px) {
           
             margin-left:100px;
            
             
        }
        p{
            padding-top:70px;
            margin-left:20px;
            font-size:45px;
            line-height:50px;
            @media (min-width: 375px) {
             font-size:30px;
             margin-left:35px;
        }
            @media (min-width: 768px) {
             
        }
        }
    }
    .tex{
        @media (min-width:1024px) {
            margin-top:90px;
             
        }
        p{
            padding-top:70px;
            margin-left:20px;
            font-size:45px;
            line-height:50px;
            @media (min-width: 375px) {
             font-size:35px;
             margin-left:39px;
        }
        }
    }
    .te{
        @media (min-width:1024px) {
            margin-top:90px;
             
        }
      
      
        p{
            padding-top:70px;
            margin-left:20px;
            font-size:45px;
            line-height:50px;
            @media (min-width: 375px) {
             font-size:30px;
             margin-left:35px;
        }
        
       
        }
    }
   }
    .images{
      .one{
        width:80%;
        margin-left:30px;
        margin-top:60px;
        @media (min-width:768px) {
            margin-top:100px;
        }
        @media (min-width:1024px) {
            margin-top:180px;
             
        }
        @media (min-width:1200px) {
             width:50%;
             margin-left:120px;
             margin-top:170px;
             
        }
      }
    .separate{
        @media (min-width: 768px) {
             display:flex;
        }
        .two{
        width:80%;
        margin-left:30px;
        margin-top:60px;
        @media (min-width: 768px) {
             width:35%;
            
        }
        @media (min-width: 1200px) {
             width:25%;
             margin-left:95px;
            
        }
      }
      .three{
        width:80%;
        margin-left:30px;
        margin-top:60px;
        @media (min-width: 375px) {
             width:35%;
        }
        @media (min-width: 1200px) {
             width:25%;
        }
      }
    }
    }
}

`


function FirstFooter() {
  return (
    <Wrapper>
            
     <div className='whole'>
        <div className='divide'>
        <div className='text'>
            <p>About Us
               Terms of Use
               Privacy Policy
               Cookie Policy
               Rewards Terms</p>
        </div>
        <div className='tex'>
            <p>How It Works
               Help
               Video Help
               Alerts
               Contact Us</p>
        </div>
        <div className='te'>
            <p>Call Rates
     <br></br> Account Log In
               Create Account
               Get Rewards
               Prize Draw</p>
        </div>
        </div>
        <div className='images'>
            <img src='./images/kurira-logo_footer-200x75 1.png' className='one' alt=''></img>
            <div className='separate'>
            <img src='./images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png' className='two' alt=''></img>
            <img src='./images/en_app_rgb_wo_45.png' className='three' alt=''></img>
            </div>
        </div>
     </div>

    </Wrapper>
  )
}

export default FirstFooter