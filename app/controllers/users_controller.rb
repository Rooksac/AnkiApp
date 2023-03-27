class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        render json: status: :ok
    end

    private 

    def user_params
        params.permit(:name, :password)
    end
end
