# Bored App

Bored App is a little Simple Page Application made out of React using [Create React App](https://github.com/facebook/create-react-app), [Redux](https://redux.js.org/) and the [Redux Toolkit](https://redux-toolkit.js.org/) template.

The web application uses the [Bored API ](https://bored-api.firebaseapp.com/) to retrieve ideas of activities to do when you are stuck at home. You can see a deployed version of the app here : [https://bored-app.vercel.app/](https://bored-app.vercel.app/)

I worked on this project for 2 hours a day, almost everyday during 5 days ( 10 hours in total ). Because of this availability limitation, I decided to implement a basic application with the following features:

- Retrieve a list of activities from the server and displays it in a table
- Implement the ability to filter each column of the table (except the image of course)
- Add a button to retrieve more activities from the server and add a pagination to the table
- Add a search bar allowing the user to search by name and type
- Add a button to call the server and display a random activity in a modal

The application uses CSS-in-JS through [Styled-components](https://styled-components.com/).

## Getting started

Start by cloning the repository

```
git clone https://github.com/FCartier/BoredApp.git && cd $_
```

Then install the required dependecies

```
yarn install
```

Finally, launch the application

```
yarn start
```

## Stack explanation

Working with React and Redux for a couples of years, I've got surprised by the existence of [Redux-toolkit](https://redux-toolkit.js.org/) and the fact that the redux documentation recommends using it. This project was the perfect opportunity to discover it and learn a bunch of new things along the way, so I chose redux-toolkit instead of the classic react-redux implementation.

Doing so, I discovered the Slices, which combine the actions and the reducers in the same place.

Last but not least, I tried to follow the redux-toolkit recommendations and organized the code by features instead of actions / reducers / pages.

## Roadmap

I really enjoyed working on this project and might improve it in the following weeks. Here is what I plan to do:

- Improve the code structure : Split the dashboard feature folder slice into several little ones (Table, Searchbar, Activity generation)
- Add a way to mark some ideas as favourite and have access to them
- Improve the general design of the app, I am thinking about giving a try to [Neumorphism design](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)

## Final words

Thanks for taking the time to read this document and I hope you liked the project. Happy coding!
