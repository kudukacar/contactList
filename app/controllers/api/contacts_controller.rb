class Api::ContactsController < ApplicationController
    def show
        @contact = Contact.find(params[:id])
        render :show
    end

    def create
        @contact = Contact.new(contact_params)
        @contact.image_url = "https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy.png" if !@contact.image_url

        if @contact.save
            render :show
        else
            render json: @contact.errors.full_messages, status: 402
        end

    end

    def index
        @contacts = Contact.all 
        render :index
    end

    def update
        @contact = Contact.find(params[:id])
        if @contact.update(contact_params)
            render :show
        else
            render json: @contact.errors.full_messages, status: 402
        end
    end

    def destroy
        @contact = Contact.find(params[:id])
        if @contact.destroy
            render :show
        else
            render json: @contact.errors.full_messages, status: 402
        end
    end

    def contact_params
        params.require(:contact).permit(:name, :mobile, :home, :work, :email, :address, :image_url)
    end
end