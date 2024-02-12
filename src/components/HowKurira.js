import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background-color:#f7f7f7;
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
              height:110vh;
            }
.send{
    @media (min-width:768px) {
              display:flex;
        }
    .text{
        @media (min-width:1200px) {
             width:60%;
             
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
             margin-top:155px;
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
       
    }

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
            width:23%;
            margin-top:55px;
            margin-left:95px;
        }
        }
    }


`

function HowKurira() {
  return (
    <Wrapper>
      <div className='send'>
        <div className='text'>
            <h4>How Kurira Works</h4>
                
            <p>All you need is an account to start enjoying cheap international calls with us. Create an account
                 today and choose your own way of calling with your Kurira.

               How you use Kurira is your choice, because it can be used on Android devices, iPhone and iPad, with Wi-Fi at home or with 3G/4G mobile data while on the go.
</p>
            <p>…by the way, you can also checkout our Video Help page for quick guides, and besides; we’re always
                 happy to help you directly when needed!</p>
                    
        </div>
        <div className='images'>
            <img src='./images/sama.png' className='second' alt=''></img>
        </div>
      </div>
    </Wrapper>
  )
}

export default HowKurira