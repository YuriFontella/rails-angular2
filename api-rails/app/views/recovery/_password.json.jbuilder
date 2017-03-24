json.extract! user, :name, :second_name, :email, :reset_digest
json.url user_url(user, format: :json)