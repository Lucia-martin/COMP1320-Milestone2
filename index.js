const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require('fs');

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});
// this wil be called when server is first ran

app.get("/homepage", (req, res) => {
  res.render("homepage")
})

const readFileProm = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject("error reading file")
      } else {
        resolve(data);
      }
    })
  })
}

app.post("/create", (req, res) => {
  // console.log(req.body) //user.id = Math.floor(Math.random() * 600) + 1; needed because if you look at index.js there's app.get("/people/:id",
  const user = req.body;
  // let userID = 
  user["id"] = ((Math.random() * 600) + 1).toFixed(7);
  // let favBooks = 
  user["favouriteBooks"] = user.favouriteBooks.split(", ");
  const userFinal = JSON.stringify(user, null, 2);

  readFileProm("./database.json")
    .then(console.log("it's been read!")) /*at this moment the read data is a string, need to make it into object to push new data into it*/
    .then((data) => JSON.parse(data))
    .then((data) => {
      data.users.push(user)
      return data;
    })
    .then((data) => JSON.stringify(data, null, 2))
    //  .then((data)=>console.log(data))
    .then((data) => fs.writeFile("database.json", data, err => console.log(err)))
    .then(() => res.redirect(`/people/${user.id}`))
    .catch(err => console.log("theres an error" + err))
})

//users.favouriteBooks.forEach( book => {})
// res.redirect("/homepage")

app.get("/people/:id", (req, res) => {
  const id = req.params.id;
  readFileProm("database.json")
    .then((data) => JSON.parse(data).users) //returns the array, how we access the users array
    .then((listOfUsers) => listOfUsers.find(user => user.id == id)) 
    // .then((userReturn) => console.log(userReturn))//return the value that passes conditional
    .then(user => res.render(`homepage`, { users: user })) 
  .catch((err) => console.log("there is an error in people/id " + err))
  //
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});


