import React from 'react'
import Calendar from '@ericz1803/react-google-calendar'
import { css } from '@emotion/react'
import { Container } from 'react-bootstrap'

const API_KEY = 'AIzaSyABER1JffMw2q9GXMwXG7oORlP_NjBsvOo'
let calendars = [
  {
    calendarId: '0qitim53klp7rab6lc9fvs7r81iln8hk@import.calendar.google.com',
    color: '#005777'
  },
  {
    calendarId: 'jet42vbrc2bie3jlf9hvqbr1ahilcuqu@import.calendar.google.com',
    color: '#005777'
  }
]

let styles = {
  calendar: {
    borderWidth: 'none'
  },

  today: css`
    color: blue;
    border: 1px solid blue;
  `
}

const language = 'EN'
const showFooter = false

export default class Afroditi extends React.Component {
  render() {
    return (
      <Container fluid>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} language={language} showFooter={showFooter}/>
      </Container>
    )
  }
}
