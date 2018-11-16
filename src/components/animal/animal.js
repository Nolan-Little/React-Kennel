import React, { Component } from 'react';


export default class Animal extends Component {
  render(){
    return (
      <section className="animals">
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <h3>{animal.species}</h3>
              <h5>{animal.name}</h5>
            </div>
          )
        }
      </section>
    )
  }
}