class AddConsecutiveRightColumnToCard < ActiveRecord::Migration[7.0]
  def change
    add_column :cards, :curr_streak, :integer
  end
end
