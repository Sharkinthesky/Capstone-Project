import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Header from '../Components/HeaderBooking';
import Bookings from '../Components/Bookings';

function BookingPage() {

    const navigate = useNavigate();

    const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}
    const submitAPI = function(formData) {
    return true;
    };

    const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    
    function updateTimes(date) {
        console.log(date);
        return fetchAPI(new Date());
    }
    function initializeTimes() {
        return fetchAPI(new Date());
    }
    
    function submitForm(data) {
        if (submitAPI(data)) {
            navigate('/confirmed');
        }
    }

    return(
        <>
        <Header></Header>
        <Bookings availableTimes={availableTimes} dispatch={ dispatch } submitForm={ submitForm }></Bookings>
        </>
    );
}

export default BookingPage;