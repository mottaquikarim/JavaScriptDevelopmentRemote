// Follow the spec given here, and create a rock paper scissors function
// that spits out the expected return values.

/*
    @func rockPaperScissors         // declare a rps function
    @param {string} player1         // takes a parameter of STRING type, named player1
    @param {string} player2         // takes a parameter of STRING type, named player2
    @returns {number}               // returns a number.
==============================================================================

    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"

==============================================================================
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/