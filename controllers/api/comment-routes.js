const router = require("express").Router();

const { User, Post, Comment } = require("../../models");

 //get all comments
 router.get("/", (req, res) => {
    Comment.findAll({
        attributes: ["id", "comment_text", "user_id", "post_id"],
      }) 
        .then((dbCommentData) => {
          res.json(dbCommentData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 //get comment by id
 router.get("/:id", (req, res) => {
    Comment.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "comment_text", "user_id", "post_id"],
    })
        .then((dbCommentData) => {
          if (!dbCommentData) {
            res.status(404).json({ message: "No Comment found with this id" });
            return;
          }
          res.json(dbCommentData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
 });

 //add comment
 router.post("/", (req, res) => {
     Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
      })
        .then((dbCommentData) => {
          res.json(dbCommentData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err); //REST api needs status
        });
 });
 //update comment
 router.put("/", (req, res) => {
   res.send(`update comment`);
 });
 //remove comment
 router.delete("/:id", (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCommentData) => {
        if (!dbCommentData) {
          res.status(404).json({ message: "No Comment found with this id" });
          return;
        }
        res.json(dbCommentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
 });
 module.exports = router;