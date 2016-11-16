 # Put your reset commands in here for example
 # if you wanted to delte a user you could:
 # @user = User.find_by_username('guest')
 # @user.delete()
 # once you cleared your data you can basically
 # copy over your seed file to this file to reseed
 # your database

# desc "This task is called by the Heroku schedule add-on"
#
# task :reset_db => :environment do
#   puts 'starting db reset'
#   puts 'done.'
# end

desc 'Destroy all table entries.'

task :reset_database => :environment do
  puts 'resetting the db...'
  ActiveRecord::Base.connection.tables.each do |table|
    if table != 'schema_migrations'
      table.singularize.camelize.constantize.destroy_all
    end

    # Use this if you want to run another rake task:
    # Rake::Task["foo:bar"].invoke
  end
  # Use this if you want to use the normal seeds:
  Rails.application.load_seed
  puts 'done.'
end
