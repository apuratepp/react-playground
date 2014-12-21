var ProductForm = React.createClass({
  handlesSubmit: function(event) {
    event.preventDefault();
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    var component = this;

    $.ajax({
      data: formData,
      url: this.props.form.action,
      type: "POST",
      dataType: "json",
      success: function( data ) {
        component.props.refreshProducts();
      }
    });
  },
  render: function() {
    return (
      <form ref="form" action={ this.props.form.action } onSubmit={ this.handlesSubmit } method="post">
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="name" name="product[name]" placeholder="Name" /></p>
        <p><input ref="price" name="product[price]" placeholder="Price" /></p>
        <p><button type="submit">Add Product</button></p>
      </form>
    )
  }
});
