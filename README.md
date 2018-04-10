# Burger-Ific Burger Matic
Burger-Ific is a simple CRUD app that allows for the user to create burger names and add them to the list to be devoured. From that point the user can click the devour button next to the burger they want to eat and it moves the burger to the devoured area.
node, express, express-handlebars, and MySQL based app 


## LINK
[Burger-Ific](https://evening-earth-99598.herokuapp.com/ "Burger-Ific")

## INSTRUCTIONS FOR USING THE WEBSITE
  * Visit link above.
  * Add a burger to the burger list by usin gthe form and clicking the "Add Burger" button.
  * Click on the "Devour!" button to devour the burger and move it to the devoured list.

(https://github.com/Mark-Mikelonis/burger/tree/master/public/assets/img/burgerific.gif)


## INSTRUCTIONS FOR USING THE WEB APP

## DEPENDENCIES
  * If you plan on using the code for this app you will need the following dependencies.
    * express, express-handlebars, body-parser, and MySQL

## INSTALLATION   
  1. Clone the repo down from github by clicking the clone repo button and copying the link
  2. From the command line type the following command:
   `git clone <github clone link>` 
    this repo clone link is `git@github.com:Mark-Mikelonis/burger.git`
  3. cd into the newly cloned directory
  4. Initialize the app for npm. From the command line type the following command:
   `npm init` 
  5. Install all npm dependencies. From the command line type the following command:
   `npm install`
  6. Install and configure MySQL (https://www.mysql.com/) 
  7. Use the schema.sql and seeds.sql files to setup and populate the database. Be sure to have your MySQL username and password handy.
    * from the command line in the directory of the files type the following:
    `mysql -u <username> -p < schema.sql`
    * followed by `mysql -u <username> -p burgers_db < seeds.sql`
  8. Start your server. From the command line type the following command:
    `nodemon server.js`  
  9. Point your browser to `localhost:3033` and the app should launch.
