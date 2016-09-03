# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  answer     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  mastered   :boolean          default(FALSE)
#

class Card < ActiveRecord::Base
  validates :question, :answer, presence: true

  #belongs_to :deck

  #has_one :subject
  #  through
end
