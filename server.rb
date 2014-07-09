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

get 'googlee35f528f82dc08c0.html' do

  erb :googlee35f528f82dc08c0
end