module Admin
  class ProductsController < ApplicationController
    def index
      render locals: locals
    end

    private

    def locals
      {
        productsList: {
          source: api_products_path,
          form: {
            action: api_products_path,
            csrf_param: request_forgery_protection_token,
            csrf_token: form_authenticity_token
          }
        }
      }
    end
  end
end
