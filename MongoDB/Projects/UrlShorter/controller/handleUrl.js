const shortid = require('shortid');
const { urlModel } = require('../models/url');

async function handleUrl(req, res) {
   const shortID = shortid.generate();  // Ensure shortid is generated properly
   const redirectUrl = req.body.redirectUrl;

   // Basic URL validation


   try {
      await urlModel.create({ shortID, redirectUrl });
      return res.send(`
         <html>
           <head>
             <title>Success</title>
             <style>
               body {
                 font-family: 'Poppins', sans-serif;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 height: 100vh;
                 margin: 0;
                 background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
               }
               h1 {
                 color: #ffe53b;
                 background-color: rgba(0, 0, 0, 0.7);
                 padding: 30px;
                 border-radius: 15px;
                 text-align: center;
                 box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                 font-size: 2.5rem;
                 text-transform: uppercase;
                 letter-spacing: 2px;
                 margin: 0;
               }
               .container {
                 text-align: center;
                 padding: 20px;
                 animation: fadeIn 1s ease-in-out;
               }
               .back-button {
                 margin-top: 30px;
                 padding: 12px 25px;
                 background-color: #ffe53b;
                 color: #333;
                 border-radius: 50px;
                 font-size: 1.1rem;
                 font-weight: bold;
                 text-decoration: none;
                 transition: all 0.3s ease;
                 display: inline-block;
                 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
               }
               .back-button:hover {
                 background-color: #ffd700;
                 transform: translateY(-5px) scale(1.1);
               }
               /* Fade-in animation for the container */
               @keyframes fadeIn {
                 0% {
                   opacity: 0;
                   transform: translateY(20px);
                 }
                 100% {
                   opacity: 1;
                   transform: translateY(0);
                 }
               }
             </style>
           </head>
           <body>
             <div class="container">
               <h1>Url Added Successfully!</h1>
               <a href="/" class="back-button">Go Back</a>
             </div>
           </body>
         </html>
       `);
   }  catch (error) {
         res.status(500).send(`
           <!DOCTYPE html>
           <html lang="en">
             <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>Server Error</title>
               <style>
                 body {
                   font-family: "Poppins", sans-serif;
                   background: linear-gradient(135deg, #e74c3c, #c0392b);
                   color: white;
                   text-align: center;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   height: 100vh;
                   margin: 0;
                   padding: 0;
                 }
     
                 .error-container {
                   background: rgba(255, 255, 255, 0.1);
                   padding: 40px;
                   border-radius: 15px;
                   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
                   backdrop-filter: blur(10px);
                   text-align: center;
                   width: 90%;
                   max-width: 500px;
                 }
     
                 h1 {
                   font-size: 3rem;
                   color: #ffe53b;
                   text-transform: uppercase;
                   letter-spacing: 3px;
                   margin-bottom: 20px;
                 }
     
                 p {
                   font-size: 1.2rem;
                   color: white;
                   margin-bottom: 20px;
                 }
     
                 .cta-button {
                   padding: 12px 25px;
                   background-color: #ffe53b;
                   color: #333;
                   font-size: 1.1rem;
                   font-weight: bold;
                   border: none;
                   border-radius: 50px;
                   cursor: pointer;
                   transition: all 0.3s ease;
                   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                   text-decoration: none;
                 }
     
                 .cta-button:hover {
                   background-color: #ffd700;
                   transform: translateY(-5px) scale(1.05);
                   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                 }
               </style>
             </head>
             <body>
               <div class="error-container">
                 <h1>URL already Exist!</h1>
                 <p>Oops! Something went wrong on the server.</p>
                 
                 <a href="/" class="cta-button">Go Back to Home</a>
               </div>
             </body>
           </html>
         `);
       }
   }




module.exports = { handleUrl }