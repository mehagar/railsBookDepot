class StoreController < ApplicationController
  skip_before_action :authorize
  include CurrentCart
  before_action :set_cart
  def index
    redirect_to store_index_url(locale: params[:set_locale]) if params[:set_locale]

    @products = Product.order(:title)
    if session[:counter].nil?
      session[:counter] = 0
    else
      session[:counter] += 1
    end

    @visit_count = session[:counter]
  end
end
