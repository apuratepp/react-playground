class HomeController < ApplicationController
  def index
    render locals: locals
  end

  private

  def locals
    {
      productsList: {
        source: products_path,
        form: {
          action: products_path,
          csrf_param: request_forgery_protection_token,
          csrf_token: form_authenticity_token
        }
      }
    }
  end
end
