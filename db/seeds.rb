User.all.destroy_all
Deck.all.destroy_all
Card.all.destroy_all

puts 'seeding users'

User.create!(name: 'ZakAttack', password: '12345')
User.create!(name: 'JohannaBanana', password: '12345')

puts 'users complete'
puts 'seeding decks'

Deck.create!(name: "Who's that Pokemon?", description: 'practice identifying pokemon by their picture', user_id: User.all.sample.id)

puts 'decks complete'
puts 'seeding cards'

Card.create!(front_text: "Who's That Pokemon?!", front_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oqs1KdMiRfCiqeq2UcNsjwHaH1%26pid%3DApi&f=1&ipt=b0a8fe8383b1ccc46b72904cfeb055aa60f6b6af194196c4cc8dc7531edf94c0&ipo=images", back_text: "It's Pikachu!", back_image: nil, deck_id: Deck.all.sample.id, show_next: DateTime.now(), curr_streak: 0)
Card.create!(front_text: "Who's That Pokemon?!", front_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AOuYxBfuqknEVYznSB3A4QHaHa%26pid%3DApi&f=1&ipt=eafe8d0f1ef6bc79833b769ed9372e79669ade2038fc3a79e3f0947adbd886a9&ipo=images", back_text: "It's Charmander!", back_image: nil, deck_id: Deck.all.sample.id, show_next: DateTime.now(), curr_streak: 0)
Card.create!(front_text: "Who's That Pokemon?!", front_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RHeyPohvAfFduUpvA7k1lgHaHp%26pid%3DApi&f=1&ipt=7d4b04a0724ad360a43a3e69eeb7aaf479e1cfd63bd186e76ac195ece63b87cc&ipo=images", back_text: "It's Squirtle!", back_image: nil, deck_id: Deck.all.sample.id, show_next: DateTime.now(), curr_streak: 0)
Card.create!(front_text: "Who's That Pokemon?!", front_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WBDuxJZ59tWlW2svOcZ1tAHaG1%26pid%3DApi&f=1&ipt=4302ae7c3196be23c99a0e618aeb42eb874a3d52ad9310bedadde2e81ae2d42d&ipo=images", back_text: "It's Bulbasaur!", back_image: nil, deck_id: Deck.all.sample.id, show_next: DateTime.now(), curr_streak: 0)

puts 'cards complete'