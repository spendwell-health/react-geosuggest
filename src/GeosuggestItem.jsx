var React = require('react');

var GeosuggestItem = React.createClass({
  /**
   * Get the default props
   * @return {Object} The props
   */

  propTypes: {
    setMouseHoveredSuggest: React.PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      isActive: false,
      suggest: {
        label: '',
        iconClass: ''
      },
      onSuggestSelect: function() {}
    };
  },

  handleMouseEnter: function(e){
    var suggest = JSON.parse(e.target['getAttribute']('data-suggest'));
    this.props.setMouseHoveredSuggest(suggest);
  },

  handleMouseLeave: function(e){
    this.props.setMouseHoveredSuggest(null);
  },

  /**
   * Render the view
   * @return {Function} The React element to render
   */
  render: function() {
    return (// eslint-disable-line no-extra-parens
      <li className={this.getSuggestClasses()}
        data-suggest={JSON.stringify(this.props.suggest)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
          {this.props.suggest.label}
      </li>
    );
  },

  /**
   * The classes for the suggest item
   * @return {String} The classes
   */
  getSuggestClasses: function() {
    var classes = 'geosuggest-item';

    classes += this.props.isActive ? ' geosuggest-item--active' : '';
    classes += this.props.classDecorations ? ' ' + this.props.classDecorations : '';
    return classes;
  }
});

module.exports = GeosuggestItem;
