import { useState, useEffect } from "react";
import moment from "moment";
import {
    useParams,
    Link
} from "react-router-dom";
import styled from "styled-components";

import StyledWorkoutDetail from "./styled/styledWorkoutDetail";


function WorkoutDetailPage (){
    const [workout, setWorkout] = useState({});
    const convertTimestamp = parseInt(workout.startDate)

    let { id } = useParams();

    async function getWorkout(){
        const res = await fetch(`http://localhost:3030/workouts/${id}`);
        const data = await res.json();

        setWorkout(data[0])
    }

    useEffect(() => {
        getWorkout()
      }, []);

    return (
        <div>
            <Container>
                <StyledWorkoutDetail>
                    <h1>{workout.name}</h1>
                    <p>{workout.description}</p>
                    <p>{moment(convertTimestamp).format('LLL')}</p>
                    <p>{workout.category}</p>
                    <Link to="/"><button>Go Back</button></Link>
                </StyledWorkoutDetail>
            </Container>
        </div>
    )
}

export default WorkoutDetailPage;

const Container = styled.div`
    margin: 0.5rem;
    @media (min-width: 992px) {
        display: flex;
        justify-content: center;
        margin: 3.74rem;
    }
`