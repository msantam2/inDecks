class AddMastered < ActiveRecord::Migration
  def change
    add_column :cards, :mastered, :boolean, default: false 
  end
end
