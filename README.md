# searchhistorygame
Concept: Like photo roulette, but for things friends have googled

Prerequisites:
- Must be a google chrome user (for now)

How to play (to be implemented soon 💀):
- Go to chrome's "history" page
- In the search bar, enter "www.google.com"
- Select as much as you want, starting from the date listing and ending after the "www.google.com" listing
- Copy (ctrl-c) and paste (ctrl-v) into the game for player 1
- Player 2 does the same steps
- Play until desired to stop!!

DEV TO-DOS :P
- if using firebase:
    - learn how to use firebase now lol
    - add user authentication
    - use realtime database to store and sync game data (lobbies, players, scores, game states)
- make it look pretty!!

DEV COMPLETED ITEMS :D
- save user-inputted data into a list when submit is clicked, for each player
- make sure the list only includes what's searched, ignoring "google.com" and the dates (every other entry)
- clean up code
- when button is clicked, display the entire list and a random list entry
- set up a firebase project and integrate it client-side