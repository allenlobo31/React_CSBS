import React, { Component } from 'react';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], searchTerm: '', loading: false, error: null };
  }

  componentDidMount() { this.fetchData(); }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true, error: null });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.ok ? res.json() : Promise.reject("API Failed"))
      .then(data => {
        const filtered = data.filter(u => u.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
        this.setState({ users: filtered, loading: false });
      })
      .catch(err => this.setState({ error: err, loading: false }));
  };

  render() {
    const { users, searchTerm, loading, error } = this.state;
    return (
      <div className="max-w-md mx-auto p-6 mt-10 border">
        <h1 className="text-center font-bold mb-4">User List</h1>
        <div className="flex gap-2 mb-4">
          
          <input className="flex-1 border p-2 rounded" 
                 placeholder="Search..." 
                 value={searchTerm} 
                 onChange={e => this.setState({ searchTerm: e.target.value })} />

          <button onClick={this.fetchData} className=" px-4 border">Refresh</button>
        
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <ul className="divide-y">
          {users.map(u => <li key={u.id} className="py-2"><strong>{u.name}</strong> - {u.email}</li>)}
        </ul>
      </div>
    );
  }
}