/* global google */

var React = require('react'),
    Geosuggest = require('../../src/Geosuggest');  // eslint-disable-line

var App = React.createClass({ // eslint-disable-line
  /**
   * Render the example app
   * @return {Function} React render function
   */
  render: function() {
    var fixtures = [
      {label: 'Home', location: {lat: 42.7033127, lng: -73.979681}, iconClass: 'fa fa-home'}
    ];

    return ( // eslint-disable-line
      <div>
        <Geosuggest
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20"
          defaultIconClass='fa fa-map-marker' />
      </div>
    );
  },

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
    console.log(suggest); // eslint-disable-line
  }
});

React.render(<App />, document.getElementById('app')); // eslint-disable-line
