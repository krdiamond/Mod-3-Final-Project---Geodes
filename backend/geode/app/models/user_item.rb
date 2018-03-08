class UserItem < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validate :too_many_items

  def too_many_items
    @user = User.find(1)
     if @user.items.length > 7
       self.errors.add(:property, 'Can not add this many items')
     end
   end


end
