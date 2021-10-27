export const GameOverMessage = (props) => {
    return (
        <>
            <h2 className="end_headline">Game Over!</h2>
            <p className="intro_text">You should have matched </p>
            <div className="intro_word"> {props.wordsToPlay[0]}</div>
            <div className="intro_text">with </div>
            <div className="intro_word">{props.wordsToPlay[1]}</div>
            <p className="intro_text">You got {props.points} points</p>
        </>
    )
}