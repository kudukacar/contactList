class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :mobile
      t.string :home
      t.string :work
      t.string :email
      t.string :address
      t.timestamps
    end
  end
end
