class CreateGeodeRocks < ActiveRecord::Migration[5.1]
  def change
    create_table :geoderocks do |t|

      t.timestamps
    end
  end
end
