# Goopter coding assignment 

##### Using React + Redux to implement following single page web app

## Basic Requirements
    1. Implement a login page to allow user login with username and password, once login, open a page to show the user info with: nick name, first name. 
    
    2. With a refresh button to reload the customer info with API call.
   
    3. Able to allow user able to update and save the first name, nick name.
   
    4. Use oauth 1.0a for API authentication.
   
### My Solutions:

    1. In the componenets folder, I made Login, Logout, PersonalPage, and UpdateForm as my component
    
    2. I use Redux in the back, and Thunk as Middleware
    
    3. In the actions folder, I defineded three actions types: Login (get token, key), GetUserInfo, and Post Data
    
    4. Using JQuery, Ajax, and OAuth to get API's information
    
## Additional Requirements: 

    1. The access token and access key will be invalidated if the login API is called again with the same
       email/password. i.e. same user login on another device, the previous token will be invalidated;
    
    2. Successful API call returns RC value 200; when the token is invalidated, API call will result in RC
       value 401. 
       
    3. After user login, close the web page, and reopen with the same URL will able to show the user
       info page with proper value;
       
    4. When the token is invalidated, refresh the page will show a toast message: “Invalid token”, then
       redirect to the login page;
       
    5. For the update user API call, if the request is not valid(e.g. incorrect field names), the RC error
       code is 400; if update is successful, RC value is 200; when token Is invalid, RC return 401;
       
    6. On the update user info page, if the request is invalid, show “Invalid input”; if the token is
       invalid, then show “invalid token”, and redirect to the login page;
       
    7. If you don’t have experience with oAuth 1.0a, please use Postman to test the required API using
       post or get.
       
    8. Provide source code and readme file for your code explanation, and instruction for how to do
       configuration and run it. Describe what problem you encountered for the test, and how you
       resolved it.
       
    9. Please count how much time you spend for the entire test and report in the response.
    
### My Solution (Error Handling Logic)

    1. I updated my script in the actions, which could store the token and key in the local memeories, once the timeout
       or user logout, the memoery will be cleared, so user could login if they suddently closed thier browers
    
    2. I updated my script in the actions, which contains handle error in different situations, for example, if the API 
       returned 400, 401, or some error code else, the user would get feedback in a dialogs.
       
    3. In the getDataActions and postDataActions, the script is declared when the API get error code, and give the response
       to the user.
       
    4. I have updated component in updateFrom, and LoginFrom, which could avoid user input error value such as special characters or empty
       value, for doing this, when the user input the invalid value in the textfields, the frontend would detect it and avoid 
       they destroy API
       
    5. Before I am doing this, I have no expereience on the OAuth and Ajax, but I learned it from thier websites.
    
    6. For doing this, I estimatly spent 60 hours (learning and implementations), because I was not really familiar with React and 
       Redux, I believe I could spend less if I use Vue.js:). In this assignment, I learned a lot.
       
       
## How to run it

Before you run it, please make sure your have npm or yarn environment

### `yarn install` or `npm install`

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
