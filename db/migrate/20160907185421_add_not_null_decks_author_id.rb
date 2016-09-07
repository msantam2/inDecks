class AddNotNullDecksAuthorId < ActiveRecord::Migration
  def change
    change_column_null :decks, :author_id, false 
  end
end
