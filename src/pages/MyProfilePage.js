import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserImages from '../containers/UserImages'
import { Button } from 'reactstrap'

const MyProfilePage = () =>{

    const [user, setUser] =useState({})

    useEffect(() =>{
        axios.get("https://insta.nextacademy.com/api/v1/users/me",
        {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(result =>{
            console.log(result)
            setUser(result.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    console.log(user.id)
    return (
        <>
            <div className ="jumbotron">
                <h1>@{user.username}</h1>
            </div>
            <Button>Upload Images</Button>
            <UserImages userId={user.id}/>
        </>
    
    
    )
}

export default MyProfilePage
