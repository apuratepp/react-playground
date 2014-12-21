var ProductsList = React.createClass({
  getInitialState: function() {
    return { products: [] };
  },
  componentDidMount: function() {
    this.fetchProducts();
  },
  fetchProducts: function() {
    var component = this;

    $.getJSON(this.props.source, function(result){
      component.setState({ products: result });
    });
  },
  deleteProduct: function(event, product) {
    var component = this;

    $.ajax({
      url: this.props.source + "/" + product.id,
      type: "DELETE",
      dataType: "json",
    }).done(function(){
      component.fetchProducts();
    });

  },
  render: function() {
    var component = this;

    var products = this.state.products.map(function(product) {
      return <Product product={ product } handlesDeletion={ component.deleteProduct } refreshProducts={ component.fetchProducts } />
    });

    return (
      <div>
        <ProductForm form={ this.props.form} refreshProducts={ this.fetchProducts } />
        <ul>
          { products }
        </ul>
      </div>
    )
  }
});
