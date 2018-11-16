import React, { Component } from 'react'
import EmployeeList from './employee/employee'
import LocationList from './location/location'
import AnimalList from './animal/animal'
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

  animalsFromAPI = [
    { id: 1, name: "Frank", species: "Dog" },
    { id: 2, name: "Scratchy", species: "Cat" },
    { id: 3, name: "Sneaky", species: "Ferret" },
    { id: 4, name: "Tubby", species: "Rabbit" },
    { id: 5, name: "Gordon", species: "Dog" }
  ]


  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals}/>
      </article>
    )
  }
}