const express = require('express');
const router = express.Router();
const isValid = require('../validators/isValid');

const courses = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'TypeScript', }
]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    // req.params.id will be coming as string, So ween to parse it if we are comparing with a number 
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);
    return res.status(200).send(course);
})

router.post('/', async (req, res) => {
    const { error } = await isValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newCourse = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(newCourse);
    return res.send(newCourse);
})


router.put('/:id', async (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);

    const { error } = await isValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    return res.send(course);

})


router.delete('/:id', async (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);
    courses.splice(courses.indexOf(course), 1)
    return res.send(course);


})


module.exports = router;