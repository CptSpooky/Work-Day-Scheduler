# Work Day Scheduler

## Objective
Create a work day scheduler with color coded timeblocks and the ability to save events.

## Description
[App Link](https://cptspooky.github.io/Code-Quiz/)

![image desktop](https://user-images.githubusercontent.com/66426144/87885031-b1bc8200-c9e0-11ea-870b-d2f79f814fec.png)
![image mobile](https://media.discordapp.net/attachments/301370206721277952/734513479137886338/Screenshot_20200719-165409.png?width=772&height=1372)

### Variables
To start I knew I had to start referencing my html elements so I could visually validate my javascript. I called the element classes and Ids, storing them in variables I could later reference. I also created several variables that would be used for iteration. 

![image variables](https://user-images.githubusercontent.com/66426144/87883532-0a3a5200-c9d6-11ea-896c-a89edb015b96.png)
![image html ref](https://user-images.githubusercontent.com/66426144/87883757-8c774600-c9d7-11ea-934b-7cb3712cccd5.png)

### Quiz Questions
I set up a questions array that would store my quiz questions, what would be displayed as answers and whether or not they're true or false. When I reference them in answer selections, I'm able to determine whether the user chose the right answer or not.

![image questions code](https://user-images.githubusercontent.com/66426144/87883559-42419500-c9d6-11ea-9656-c86f51be13d1.png)

### Starting the quiz and question generation
When the user clicks the start button, it runs the startQuiz function. I wanted the start button to disappear and for the quiz questions/answers to appear. Using the 'hide' class I created in css (which displays: none), I was able to implement classList.add and .remove to essentially activate or deactivate that class, therefore hiding or exposing whatever holds 'hide' in its classes. Then, I made sure to reset the question index when the quiz starts so the first question is able to run, 'reset' the timer to 30 seconds, and cleared the score to 0 so later if a user decides to reset the quiz all these variables will begin with these values. 

When it came to getting the quiz to move to the next question, I iterated the question variable's (where I stored my questions) index, and passed that value into the showQuestion function's parameter. With that I was able to pass the next question into the questionElement's inner text and sort my question answers so that they'd appear randomly. Then came the generation of the answer buttons, where I created a loop where each iteration creates a button element with its corresponding inner text and whether or not the answer it carries is true or false through data-.

![image questions](https://user-images.githubusercontent.com/66426144/87885102-3dcea980-c9e1-11ea-8e71-3f0c3d20a365.png)
![image question gen](https://user-images.githubusercontent.com/66426144/87883575-6dc47f80-c9d6-11ea-8dd9-8846d641948b.png)

### Timer
The timerTick function takes the value of the variable timer and passes it into the inner html of the timerEl variable, and states that so long as the timer value is greater than 0, repeat the timerTick code block,decrementing the timer value by 1 second each iteration until it reaches 0 and runs the showFinalScore function. I stored the repeating function call in timerID so that I could reference it later in the showFinalScore function to stop it.

![image timer](https://user-images.githubusercontent.com/66426144/87883598-89c82100-c9d6-11ea-871b-f4a5d2b28e1b.png)
![image timerstop](https://user-images.githubusercontent.com/66426144/87883612-a19fa500-c9d6-11ea-9acf-de178c9a1f6b.png)

### Answer selection and final score
When the user clicks an answer button, the selectAnswer function runs. It checks if the clicked target (btn) is a button, and if said button's dataset value is true, increment the users score and give visual validation that their answer was correct. If the dataset value is false, penalize the user by subracting 10 seconds from the timer.

After the timer runs out or there are no questions left, the showFinalScore function runs. This just hides the quiz, reveals several elements like the submit form, button high scores etc and displays the user's final score.

![image answers](https://user-images.githubusercontent.com/66426144/87883626-b845fc00-c9d6-11ea-9b51-3e0712a601e1.png)

### Submitting score
When the user types in their initials and clicks the submit button, the submit form disappears, their initials and score are stored locally and pulled to be displayed in a list of high scores. After the quiz is run again and the score is submitted, it will be appended to the existing list.

![image submit](https://user-images.githubusercontent.com/66426144/87885144-a027aa00-c9e1-11ea-8c71-c490207afc7a.png)
![image score](https://user-images.githubusercontent.com/66426144/87883712-2985af00-c9d7-11ea-8614-e37f0a6253e2.png)

### Reset
when the user clicks the reset button, it hides finalScore, itself, and runs the startQuiz function which begins the quiz again. 

![image reset](https://user-images.githubusercontent.com/66426144/87885136-7c646400-c9e1-11ea-90ff-830f9b5283a8.png)
![image reset](https://user-images.githubusercontent.com/66426144/87883720-45895080-c9d7-11ea-8c43-60400ec24dfd.png)

## Thoughts 
I often found myself switching back and forth between the javascript and html, creating new classes for what I found out I needed as I coded. I think I would benefit from building out an actual plan next time and having all the html elements in place before trying to code.

## Credits
[Mozilla Developer](https://developer.mozilla.org/)
[W3Schools](https://w3schools.com)
[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
[Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)