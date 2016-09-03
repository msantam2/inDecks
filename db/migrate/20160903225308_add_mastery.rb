class AddMastery < ActiveRecord::Migration
  def change
    add_column :cards, :mastery, :integer, default: 0
  end
end
