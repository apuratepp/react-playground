var Product = React.createClass({
  handlesDestroy: function(event) {
    event.preventDefault();

    this.props.handlesDeletion(event, this.props.product);
  },
  render: function() {
    return (
      <li>
        { this.props.product.name } / { this.props.product.price }&nbsp;
        <a href="#" onClick={ this.handlesDestroy }>Delete</a>
      </li>
    )
  }
});
