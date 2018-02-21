
import React from 'react';
import Search from './components/Search.jsx'
import { Venue } from './components/Venue.jsx'
import 'whatwg-fetch';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      venues: []
    };

  }

  handleSubmit(query) {
    this.getVenues(query);
  }

  componentDidMount() {
    this.getVenues('Pubs');
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  }

  getVenues(query) {

    let setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    this.getLocation(function (latlong) {

      const params = {
        client_id: 'APNWQ15GEM0HUMNPBITXSL5EU1NPUG2C0BFNNGIQHV0FY40T',
        client_secret: '4TKW4FFXRWPQGYM52TY4NS4T44CBCPQ4GQ5NPXETV4D1PUIX',
        limit: 100,
        query: query,
        v: '20130619',
        ll: latlong
      };

      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json()).then(response => {
        setVenueState({venues: response.response.groups[0].items});
      });

    });

  }

  render() {

    var venueList = this.state.venues.map((item, i) =>
      <Venue key={i} name={item.venue.name}/> //Create a new "name attribute"
    );

  

    return (
      <div>
        <Search onSubmit={(value)=>this.handleSubmit(value)}/>
        <ul>
          {venueList}
        </ul>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));