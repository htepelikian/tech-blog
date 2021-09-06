const router = require("express").Router();

const { User, Post, Comment } = require("../../models");

 //get all the posts
 router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "body", "user_id"],
        include: [
            {
              model: Comment,
              as: "comments",
              attributes: ["id", "comment_text", "user_id"],
            },
          ],
      })
        .then((dbPostData) => {
          res.json(dbPostData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 //get post by id
 router.get("/:id", (req, res) => {
    Post.findOne(
        {
          where: {
            id: req.params.id,
          },
        },
        {
          attributes: ["id", "title", "body", "user_id"], //remove password in the futrue
        }
      ) //include the posts and comments of this user
        .then((dbPostData) => {
          if (!dbPostData) {
            res.status(404).json({ message: "No Post found with this id" });
            return;
          }
          res.json(dbPostData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });

 });

 //add post
 router.post("/", (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
      })
        .then((dbPostData) => {
          res.json(dbPostData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err); //REST api needs status
        });

 });
 //update post

 });
 //remove post
 router.delete("/:id", (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No Post found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
 });
 module.exports = router;