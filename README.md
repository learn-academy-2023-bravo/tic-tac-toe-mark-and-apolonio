# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
    - branch: grid
    - create function which will hold state variable with array of 9 empty spots
    - use .map method to iterate over 9 empty spots, into a grid
    - make each empty spot clickable with the use of onClick
    - DONE

- As a user, I can click on a square to mark it.
    - branch: toggle
    - create a function in a state variable that allows us to mark empty spots with "X" or "O" alternating
    - make a component called X-Player

    DONE



- As a user, my partner can click on a square after me and see their mark.
    - branch: opponent-toggle
    - create a function in a state variable that allows us to mark empty spots with "X" or "O" alternating
    -  make a component called O-Player

    DONE

- As a user, I can't click on a square that has already been marked.
    - branch: already-maked
    - create conditional statement to check if square has been marked


- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    - branch: winner
    - create a function that checks for every possible winning combinations of indexes. Example: 0,1,2 or 0,3,6, etc.

- As a user, I can't continue playing the game after the game has been won.
    - branch: game-won
    - use alert if someone has won saying which player has won, trigger reset button 

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
-  branch: game-over
- conditional statement if all indexes have X or O, alert saying "tie"
- conditional will be the same conditional as previous step


- As a user, I can click on a restart button that will clear the game board.
    - branch: restart-button
    - create a button and use onClick
    - create a function which resets page on button click

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
