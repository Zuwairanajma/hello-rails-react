# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb

# Clear existing messages

 Message.destroy_all

# Add 5 different greetings
greetings = [
  'Hello, world!',
  'Greetings from Juwairiyya!',
  'Welcome to the app!',
  'Good day Ian Mwangi!',
  'Hi there, how are you?'
]

greetings.each do |greeting|
  Message.create(content: greeting)
end

puts 'Seeding completed successfully!'
