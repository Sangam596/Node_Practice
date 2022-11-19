const express = require('express');
const router = express.Router();
const isValid=require('../validators/isValid')

const genres = [
    {id:1,name:'Action'},
    {id:2,name:'Adventure'},
    {id:3,name:'Romantic'}
]
router.get('/',(req,res)=>{
res.send(genres);
})
router.get('/:id',(req,res)=>{
    const genre = genres.find(genre=> genre.id===parseInt(req.params.id))
    if(!genre) return res.status(404).send(`Genre with given id ${req.params.id} is not found`);
    return res.status(200).send(genre);

})
router.post('/',async (req,res)=>{
    const { error } = await isValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newGenre = { id:genres.length+1,name:req.body.name}
    genres.push(newGenre);
    return res.status(201).send(newGenre);

})
router.put('/:id',async (req,res)=>{
    const genre = genres.find(genre=> genre.id===parseInt(req.params.id))
    if(!genre) return res.status(404).send(`Genre with given id ${req.params.id} is not found`);

    const { error } = await isValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name=req.body.name;
    return res.status(200).send(genre);



})
router.delete('/:id',(req,res)=>{
    const genre = genres.find(genre=> genre.id===parseInt(req.params.id))
    if(!genre) return res.status(404).send(`Genre with given id ${req.params.id} is not found`);

    genres.splice(genres.indexOf(genre),1);
    return res.status(204);


})


module.exports=router;