# @cards.each do |card|
#   json.set! card.id do
#     json.partial! 'card', card: card
#   end
# end

json.array! @cards do |card|
  json.partial! 'card', card: card 
end
