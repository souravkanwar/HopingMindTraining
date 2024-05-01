import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function User_useEffect() {
    const [userData, setUserData] = useState()
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error Fetching data:', error);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {
                userData?.map((obj) => {
                    return (
                        <>
                            <h1>User ID:{obj.id}</h1>
                            <p>Title:{obj.title}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default User_useEffect