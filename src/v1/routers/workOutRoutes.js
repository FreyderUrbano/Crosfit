const express = require('express');
const router = express.Router();
const workoutController = require("../../controllers/workOutController");

router
    .get('/', workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/", workoutController.createNewWorut)
    .patch("/:woroutId", workoutController.updateOneWorkout)
    .delete("/:woroutId", workoutController.deleteOneWorkout);

module.exports = router;