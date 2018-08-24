# Quiz machine Brief

To create a quiz app using the Open Trivia Database database to obtain questions.

## Install Instructions
1. git clone repo
2. install node from website, if you don't already have it installed 
3. npm install (in terminal/bash shell)
4. npm run dev
5. Open index.html in browser window

Game Instructions
=================
You are presented with a question and 4 multiple choice answers, select the right answer to win.

##Info
Questions are graded in difficulty. The first 3 questions are easy, the next 4 are medium and thereafter the questions are of the hardest difficulty available. Questions have been chosen from the General Knowledge category.

Breakpoints are set at £300,000 and £500,000 meaning that if you lose between the breakpoints you will drop down to £300,000. If your score is above £500,000 then a wrong answer will drop your score down to £500,000.

You can walk (door icon) at any point and take your winnings, however, no money is earnt before the first breakpoint.

-MINIONaire logo - clicking on this will restart the game 
-50:50 icon - removes 2 possible wrong answers
-Phone icon - provides you with a hint that will be correct 45% of the time, 55% of the rest of the time will be divided randomly between the other 3 incorrect answers. If you have hit 50:50 before you click on ask a friend, your friend then has a higher probability (75%) of selecting the correct answer. 

-Ask the Audience (3 people icon) - at the moment this icon is crossed out indicating that the lifeline has been used. It has yet to be fully implemented.

-Door - This is the walk icon. Clicking on it will end your current game with your final score being determined by the breakpoints as listed above.

##Bugs
1.Questions may be repeated
2.Happy minion is not displayed for long enough

##To be Implemented
1.Responsiveness
2.Ask the audience functionality
3.End game - at £1m
4.Instruction screen at the start - maybe a link to instructions
5.Unit tests
6.Graded money rewards as in the real game, eg £100 for first correct answer, £200, £500,£1000,£2000 etc
7.High Score table

##Technologies used
I implemented a solution using React, Redux with asynchronous fetches from the opentdb.com API to load general knowledge questions and answers. 

##Own Thoughts and Findings
I found the project really satisfying in terms of getting to grips with state within Redux and the use of actions. I haven't optimised my code and am sure I could review and improve upon it. I don't think my use of state is ideal especially when handing the current status of the game. I'm pleased that I have managed to keep my reducers mainly pure and free from masses of functionality. I have moved my logic to within my actions and have made use of getState, however I am concerned about having such a large index.js action file and would like to find out if it is possible to split this into more logical modules. I need to continue working towards making my components manageable. I realise that I should have split my presentational components into smaller ones and will try to refactor it. 

Good luck!

