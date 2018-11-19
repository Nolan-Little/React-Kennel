import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animal'
import LocationList from './locations/location'
import EmployeeList from './employees/employee'
import OwnersList from "./owners/owners"


export default class ApplicationViews extends Component {

  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: [],
    petRelationships: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/owners")
        .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/petOwnerRelationships")
        .then(r => r.json()))
      .then(petOwnerRelationships => newState.petRelationships = petOwnerRelationships)
      .then(() => this.setState(newState))
  }

  delete = (id, resource)  => {
    const newState = {}
    fetch(`http://localhost:5002/${resource}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/${resource}`))
      .then(e => e.json())
      .then(resourceName => newState[resource] = resourceName)
      .then(() => fetch(`http://localhost:5002/petOwnerRelationships`))
      .then(e => e.json())
      .then(relationships => newState.petRelationships = relationships)
      .then(() => this.setState(newState))
  }



  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList
            animals={this.state.animals}
            owners={this.state.owners}
            relationships={this.state.petRelationships}
            delete={this.delete} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList
          employees={this.state.employees}
          delete={this.delete}
          />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners}
          delete={this.delete}
          />
        }} />
      </React.Fragment>
    )
  }
}

