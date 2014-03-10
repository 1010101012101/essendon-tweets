require 'sinatra'
require 'haml'

class App < Sinatra::Application

  get '/' do
    haml :main, { :layout => :layout } 
  end

end
