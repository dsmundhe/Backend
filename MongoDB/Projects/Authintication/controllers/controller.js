const { User } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { getUser, setUser } = require('../auth/auth');

const signupController = async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
        await User.create({ name, email, password });
        // Successful signup response with HTML and CSS
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Signup Successful</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #89f7fe, #66a6ff);
                font-family: Arial, sans-serif;
              }

              .container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 40px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
              }

              h1 {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 20px;
              }

              p {
                font-size: 1.2em;
                color: #555;
              }

              a {
                display: block;
                margin-top: 20px;
                padding: 10px;
                background-color: #66a6ff;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: background-color 0.3s ease;
              }

              a:hover {
                background-color: #555;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Signup Successful!</h1>
              <p>Welcome, ${name}!</p>
              <a href="/login">Go to Login</a>
            </div>
          </body>
        </html>
        `);
    } else {
        // User already exists
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>User Exists</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #ff9a9e, #fad0c4);
                font-family: Arial, sans-serif;
              }

              .container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 40px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
              }

              h1 {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 20px;
              }

              p {
                font-size: 1.2em;
                color: #555;
              }

              a {
                display: block;
                margin-top: 20px;
                padding: 10px;
                background-color: #ff6f61;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: background-color 0.3s ease;
              }

              a:hover {
                background-color: #333;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>User Already Exists!</h1>
              <p>Please try logging in.</p>
              <a href="/login">Go to Login</a>
            </div>
          </body>
        </html>
        `);
    }
}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const sessionID = uuidv4();

    const user = await User.findOne({ email, password });

    if (user) {
        await setUser(sessionID, user);
        res.cookie('uid', sessionID);
        // Successful login response with HTML and CSS
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login Successful</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #83a4d4, #b6fbff);
                font-family: Arial, sans-serif;
              }

              .container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 40px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
              }

              h1 {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 20px;
              }

              p {
                font-size: 1.2em;
                color: #555;
              }

              a {
                display: block;
                margin-top: 20px;
                padding: 10px;
                background-color: #83a4d4;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: background-color 0.3s ease;
              }

              a:hover {
                background-color: #555;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Login Successful!</h1>
              <p>Welcome back!</p>
              <a href="/">Go to Home</a>
            </div>
          </body>
        </html>
        `);
    } else {
        // Incorrect login response with HTML and CSS
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login Failed</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #ff5f6d, #ffc371);
                font-family: Arial, sans-serif;
              }

              .container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 40px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
              }

              h1 {
                font-size: 2.2em;
                color: #333;
                margin-bottom: 20px;
              }

              p {
                font-size: 1.2em;
                color: #555;
              }

              a {
                display: block;
                margin-top: 20px;
                padding: 10px;
                background-color: #ff5f6d;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: background-color 0.3s ease;
              }

              a:hover {
                background-color: #555;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Login Failed!</h1>
              <p>Check your email or password and try again.</p>
              <a href="/login">Try Again</a>
            </div>
          </body>
        </html>
        `);
    }
}

module.exports = { signupController, loginController };
