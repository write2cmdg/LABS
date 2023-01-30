# 03.04.MongoDB-fullstack-review

Steps:

1. Structure - create the following files/folders:
- index.js
- .env
- controllers/
- database/
- models/
- public/
- routes/
- views/

2. Initiate node project
- Open terminal
- navigate to the root folder (the ls command should show the structure)
- use command `npm init -y`

3. Test that the server can run
- In terminal, use command `npm install express`
- Write on `index.js`:
- - Import Express
- - Create the `app` variable
- - Declare a port, and do `app.listen(PORT)`
- In terminal, use command `node index.js`

4. Create views for client to see, using EJS
- In terminal, use command `npm install ejs`
- Create `./views/index.ejs`
- Start with a boiler plate, and add a heading in the body to be seen
- Create `./routes/viewRouters/` and `./views/viewRouters/viewRouter.js`

- Write on `viewRouter.js`:
- - Import Express
- - Create `router` variable
- - Write a `router.get("/")` to respond with the ejs file
- - `module.exports = router`

- Write on `index.js`:
- - Import path
- - Write Middleware for:
- - - Setting the view engine to EJS
- - - Set the views to look at the `./views/`
- - - Use the `./public` folder for static files (CSS)

- - Import the router file
- - Use the base URL when using `viewsRouter.js`

- Run the server and TEST IT

5. Test basic connection to database
- Write on `.env` file, define MONGODB_URI with your database connection string
- - Open up Compass
- - connect to your cluster
- - Copy connection string from the `...` in the top left
- - Change the extension at the end to rename your database (`...mongodb.net/fullStack`)

- In terminal, `npm install mongoose dotenv`
- Create `./database/mongodb.js`:
- - Import mongoose
- - `require("dotenv").config()`
- - `mongoose.set('strictQuery', false);`
- - Create a connection function
- - Export the connection function

- On `index.js`:
- - Import `./database/mongodb.js`
- - Run the function in the callback of `app.listen()`

- Run the server and TEST IT

6. Set up a model, controller, and routes for a single collection

- Create `./models/pokemonModel.js`:
- - Import mongoose
- - Define a schema
- - Model the schema
- - Export the model

- Create `./controllers/pokemonController.js`:
- - Import the Model
- - Write a function that returns the entire collection
- - Export the controller functions

- Create `./routes/api/` folder
- Create `./routes/api/pokemonRouter.js`:
- - Import Express & create `router` variable
- - Import the appropriate controller
- - Write a GET method to extension `/allPokemon`
- - Export the router

- On `index.js`:
- - Import the `pokemonRouter.js`
- - Use URL extension `/api` for this router

- Create `./models/allPokemon.json` to insert the data via Compass

- Run the server, and TEST THE GET METHOD VIA POSTMAN

7. Create an EJS view for ALL pokemon

- Create `./views/allMons.ejs`:
- - Start with a boiler plate
- - Use EJS `forEach()` to loop over data and generate elements for each property in the `pokemons` collection:
- - - PokedexNo - h1
- - - Name - h2
- - - Type - h3
- - - Moves - ul > forEach(li)

- Create `./controllers/api/` and move the `pokemonController.js` into it (update the import on `./routes/api/pokemonRouter.js`)
- Create `./controllers/view/`

- Create `./controllers/view/viewController.js`:
- - Import the pokemonModel
- - Define the async function `renderAllPokemon`
- - Export the function

- On `./routes/viewRouters/viewRouter.js`:
- - Import the viewController
- - Write a GET method for URL extension `/allMons`, use the `renderAllPokemon` as the callback

- Run server and TEST IT

8. Create a back-end route for ONE pokemon using dynamic parameters

- On `./controllers/api/pokemonController.js`:
- - Define function `getOnePokemon`
- - Export `getOnePokemon`

- On `./routes/api/pokemonRouter.js`:
- - Import `getOnePokemon`
- - Write a GET method for URL extension `/onePokemon/:name`, use the `getOnePokemon` as the callback


9. Create a front-end view for ONE pokemon using dynamic parameters

- Create `./views/oneMon.ejs`:
- - PokedexNo - h1
- - Name - h2
- - Type - h3
- - Moves - ul > forEach(li)

- On `./controllers/view/viewController.js`:
- - Define function `renderOnePokemonByName`
- - Export `renderOnePokemonByName`

- On `./routes/viewRouters/viewRouter.js`:
- - Import `renderOnePokemonByName`
- - Write a GET method for URL extension `/oneMon/:name`, use the `renderOnePokemonByName` as the callback

- On `./views/allMons.ejs`:
- - Wrap the names in an a tag, using `/oneMon/<%=mon.Name%>` as the href

10. Create a back-end route for CREATE one pokemon

- On `./controllers/api/pokemonController.js`:
- - Define function `createOnePokemon`
- - Export `createOnePokemon`

- On `./routes/api/pokemonRouter.js`:
- - Import `createOnePokemon`
- - Write a POST method for URL extension `/createOnePokemon`

11. Create a front-end view for CREATE one pokemon

- Create `./views/createMon.ejs`
- - Uses a form to collect what would normally be the `req.body`
- - Set up the form to make a POST request to URL `localhost:3000/api/createOnePokemon`

- On `./routes/viewRouters/viewRouter.js`:
- - Write a GET method for URL extension `/createOneMon` to render the view

- On `./controllers/view/viewController.js`:
- - Define function `renderCreatePokemonForm` to render the view only
- - Export `renderCreatePokemonForm`

- TEST IT, MAKE SURE THE VIEW SHOWS

12. Connect back-end to receive front-end form data to CREATE one pokemon

- On `./controllers/api/pokemonController.js`:
- - Edit function `createOnePokemon` to accept form data
- - Parse the Moves list to be an array instead of a string
- - Redirect to `localhost:3000/oneMon/:name`

13. Create a back-end route to DELETE one pokemon

- On `./controllers/api/pokemonController.js`:
- - Define function `deleteOnePokemon`
- - Export `deleteOnePokemon`

- On `./routes/api/pokemonRouter.js`:
- - Import `deleteOnePokemon`
- - Write DELETE method for URL extension `/api/deleteOnePokemon/:name`

14. Create a front-end button to DELETE one pokemon from the database

- On `./views/oneMon.ejs`:
- - Make a Delete button on the bottom of the page. It should send to the backend delete method via the form's action

15. Connect the back-end to respond to front-end request appropriately

- In Terminal:
- - Use command `npm install method-override`

- On `index.js`:
- - Import Method Override at the top
- - Use the middleware as such: `app.use(methodOverride('_method'));`

- On `./views/oneMon.ejs`
- - Use `?_method=DELETE` at the end of the form's action attribute
- - Use `name="_method"` inside the delete button

- On `./controllers/api/pokemonController.js`:
- - Redirect client to the `/allMons` URL extension