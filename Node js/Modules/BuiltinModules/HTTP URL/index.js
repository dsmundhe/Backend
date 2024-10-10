// require http
const http = require('http');

// require url
const url = require('url');


const myServer = http.createServer((req, res) => {
    console.log('server created....');

    // url.parse(request url access , query seprate true or false)
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    //to check method type
    console.log(req.method)

    // url with an query
    console.log(myUrl.query);

    // routing on the path
    switch (myUrl.pathname) {
        case '/':
            if (req.method === 'GET') {
                // Home Page with basic styling
                // here we are passing html as response for perticular url
                res.end(`
                    <html>
                        <head>
                            <style>
                                body { 
                                    background-color: #f0f8ff;
                                    font-family: Arial, sans-serif; 
                                    text-align: center;
                                    padding: 50px;
                                }
                                h1 { color: #333; font-size: 2.5rem; }
                                p { color: #666; font-size: 1.2rem; }
                                a { color: #008cba; text-decoration: none; }
                                a:hover { color: #005f5f; }
                            </style>
                        </head>
                        <body>
                            <h1>Home Page!</h1>
                            <p>Welcome to our site. Feel free to explore.</p>
                            <p><a href="/about">About Us</a> | <a href="/contact">Contact Us</a> | <a href="/login">Login</a></p>
                        </body>
                    </html>
                `);
            } else {
                res.end('Failed!');
            }
            break;

        case '/about':
            res.end(`
                <html>
                    <head>
                        <style>
                            body { 
                                background-color: #ffebcd;
                                font-family: Arial, sans-serif;
                                text-align: center;
                                padding: 50px;
                            }
                            h1 { color: #444; font-size: 2.5rem; }
                            p { color: #555; font-size: 1.2rem; }
                            a { color: #008cba; text-decoration: none; }
                            a:hover { color: #005f5f; }
                        </style>
                    </head>
                    <body>
                        <h1>About Us</h1>
                        <p>Learn more about what we do.</p>
                        <p><a href="/">Home</a> | <a href="/contact">Contact Us</a> | <a href="/login">Login</a></p>
                    </body>
                </html>
            `);
            break;

        case '/contact':
            res.end(`
                <html>
                    <head>
                        <style>
                            body { 
                                background-color: #f5fffa;
                                font-family: Arial, sans-serif; 
                                text-align: center;
                                padding: 50px;
                            }
                            h1 { color: #222; font-size: 2.5rem; }
                            p { color: #666; font-size: 1.2rem; }
                            a { color: #008cba; text-decoration: none; }
                            a:hover { color: #005f5f; }
                        </style>
                    </head>
                    <body>
                        <h1>Contact Us</h1>
                        <p>We would love to hear from you!</p>
                        <p><a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/login">Login</a></p>
                    </body>
                </html>
            `);
            break;

        case '/login':
            res.end(`
                <html>
                    <head>
                        <style>
                            body { 
                                background-color: #e6e6fa;
                                font-family: Arial, sans-serif; 
                                text-align: center;
                                padding: 50px;
                            }
                            h1 { color: #333; font-size: 2.5rem; }
                            p { color: #444; font-size: 1.2rem; }
                            input { padding: 10px; margin: 10px; }
                            a { color: #008cba; text-decoration: none; }
                            a:hover { color: #005f5f; }
                        </style>
                    </head>
                    <body>
                        <h1>Login</h1>
                        <p>Please enter your login details below.</p>
                        <form>
                            <input type="text" placeholder="Username"/><br/>
                            <input type="password" placeholder="Password"/><br/>
                            <button type="submit">Login</button>
                        </form>
                        <p><a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a></p>
                    </body>
                </html>
            `);
            break;

        default:
            res.end(`
                <html>
                    <head>
                        <style>
                            body { 
                                background-color: #ffcccb;
                                font-family: Arial, sans-serif; 
                                text-align: center;
                                padding: 50px;
                            }
                            h1 { color: #ff0000; font-size: 2.5rem; }
                            p { color: #333; font-size: 1.2rem; }
                            a { color: #008cba; text-decoration: none; }
                            a:hover { color: #005f5f; }
                        </style>
                    </head>
                    <body>
                        <h1>404 Error</h1>
                        <p>Page not found!</p>
                        <p><a href="/">Go back to Home</a></p>
                    </body>
                </html>
            `);
            break;
    }
});



// listen server on port 4000;
myServer.listen(4000, () => {
    console.log('server started.....')
})