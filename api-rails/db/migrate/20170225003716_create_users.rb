class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, index: true
      t.string :second_name, index: true
      t.string :email
      t.boolean :terms, default: false
      t.string :token, index: true
      t.string :password_digest
      t.string :reset_digest
      t.datetime :reset_sent_at

      t.index :email, unique: true

      t.timestamps
    end
  end
end
