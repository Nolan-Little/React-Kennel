import React, { Component } from 'react';




export default class Animal extends Component {

  getOwnerName(animalId) {
    let ownerName = this.props.relationships
      .filter(relationship => relationship.animalId === animalId)
      .map(relationships => this.props.owners.find(owner => owner.id === relationships.ownerId).name)

      if (ownerName.length === 0){
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
              <h3>{animal.species}</h3>
              <h4>{this.getOwnerName(animal.id).join(", ")}</h4>
              <h5>{animal.name}</h5>
            </div>
          )
        }
      </section>
    )
  }
}