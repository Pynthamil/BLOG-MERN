const express = require('express')
const router = express.Router()

const Post = require("../models/postModel")

//READ or get all my posts
router.get("/mypost", (req, res, next) =>{
    Post.find({ creator: req.userData.userId}).then(post => {
        if(post) {
            res.status(200).json({
                message: "Posts fetched successfully",
                posts: post
            });
        }
    }).catch(e => {
        console.log(e)
    });
});

router.get('/:id', (req, res) =>{
    res.json({mssg: 'Get a single Blog.'})
})

//CREATE a New Post
router.post("", (req, res, next) =>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })

    post.save().
        then(post => {
            if(post){
                res.status(201).json({
                    message: "Post added successfully",
                    post: {
                        ...post,
                        id: post._id
                    }
                })
            }
        }).catch(e => {
            console.log(e)
        })
    
})

//Delete a post
router.delete('/:id', (req, res, next) =>{
    Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
        
    )
})

//Update or edit a new post
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'Edit a Blog.'})
})

module.exports = router