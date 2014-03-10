$:.unshift File.join(File.dirname(__FILE__), '../..')
require 'sinatra'
require 'capybara'
require 'capybara/cucumber'
require 'rspec'

Sinatra::Application.environment = :test
Bundler.require :default, Sinatra::Application.environment
require 'app/app.rb'

Capybara.app = App 

set :environment, :test
set :run, false
set :raise_errors, true
set :dump_errors, false 
set :show_exceptions, false
set :logging, false
