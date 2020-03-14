const router = require('express').Router();
let ProjectModel = require('../models/project.model');

router.route('/').get((req, res) => {
    ProjectModel.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res)=>{
    const projName = req.body.projName;
    const description = req.body.description;
    const members = req.body.members;
    const startdate = req.body.startdate;
    const finishdate = req.body.finishdate;

    const newProject = new ProjectModel({
        projName,
        description,
        members,
        startdate,
        finishdate
    })
    newProject.save()
    .then(()=> res.json('New Project added'))
    .catch(err => res.status(400).json('Error: ' + err));
})