import React, { Component } from 'react';


export default class Owner extends Component {
  render() {
    return (
      <section className="owners list">
        {
          this.props.owners.map(owner =>
            <div key = {owner.id}>
              <h5>{owner.name}</h5>
              <a href="#"
                onClick={() => this.props.delete( "owners", owner.id)}
                className="card-link">Delete</a>
            </div>
          )
        }
      </section>
    )
  }
}