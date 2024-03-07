# run npm i

# run npm start

## Objectives

1. Add "Settings" section where is possible to change board size, allowed size only 3,4,5.
   - This configuration affects only the board itself.
   - The winner of the game will be still first player placing 3 same symbols in row, column or diagonal.
   - The Settings should be disabled during the running game.
2. Display number of wins for each player below the game board.
   - The number of wins will be kept until the "Reset".
   - The number of wins will be kept after changing of board size.
3. Instead of the "Reset game" link, introduce "New game" and "Reset" links
   - The "New game" only starts new game keeping board size and keeping number of wins for each player.
   - The "Reset" completely reset the game
     - Set board size to default (size 3)
     - Clear the number of wins for all players
     - Clear the game (create new game)
