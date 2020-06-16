class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: Product.all
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)

    if product.save
      render json: product
    else
      render json: products.errors, status: 422
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @products.errors, status: 422
    end
  end

  def destroy
    render json: @product.destroy
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :department)
  end
end
