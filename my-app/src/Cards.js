import logo from './image/logo.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function Cards() {

    let [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {

                // console.log(response.data.products);
                setdata(response.data.products)
                // setall(response.data.products)

                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <div className='header'>


            </div>     
        </>
    )
}

export default Cards;       