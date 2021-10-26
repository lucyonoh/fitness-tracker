const router = require("express").Router()
const db = require ("../models")


router.get("/api/workouts", function(req,res){
    db.Workout.find().then(function(data){
        res.json(data)
    })
} )
router.post("/api/workouts", function(req,res){
   db.Workout.create(req.body)
   .then(function(data){
       res.json(data)
   })
})

module.exports = router