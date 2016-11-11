 # Put your reset commands in here for example
 # if you wanted to delte a user you could:
 # @user = User.find_by_username('guest')
 # @user.delete()
 # once you cleared your data you can basically
 # copy over your seed file to this file to reseed
 # your database

desc "This task is called by the Heroku schedule add-on"

task :reset_db => :environment do
  puts 'starting db reset'
  'heroku pg:reset DATABASE'
  puts 'done.'
end
