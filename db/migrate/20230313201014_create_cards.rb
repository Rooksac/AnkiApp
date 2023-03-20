class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :front_text
      t.string :front_image
      t.string :back_text
      t.string :back_image
      t.integer :deck_id
      t.datetime :show_next

      t.timestamps
    end
  end
end
