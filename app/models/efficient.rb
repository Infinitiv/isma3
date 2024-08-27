class Efficient < ActiveRecord::Base
  belongs_to :criterium
  belongs_to :user
  has_and_belongs_to_many :attachments
end
