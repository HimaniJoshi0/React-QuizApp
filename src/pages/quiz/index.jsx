import React from 'react'
import { useEffect } from 'react'
import { apiRequest } from '../../api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Quiz = () => {

    const [allQuizz , setAllQuizz] = useState([])
     const navigate = useNavigate();

    console.log("allQuizz",allQuizz)

     const fetchData = async () => {
      try {
        const resp = await apiRequest({
                method: 'GET',
                path: 'api/quizz',
                });

        setAllQuizz(resp.data);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };
  
    useEffect(() => {
    fetchData();
  }, []);

  const handleQuizClick =async (id)=>{
       navigate(`/quiz/${id}`);
  }

  const renderQuizList = (item,index) =>{
    return(
        <div key={index} onClick={()=>handleQuizClick(item.id)}>
        <p>{item.description}</p>
        </div>
    )
  }


  return (
    <div>
        {allQuizz.length?
        allQuizz.map(renderQuizList): ""}
    </div>
  )
}

export default Quiz