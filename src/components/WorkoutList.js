import React from 'react'
import moment from "moment";
import {
    Link
} from "react-router-dom";

import StyledWorkoutCard from './styled/styledWorkoutCard';

function WorkoutCard({ workout }) {
    const id = workout.id

    return <Link to={`/workouts/${id}`} style={{ textDecoration: 'none' }}>
        <StyledWorkoutCard>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <p>{moment(workout.startDate).format("LLL")}</p>
            <p className="workout-category">{workout.category}</p>
        </StyledWorkoutCard>
    </Link>
}

export default function WorkoutList({ allWorkouts }) {
    return (
        <div className="cards">
            {allWorkouts.map(workout => <WorkoutCard workout={workout} />)}
        </div>
    )
}
