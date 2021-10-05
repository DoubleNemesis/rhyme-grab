Game Play:

A word moves down the page taking 5 seconds to reach the bottom.

At the bottom of the page there are 4 words.

The user can move the falling word left and right

The user should control the word so it lands in right place (in this case, the falling word and the target word rhyme)

If it does, it goes green and point is scored

if not, it goes red and goes back in the pot



Code:
I need: 
    object of words to fall with their target word
    array of target words
Logic:
    setinterval for the word to drop through grid
    basic L/R control as per pacman
    when reaches bottom, assess if fallingWord.target is the same as target reached.