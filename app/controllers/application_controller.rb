class ApplicationController < ActionController::API

  include DeviseTokenAuth::Concerns::SetUserByToken
  include CanCan::ControllerAdditions

  rescue_from CanCan::AccessDenied do |exception|
     render json: {message: exception.message}, status: :forbidden
  end

end
