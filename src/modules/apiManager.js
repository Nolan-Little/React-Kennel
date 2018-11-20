const remoteURL = "http://localhost:5002"

export default class apiManager {
  get(id, resource) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
  }
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json())
  }
  deleteOne(resource, id) {
    return fetch(`http://localhost:5002/${resource}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
  }
}