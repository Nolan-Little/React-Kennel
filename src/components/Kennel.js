import React, { Component } from 'react'
import EmployeeList from './employee/employee'
import LocationList from './location/location'
import "./Kennel.css"

export default class Kennel extends Component {

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "298 Doge Blvd." }
  ]



  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </article>
    )
  }
}