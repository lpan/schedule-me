class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.time :start
      t.time :end
      t.string :calendar

      t.timestamps
    end
  end
end
