# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  answer     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ActiveRecord::Base
  validates :question, null: false
  validates :answer, null: false

  #belongs_to :deck

  #has_one :subject
  #  through 
end
