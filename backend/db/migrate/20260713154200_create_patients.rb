class CreatePatients < ActiveRecord::Migration[8.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :address
      t.string :location

      t.timestamps
    end
  end
end
