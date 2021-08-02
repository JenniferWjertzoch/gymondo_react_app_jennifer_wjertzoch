import React, { useState, useEffect} from 'react';

import WorkoutList from './WorkoutList';
import Pagination from './Pagination';

import StyledNavigation from './styled/styledNavigation';

function WorkoutListPage() {

  const [allWorkouts, setAllWorkouts] = useState([]);
  const [numberOfPages, setNumberofPages] = useState(1);

  // query params
  const [category, setCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [startDate, setStartDate] = useState(null);


  const getWorkouts = async () => {

    let params ={page: currentPage}
    if(category){
        params = {
            ...params,
            category
        }
    }

    if(startDate){
        params = {
            ...params,
            startDate
        }
    }

    const queryParams =  new URLSearchParams(params)
    const res = await fetch(`http://localhost:3030/workouts?${queryParams}`);
    const data = await res.json();
    setAllWorkouts(data)
    
    setNumberofPages(Math.ceil(data.length / 10))
  }

  // // when current page changes --> the fetch will also happen
  useEffect(() => {
    getWorkouts()
  }, [currentPage,category,startDate]);

  // update category
  function onCategoryChange(event){
    event.preventDefault()
    if(event.target.value === "all"){
        setCategory(null)
    }else{
        setCategory(event.target.value)
    }
  }

  // update date
  function onDateChange(event){
    event.preventDefault()
    setStartDate(event.target.value)
  }

  return (
          <div>
              <StyledNavigation>
                    <div className="select">
                        <select onChange={(e) => onDateChange(e)}>
                            <option selected disabled>Choose a start date</option>
                            <option value="2021-01-01">January</option>
                            <option value="2021-02-01">February</option>
                            <option value="2021-03-01">March</option>
                            <option value="2021-04-01">April</option>
                            <option value="2021-05-01">Mai</option>
                            <option value="2021-06-01">June</option>
                            <option value="2021-07-01">July</option>
                            <option value="2021-08-01">August</option>
                            <option value="2021-09-01">September</option>
                            <option value="2021-10-01">October</option>
                            <option value="2021-11-01">November</option>
                            <option value="2021-12-01">December</option>
                        </select>
                    </div>
                    <div className="select">
                        <select onChange={(e) => onCategoryChange(e)}>
                            <option selected disabled>Choose a category</option>
                            <option onvalue="1">c1</option>
                            <option onvalue="2">c2</option>
                            <option value="3">c3</option>
                            <option value="4">c4</option>
                            <option value="5">c5</option>
                            <option value="6">c6</option>
                            <option value="7">c7</option>
                            <option value="all">all</option>
                        </select>
                    </div>
                </StyledNavigation>
            <WorkoutList allWorkouts={allWorkouts}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages}/>
          </div>
  );
}

export default WorkoutListPage;
