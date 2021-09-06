const router = require("express").Router();

const { User, Post, Comment } = require("../../models");

 //get all the users
 router.get("/", (req, res) => {
    User.findAll({
        attributes: ["id", "username", "email", "password"],
      }) 
        .then((dbUserData) => {
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 //get user by id
 router.get("/:id", (req, res) => {
    User.findOne(
        {
          where: {
            id: req.params.id,
          },
        },
        {
          attributes: ["id", "username", "email", "password"], 
        }
      ) 
        .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No User found with this id" });
            return;
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 //add user
 router.post("/", (req, res) => {
    User.create({
        //expects username, email, password
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
        .then((dbUserData) => {
          res.json(dbUserData);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
 });

 //update user
 router.put("/", (req, res) => {
   res.send(`update user`);
 });
 //update user
 router.delete("/:id", (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
 });
 module.exports = router;