import React, { Component } from 'react'
import { Link } from "react-router-dom"




export default class Animal extends Component {

  getOwnerName(animalId) {
    let ownerName = this.props.relationships
      .filter(relationship => relationship.animalId === animalId)
      .map(relationships => this.props.owners.find(owner => owner.id === relationships.ownerId).name)

    if (ownerName.length === 0) {
      ownerName = ["no one"]
    }
    return ownerName
  }

  render() {
    return (
      <section className="animals list">
        {
          this.props.animals.map(animal =>
            <div className="animal card list-item" key={animal.id}>
              <h3>Species: {animal.species}</h3>
              <h4>Owner(s): {this.getOwnerName(animal.id).join(", ")}</h4>
              <h5>Animal Name:{animal.name}</h5>
              <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
              <a href="#"
                onClick={() => this.props.delete("animals", animal.id,)}
                className="card-link">Delete</a>
            </div>
          )
        }
      </section>
    )
  }
}