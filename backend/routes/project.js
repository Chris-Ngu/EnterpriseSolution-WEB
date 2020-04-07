const router = require('express').Router();
let Project = require('../models/project.model');

//retrieves all information about project
router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Creating project 
router.route('/add').post((req, res) => {
    const projName = req.body.projName;
    const description = req.body.description;
    const members = req.body.members;
    const startdate = req.body.startdate;
    const finishdate = req.body.finishdate;
    const createduser = req.body.createduser;

    const newProject = new Project({
        projName,
        description,
        members,
        startdate,
        finishdate,
        createduser
    });
    newProject.save()
        .then(() => res.json('New Project added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Adding thumbs up/down
router.route('/thumbs').post((req, res) => {
    if (req.body.approve.equals("up")) {
        Project.findOneAndUpdate({ _id: req.body._id }, { $inc: { up: 1 } }, { new: true })
            .then((data) => {
                if (data === null) {
                    console.log('Project not found')
                }
                console.log('Project upvote updated')
            })
    }
    else if (req.body.approve.equals("down")) {
        Project.findOneAndUpdate({ _id: req.body._id }, { $inc: { down: 1 } }, { new: true })
        .then((data) => {
            if (data === null) {
                console.log('Project not found')
            }
            console.log('Project downvote updated')
        })
    }
})

module.exports = router;