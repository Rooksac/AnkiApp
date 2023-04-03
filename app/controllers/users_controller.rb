class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login]

    def create
        user = User.create!(user_params)
        render json: user, status: :ok
    end

    def login #for /login
        #find by username from body
        @user = User.find_by!(name: params[:name])
        #check if user exists and password matches password digest
        if (@user && @user.authenticate(params[:password]))
            #create token for front end
            token = JWT.encode({user_id: @user.id}, secret_key, 'HS256')
            #pass user instance and token to front end
            render json: {user:@user, token: token}     
        end 
    end

    def me
        render json: {user: @current_user}, status: :ok
    end

    private 

    def user_params
        params.permit(:name, :password)
    end
end
