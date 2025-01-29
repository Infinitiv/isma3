class Api::CriteriaController < ApplicationController
  skip_before_filter :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @criteria = Criterium.joins(:efficients).order(:chapter, :point).where(efficients: {archived: true}).uniq
  end
end