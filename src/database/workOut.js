const DB = require('./db.json');
const { saveToDataBase } = require("./utils")

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorut = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((
        (workout) => workout.name === newWorkout.name) > -1
    );

    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout)
    saveToDataBase(DB);
    return newWorkout;
};
module.exports = { getAllWorkouts, createNewWorut };

