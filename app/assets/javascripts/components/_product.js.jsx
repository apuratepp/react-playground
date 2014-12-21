var Product = React.createClass({
  render: function() {
    return (
      <div>
        <h4>{ this.props.product.name }</h4>
        <h5>{ this.props.product.price }</h5>
      </div>
    )
  }
});
