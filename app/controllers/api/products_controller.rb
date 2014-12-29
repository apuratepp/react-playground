module Api
  class ProductsController < ApplicationController
    respond_to :json

    def index
      respond_with :api, Product.all
    end

    def create
      product = Product.new(product_params)
      if product.save
        respond_with :api, product
      else
        head :unprocessable_entity
      end
    end

    def destroy
      product = Product.find(params[:id])
      product.destroy
      head :no_content
    end

    private

    def product_params
      params.require(:product).permit(:name, :price)
    end
  end
end
