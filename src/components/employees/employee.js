import React, { Component } from 'react';

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
        {
          this.props.employees.map(employee =>
            <div key={employee.id}>
              {employee.name}
              <a href="#"
                onClick={() => this.props.delete(employee.id, "employees")}
                className="card-link">Delete</a>
            </div>
          )
        }
      </section>
    );
  }
}