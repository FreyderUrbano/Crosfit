const { v4: uuid } = require('uuid');
const workout = require('../database/workOut');



const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};
const getOneWorkout = () => {
    return;
};
const createNewWorut = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }
    const createdWorkout = workout.createNewWorut(workoutToInsert);
};

const updateOneWorkout = () => {
    return;
};
const deleteOneWorkout = () => {
    return;
};
module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorut,
    updateOneWorkout,
    deleteOneWorkout,
}