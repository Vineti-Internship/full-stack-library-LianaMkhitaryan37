module V1
    class SessionsController < ApplicationController
      def create
        @author = Author.find_by_email(params[:email])
  
        if @author&.valid_password?(params[:password])
            @current_author = author      
            render json: @current_author;
        else
            render json: @author.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @current_author&.authentication_token=nil
      end
    end
end 