import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './slice';
import { Table } from 'antd';

function JObs() {
    const dispatch = useDispatch() ;
    const jobs   =   useSelector((state)=>{ return state.jobs.jobs}) ;
    useEffect(()=>{
         dispatch(actions.fetchJobs()) ;
    },[dispatch])
    console.log('jobs',jobs)

    const column  =[{
        key  :  '' ,
        jobRole :""  ,
        jobTitle  : ''
    }]

  return (
    <div><Table  /></div>
  )
}

export default JObs