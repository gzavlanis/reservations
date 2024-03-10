import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import { Container } from "react-bootstrap";

const API_KEY = "AIzaSyABER1JffMw2q9GXMwXG7oORlP_NjBsvOo";
let calendars = [
    { 
        calendarId: "hf72rr7li3mgem45ub5nmjek1g4g1e95@import.calendar.google.com",
        color: "red"
    },
    {
        calendarId: "mqldluekbn2dc32t4r2or96sne17gghl@import.calendar.google.com",
        color: "blue"
    },
];

let styles = {
    calendar: {
        borderWidth: "none"
    },

    today: css`color: red; border: 1px solid red;`
};

const language = 'EN';

export default class Chris extends React.Component {
    render() {
        return (
            <Container fluid>
                <Calendar 
                    apiKey = {API_KEY} 
                    calendars = {calendars}
                    styles = {styles}
                    language = {language}
                />
            </Container>
        );
    }
};