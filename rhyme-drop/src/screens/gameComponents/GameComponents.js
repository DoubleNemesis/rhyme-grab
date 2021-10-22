import styled from "styled-components"

export const GameContainer = styled.div`

.cell{
    width: 20%;
    height: 6vh;
    border: 1px solid #cdcdcd;
    background-color: whitesmoke;
    color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width:700px){
        width: 100px; 
        height: 45px; 
    }
}

.grid{
    display: flex;
    flex-wrap: wrap;
    width: 100%; 
    height: 60vh;
    background-color: transparent;
    /* border: 1px solid red; */

    @media(min-width:700px){
        width: 500px; 
        height: 450px; 
    }
}

.message-area{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem;
    border-top: 3px solid skyblue;
}

@media(min-width: 700px){
    .message-area{
        border: 3px solid skyblue;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    } 
}

.points-area{
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: 1.07px;
    width: 100%;
    min-width: 30%;
    display: flex; 
    justify-content: space-between;  
}


.points-area-label{
    padding: 0 1.5rem 0 .5rem;

}

@media(min-width: 700px){
    .points-area-label{
        border-radius: 5px;
    } 
}

.points-area-cluster{
    display: flex;
}

.count-down{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
    text-align: center;
    font-size: 100px;
    color: chartreuse;
    opacity: 0.8;
}

.end-message{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    display: none;
    z-index: 2;
    background-image: linear-gradient(#666, #212529);
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    
    @media(min-width: 700px){
            width: 50%;
            /* height: 60%; */
            border: 3px solid var(--main-pink);
            padding: 4em 2em 4em 2em;
            border-radius: 5px;
            box-shadow: 3px 3px 3px 3px #333;
    }
    @media(min-width: 1025px){
            width: 25%;
    }
}



`
