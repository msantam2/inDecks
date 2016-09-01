class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :question, null: false
      t.string :answer, null: false
      t.integer :deck_id, null: false
      t.timestamps null: false
    end

    add_index :cards, :deck_id
  end
end
