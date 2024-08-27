class Api::CriteriaController < ApplicationController
  skip_before_filter :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @criteria = Criterium.order(:chapter, :point)
  end
end