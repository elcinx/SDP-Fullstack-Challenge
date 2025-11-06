module Api
  module V1
    class ProductsController < ApplicationController
      SAMPLE = [
        { id: 1, name: "Kahve Kupası", price: 120 },
        { id: 2, name: "Defter",      price: 75  }
      ]

      def index
        render json: SAMPLE, status: :ok
      end

      def create
        product = { 
            id: rand(1000..9999), 
            name: params[:name].to_s,
            price: params[:price].to_i 
        }   
        render json: product, status: :created
      end
    end
  end
end
