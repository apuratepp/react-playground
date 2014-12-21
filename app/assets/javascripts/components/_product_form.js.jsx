var ProductForm = React.createClass({
  handlesSubmit: function(event) {
    event.preventDefault();

    debugger;

  },
  render: function() {

    debugger;

    return (
      <form action={ this.props.action } onSubmit={ this.handlesSubmit } method="post">
        <p><input ref="author" name="product[name]" placeholder="Name" /></p>
        <p><input ref="author" name="product[price]" placeholder="Price" /></p>
        <p><button type="submit">Add Product</button></p>
      </form>
    )
  }
});
