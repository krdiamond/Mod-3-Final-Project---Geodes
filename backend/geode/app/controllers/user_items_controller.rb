class UserItemsController < ApplicationController


  def index
    @user_items = UserItem.all
    render json: @user_items
  end

  def show
    @user_item = UserItem.find(params[:id])
    render json: @user_item
  end

  #/users POST
  def create
    @user_item = UserItem.new(user_item_params)
    if @user_item.save
      render json: @user_item
    else
      render json: {error: "can not save this many items"}
    end
  end





  # #users/:id PATCH
  # def update
  #   @user_item = UserItem.find(params[:id])
  #   @user_item.update(user_item_params)
  #   render json: @user_item
  # end

  # /users/:id DELETE
  def destroy
    @user_item = UserItem.find_by(item_id: params[:id])
    @user_item.destroy
    render json: {message: "Deleted!"}
  end

  private

  def user_item_params
    params.require(:user_items).permit(:user_id, :item_id)
  end

end
