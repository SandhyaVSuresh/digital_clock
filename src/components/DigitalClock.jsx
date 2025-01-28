import {useState,useEffect} from 'react'
import ClockImg from "../assets/imgBg.jpg"
import styled from "styled-components"

function DigitalClock() {
    const ClockContainer = styled.div`
    background-image: url(${ClockImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    const Clock = styled.div`
    backdrop-filter:blur(5px);
    border-radius:55%;
    width:50vw;
    padding:3%;
    text-align:center;
    `;
    const TimeDisplay = styled.span` 
    font-size: 8vw;
    font-family: Arial, sans-serif;
    font-weight: bold;
    color:#fff;
    text-shadow:3px 3px 5px #000;
    `;

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () =>{ 
            clearInterval(intervalId);
        }
    },[])

    const formateTime = ()=>{
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`
    }
    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }
  return (
    <>
        <ClockContainer>
            <Clock>
                <TimeDisplay>{formateTime()}</TimeDisplay>
            </Clock>
        </ClockContainer>
    </>
  )
}

export default DigitalClock