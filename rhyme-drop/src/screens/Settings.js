import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavigationBlock from '../components/NavigationBlock'
import MainContainer from '../components/MainContainer'
import H1 from '../components/H1'
import Clown from '../images/clown1.png'
import Nerd from '../images/nerd.png'
import Sunglasses from '../images/sunglasses.png'

const Slider = styled.div`
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;

  input{
      padding: 0;
      margin: 0;
  }


.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  /* transform: rotate(90deg) */
  margin: 1rem 0 0rem 0;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: skyblue;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background: skyblue;
  cursor: pointer;
}

.labels{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.labels img{
    width: 35px;
}

`
const P = styled.p`
font-size: 1rem;
text-align: center;
margin: 2rem 1rem;
`

export default function Settings(props) {

    const [sliderValue, setSliderValue] = useState(2)
    const [levelValue, setLevelValue] = useState('Nerd')

    function handleSliderChange(e) {
        setSliderValue(parseInt(e.target.value))
    }

    useEffect(()=>{
        setLevelValue(
            sliderValue === 1 ? `Clown` :
                sliderValue === 2 ? `Average` :
                    sliderValue === 3 ? `Boss` : 'null'
        )
    },[sliderValue])



    return (
        <MainContainer>
            <H1>Which difficulty level can you take?</H1>
                   <P> {levelValue}</P>
            {/* <P>
                How good are you at English pronunciation?
            </P> */}
            <Slider>
                <label><div className="labels"><img src={Clown} /><img src={Nerd} /><img src={Sunglasses} /></div>
                    <input type="range" min="1" max="3" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
                    <div className="labels"><p>slow</p><p>fast</p></div>
                </label>
            </Slider>

            <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} />
        </MainContainer>
    )
}