Add the following lines to your vscode settings.json at the end
to enable peer programming
Everything shows minus node_modules but it still works
"liveshare.autoShareServers": true,
"liveshare.autoShareTerminals": true

1. Create user stories or epics
2. Install Prisma
3. Install Tailwind and MUI
4. Create Docker Compose file
5. Create Simple Database Schema
6. Create Wireframe

Pages:
- Welcome (with sign up and login options)
  - https://authjs.dev/
- Home
- Game Setup
- In Game
- Profile
- Friends
- Leaderboard
- Terms of Service
- Tutorial

User Stories:
- As a guest user, I want to Sign Up for an account
- As a first time user, I want to have option for tutorial
- As a logged in user, I want to customize profile and view my stats
- As a logged in user, I want to change time controls
- As a logged in user, I want to play game
    - vs. computer
    - vs. random
    - vs. friends (link)
- As a user, I want to view leaderboard
- As a logged in user, I want to add friends

Later Goals:
- As a logged in user, I want to customize board
- As a logged in user, I want to have lessons
- As an in-game user, I want to be able to view a move log
- As an in-game user, I want to be able to chat unfiltered