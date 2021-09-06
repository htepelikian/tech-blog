const router = require("express").Router();

const { User, Post, Comment } = require("../models");
 const sequelize = require("../config/connection");

 //home route server homepage
 router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "body", "user_id"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["username"],
          },
          {
            model: Comment,
            as: "comments",
            attributes: ["id", "comment_text", "user_id"],
          },
        ],
      })
        .then((dbPostData) => {
          //serialize data
          if (!dbPostData) {
            res.status(404).json({ message: "No Posts Available" });
            return;
          }
          const posts = dbPostData.map((post) => post.get({ plain: true })); // serialize all the posts
          console.log(posts);
          res.render("home", { posts });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 router.get("/viewpost/:id", (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "body", "user_id"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username"],
        },
        {
          model: Comment,
          as: "comments",
          attributes: ["id", "comment_text", "user_id"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["username"],
            },
          ],
        },
      ],
    })
      .then((dbPostData) => {
        //serialize data
        if (!dbPostData) {
          res.status(404).json({ message: "No Posts Available" });
          return;
        }
        const post = dbPostData.get({ plain: true }); // serialize posts
        console.log(post);
        res.render("single-post", { post });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
 

 //serve up login page
 router.get("/login", (req, res) => {
    res.render("login");
  });
 
  //serve up dashboard
  router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
 

 module.exports = router;