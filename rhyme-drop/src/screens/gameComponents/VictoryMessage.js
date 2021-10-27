import TrophySmall from '../../images/trophySmall.png'

export const VictoryMessage = (props) => {
    return (
        <>
            <h2><img src={TrophySmall} width="55px" alt="trophy emoji" /></h2>
            <h2 className="end_win">You win with {props.victoryPoints} points!</h2>
        </>
    )
}