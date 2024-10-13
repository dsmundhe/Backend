const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs');

// Middle ware for access data
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// data form mockaroo.com
let users = require('./data.json');

app.get('/users', (req, res) => {
    return res.send(users)
})
app.get('/', (req, res) => {
    const html = `
    <ul>
    ${users.map((val) => {
        return `<li>${val.first_name} ${val.email}</li>`
    }).join(" ")}
    </ul>
    `
    res.send(html)
})
// send data in SSR server side rendering



// all data for hybrid application
app.get('/api/users', (req, res) => {
    return res.json(users)
})


// user get by id
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
})


//post method
app.post('/api/user', (req, res) => {
    const data = req.body;
    users.push(data)
    fs.writeFile('./data.json', JSON.stringify(users), (err, data) => {
        if (!err) {
            res.json({ user: "created!" });
        }
        else {
            res.json({ user: "Not created!" })
        }
    })

    console.log(data)

})


// delete method

app.delete('/api/user', (req, res) => {
    let id = req.body.id;
    users = users.filter((val) => val.id !== id);
    fs.writeFile('./data.json', JSON.stringify(users), (err, data) => {
        if (err) {
            res.json({ status: "Could not delete!" })
        } else {
            res.json({ status: "Deleted!" })
        }
    })
})
// same for put, patch and delete methods




//put method


app.put('/api/user/:id', (req, res) => {
    const id = req.params.id;
    const name = "Dipak Mundhe";
    const user = users.find((val) => {
        return val.id == id
    });
    user.first_name = name;
    fs.writeFile('./data.json', JSON.stringify(users), (err, data) => {
        if (err) {
            res.json({ status: "Could not modify!" })
        } else {
            res.json({ status: 'Modify Successful!' })
        }
    })

})


// patch method

app.patch('/api/user/:id', (req, res) => {
    const id = req.params.id;
    const name = "Dipak Mundhe";
    const user = users.find((val) => {
        return val.id == id
    });
    user.first_name = name;
    fs.writeFile('./data.json', JSON.stringify(users), (err, data) => {
        if (err) {
            res.json({ status: "Could not modify!" })
        } else {
            res.json({ status: 'Modify Successful!' })
        }
    })
})

// for 404 error
app.get('*', (req, res) => {
    res.send('404 error data not found....');
})

app.listen(PORT, () => console.log("server started......"));