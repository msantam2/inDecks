class AddNotNullCardsDeckId < ActiveRecord::Migration
  def change
    change_column_null :cards, :deck_id, false 
  end
end
