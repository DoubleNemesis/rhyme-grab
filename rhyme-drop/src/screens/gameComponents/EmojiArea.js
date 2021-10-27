import Clown from '../../images/clown1.png'
import Nerd from '../../images/nerd.png'
import Sunglasses from '../../images/sunglasses.png'

export const EmojiArea = (props) => {
    return (
        <div className="points-area-emoji">
            {props.sliderValue === 1 ? <img src={Clown} alt="clown emoji" /> :
                props.sliderValue === 2 ? <img src={Nerd} alt="nerd emoji" /> :
                    props.sliderValue === 3 ? <img src={Sunglasses} alt="sunglasses emoji" /> : null
            }
        </div>
    )
}