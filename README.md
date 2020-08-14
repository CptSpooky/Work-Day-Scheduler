# Work Day Scheduler

## Objective
Create a work day scheduler with color coded timeblocks and the ability to save events.

## Description
[App Link](https://cptspooky.github.io/Work-Day-Scheduler/)

![image desktop](https://user-images.githubusercontent.com/66426144/88464582-0604ad80-ce8a-11ea-9c32-de78248793a5.png)

### Code
To start, everything is wrapped in document.ready function so the DOM is ready for JavaScript code to execute safely. The next function listens for save button clicks and stores the inputed value and time into variables that are saved on local storage.

![image clickListen](https://user-images.githubusercontent.com/66426144/88464825-d3f44b00-ce8b-11ea-865e-259e2decdb7e.png)
![image storage](https://user-images.githubusercontent.com/66426144/88465108-26366b80-ce8e-11ea-9012-946ae4bab8b6.png)

The function hourUpdater is where most of the magic happens. The current time is stored, time block hours are turned into integers and a loop is created to check whether or not a time block is in the past, present or future, calling on or removing classes to display the appropriate colors. User input which has been saved is pulled to display inside the time blocks. 

![image hourUpdaterFunction](https://user-images.githubusercontent.com/66426144/88464932-a4920e00-ce8c-11ea-932b-ed6540692c5e.png)
![image validate](https://user-images.githubusercontent.com/66426144/88465083-f8512700-ce8d-11ea-88ae-829e9be6b7e9.png)

The function ticker is essentially a timer that executes the hourUpdater function every 15 seconds so that the time check is kept up to date. 

![image timer](https://user-images.githubusercontent.com/66426144/88465058-c344d480-ce8d-11ea-91dd-3787c9ce3f1e.png)


## Technologies Used
* Javascript
* JQuery
* HTML
* CSS
* Bootstrap


## Credits
[Mozilla Developer](https://developer.mozilla.org/)
[W3Schools](https://w3schools.com)
[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
[Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
