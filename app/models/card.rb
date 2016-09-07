# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  answer     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  mastery    :integer          default(0)
#  deck_id    :integer          not null
#

class Card < ActiveRecord::Base
  validates :question, :answer, :mastery, :deck_id, presence: true
  validates_inclusion_of :mastery, :in => 0..5

  belongs_to :deck
end
