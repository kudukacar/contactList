class AddImageToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :image_url, :string
  end
end
