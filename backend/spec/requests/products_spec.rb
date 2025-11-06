require 'rails_helper'

RSpec.describe "Products API", type: :request do
  describe "GET /api/v1/products" do
    it "200 döner ve JSON içerir" do
      get "/api/v1/products"
      expect(response).to have_http_status(:ok)

      json = JSON.parse(response.body)
      expect(json).to be_an(Array)
      expect(json.first).to include("name", "price")
    end
  end

  describe "POST /api/v1/products" do
    it "ürün ekler ve 201 döner" do
      post "/api/v1/products", params: { name: "Defter", price: 75 }
      expect(response).to have_http_status(:created)
      json = JSON.parse(response.body)
      expect(json["name"]).to eq("Defter")
      expect(json["price"]).to eq(75)
    end
  end
end
