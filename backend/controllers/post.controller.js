const Post = require("../models/users.model.js");

exports.create = (req, res, next) => {
    const postObject = JSON.parse(req.body.message);
    //delete thingObject._id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Sauce enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};