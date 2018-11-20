import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animal'
import LocationList from './locations/location'
import EmployeeList from './employees/employee'
import OwnersList from "./owners/owners"
import apiManager from '../modules/apiManager'
import AnimalDetail from './animals/AnimalDetail'

let kennelApi = new apiManager()


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

    kennelApi.getAll("animals")
      .then(animals => newState.animals = animals)
      .then(() => kennelApi.getAll("employees"))
      .then(employees => newState.employees = employees)
      .then(() => kennelApi.getAll("owners"))
      .then(owners => newState.owners = owners)
      .then(() => kennelApi.getAll("locations"))
      .then(locations => newState.locations = locations)
      .then(() => kennelApi.getAll("petOwnerRelationships"))
      .then(petOwnerRelationships => newState.petRelationships = petOwnerRelationships)
      .then(() => this.setState(newState))
  }

  delete = (resource, id) => {
    const newState = {}
    kennelApi.deleteOne(resource, id)
      .then(() => kennelApi.getAll(resource))
      .then(resourceName => newState[resource] = resourceName)
      .then(() => kennelApi.getAll("petOwnerRelationships"))
      .then(relationships => newState.petRelationships = relationships)
      .then(() => this.setState(newState))
  }



  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route  exact path="/animals" render={(props) => {
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
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />

      </React.Fragment>
    )
  }
}

