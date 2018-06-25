# Contact Me Client

### A Contacts Management Web Application
ContactMe safely stores all of your contacts. The handy search feature will help you find any contact you have stored in seconds.

## Screenshot

![ContactMe](https://i.imgur.com/4akmdNq.png)

## Links

### Client URL
[Deployment](https://pedrotavarez.com/contact-me/)

### API URL
[Heroku Deployment](https://contact-me-rails.herokuapp.com/examples)

[GitHub Repo](https://github.com/ptavarez16/contact-me-rails)

## Development Process
It's been about a month since I messed with Ember, so as a refresher I decided to build a quick project.

I followed a pretty good schedule. Staying organzided, I was able to meet MVP within a day or two. I started off building the API in Rails, then moved on to the client.

Surprisingly this time around was much easier than my first ember project. Still, this will most likely be my last project in Ember. My next project using a front-end framework will be built in React.js!

## Wire Frames
[Landing Page](https://i.imgur.com/ewYMs5O.jpg)

[Authenticated Page](https://i.imgur.com/qqcWt4y.jpg)

## User Stories
- Authentication:
  - As a user, I should be able to:
    - Sign up
    - Log in

- Application:
  - Change password
  - Log out
  - As an authenticated user, I should be able to:
  - Create a contact
    - (First Name, Last Name, Job Title, Phone #and email)
  - Read contact(s)
  - Update contact(s)
  - Delete contact(s)
  - Search for a particular contact

## Technologies Used
- HTML
  - Hypertext Markup Language is the standard markup language for creating web pages and web applications.
  - Most of what the user see are html elements. Understanding how html works and what I used it for is key.
- Sass
  - Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
  - A cousin to CSS, SASS stands for Syntactically Awesome Style Sheets. It's a better way of organizing you code by modularizing it.
- Bootstrap
  - Bootstrap contains HTML nd CSS based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
  - I used bootstrap for modal templates and styling. Pretty clutch!
- Handlebars
  - Handlebars.js is a popular templating engine that is powerful yet simple to use.
  - With Handlebars, I was able to separate the generation of HTML from the rest of my JavaScript to write cleaner code.
- JavaScript
  - JavaScript is a high-level, interpreted programming language.
  - This is basically what most of my game's logic consisted of. I feel like I got a better understanding of using callbacks, and "this" really saved my butt for a vital function.
- Ember.js
  - Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.
- Ajax
  - Ajax is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications.
  - This was how I sent data over to my api!
