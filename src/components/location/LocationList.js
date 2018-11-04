import React, { Component } from 'react'
import "./LocationList.css";


export default class LocationList extends Component {
  render() {
    return (
      <div>
        <header>STUDENT KENNELS</header>
        <section class="address">
          <h4>Nashville North Location</h4>
          <h5>500 Puppy Way</h5>
          <h5>Nashville, TN 37207</h5>
          <h5>(615)-862-8600</h5>
        </section>
        <section class="address">
          <h4>Nashville South Location</h4>
          <h5>400 Dog Park</h5>
          <h5>Nashvill, TN 36892</h5>
          <h5>(615)-862-8600</h5>
        </section>
      </div>
    )
  }
}