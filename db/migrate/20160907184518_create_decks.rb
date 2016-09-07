class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id
      t.timestamps null: false
    end

    add_index :decks, :author_id
  end
end
