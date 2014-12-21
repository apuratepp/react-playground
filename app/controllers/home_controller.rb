class HomeController < ApplicationController
  def index
    render locals: locals
  end

  private

  def locals
    {
      products: Product.all.map { |product| product.to_json(root: true) } ,
      productForm: {
        action: new_product_path
      }
    }
  end
end
