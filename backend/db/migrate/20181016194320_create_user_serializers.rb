class CreateUserSerializers < ActiveRecord::Migration[5.2]
  def change
    create_table :user_serializers do |t|

      t.timestamps
    end
  end
end
