require 'sinatra'

get '/' do

  erb :index
end

get '/about' do

  erb :about
end

get '/links' do

  erb :links
end

get '/connect' do

  erb :connect
end

get '/verse' do

  erb :verse
end

