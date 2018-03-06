class CreateCrystals < ActiveRecord::Migration[5.1]
  def change
    create_table :crystals do |t|
      t.string :name
      t.string :img
      t.integer :geoderock_id

      t.timestamps
    end
  end
end
