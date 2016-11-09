 # Put your reset commands in here for example
 # if you wanted to delte a user you could:
 # @user = User.find_by_username('guest')
 # @user.delete()
 # once you cleared your data you can basically
 # copy over your seed file to this file to reseed
 # your database


desc "This task is called by the Heroku schedule add-on"

task :reset_guest => :environment do
  puts "Resetting guest user..."

  @user = User.find_by(email: 'KenJennings@gmail.com')
  @user.destroy

  User.create!(email: 'KenJennings@gmail.com', password: 'password')

  d1 = Deck.create!(title: 'General Chemistry', description: 'Gen Chem 101 Flashcards', author_id: @user.id)
  d2 = Deck.create!(title: 'Geography', description: 'Geography of the world', author_id: @user.id)
  d3 = Deck.create!(title: 'Computer History', description: 'The events that led to the Digital Age. What great Age will come next and who will create it?', author_id: @user.id)
  d4 = Deck.create!(title: 'Anatomy', author_id: @user.id)
  d5 = Deck.create!(title: 'Gilded Age', description: 'Captains of Industry or Robber Barons?', author_id: @user.id)

  Card.create!(question: '____ particles surround ____ particles via electrostatic interactions in a process called solvation or dissolution', answer: 'solvent, solute', deck_id: d1.id)
  Card.create!(question: "What is a chemical solution?", answer: 'homogeneous mixture composed of two or more substances combined to form a single phase, generally liquid', deck_id: d1.id)
  Card.create!(question: 'What is the center of the atom called?', answer: 'The nucleus', deck_id: d1.id)
  Card.create!(question: 'At room temperature, what is the only metal in liquid form?', answer: 'mercury', deck_id: d1.id)
  Card.create!(question: 'Is sodium hydroxide (NaOH) an acid or base?', answer: 'base - because of the OH- anion', deck_id: d1.id)
  Card.create!(question: 'The nucleus of an atom consists of what particles?', answer: 'protons and neutrons', deck_id: d1.id)
  Card.create!(question: 'Which law states that the amount of gas dissolved in a liquid is proportional to its partial pressure?', answer: "Henry's Law", deck_id: d1.id)
  Card.create!(question: 'The mineral Ruby is an oxide of which metallic element?', answer: 'aluminum', deck_id: d1.id)
  Card.create!(question: 'Explain the Law of Conservation of Mass', answer: 'Matter can be neither destroyed nor created during the course of a chemical reaction', deck_id: d1.id)
  Card.create!(question: 'Describe what entropy is in a thermodynamic system?', answer: "a thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work, often interpreted as the degree of disorder or randomness in the system", deck_id: d1.id)

  Card.create!(question: 'Name the 5 Great Lakes in the U.S.', answer: 'Lakes Superior, Michigan, Huron, Erie, and Ontario', deck_id: d2.id)
  Card.create!(question: 'Name all the 7 continents', answer: 'Africa, Antarctica, North America, South America, Australia, Europe, Asia', deck_id: d2.id)
  Card.create!(question: 'What is the capital of Albania', answer: 'Tirana', deck_id: d2.id)
  Card.create!(question: 'The great Victoria Desert is located in...?', answer: 'Australia', deck_id: d2.id)
  Card.create!(question: 'What is the capital of Romania?', answer: 'Bucharest', deck_id: d2.id)
  Card.create!(question: 'What are the 5 oceans of planet Earth?', answer: 'Pacific, Atlantic, Indian, Arctic, Southern', deck_id: d2.id)
  Card.create!(question: 'The Yangtze River is entirely located in which country?', answer: "The People's Republic of China", deck_id: d2.id)
  Card.create!(question: 'Madagascar is an island located of the southeast coast of what continent?', answer: 'Africa', deck_id: d2.id)
  Card.create!(question: 'In what country would you find Mount Kilimanjaro?', answer: 'Tanzania', deck_id: d2.id)

  Card.create!(question: 'What was the name of the company Steve Jobs founded after getting fired from Apple?', answer: 'NeXT', deck_id: d3.id)
  Card.create!(question: 'What American electrical engineer is known as the \'father of information theory\'', answer: 'Claude Shannon. Many say he founded and formalized information theory with a landmark paper titled \'A Mathematical Theory of Communcation\' published in 1948', deck_id: d3.id)
  Card.create!(question: 'This person created a machine called The Analytical Engine. His ideas were some of the first that led to the creation of computers', answer: 'Charles Babbage', deck_id: d3.id)
  Card.create!(question: 'What was the original inspiration for the Mac\'s GUI?', answer: "The Steve Jobs visit to Xerox PARC in 1979. Inspired by the Xerox Alto", deck_id: d3.id)
  Card.create!(question: 'What did Paul Allen show Bill Gates that would lead to the creation of Microsoft?', answer: '1975 issue of Popular Electronics that demonstrated the Altair 8800. Allen and Gates saw potential to develop an implementation of the programming language BASIC interpreter for the system', deck_id: d3.id)
  Card.create!(question: 'Where did Alan Turing work while helping decrypt the German Enigma machine?', answer: 'Bletchley Park, UK', deck_id: d3.id)
  Card.create!(question: 'Where was Microsoft first headquarted?', answer: 'Albuquerque, New Mexico. The company was moved to Washington state to better recruit programming talent', deck_id: d3.id)
  Card.create!(question: 'Who is the inventor of Unix and the C programming language', answer: 'Dennis Ritchie. We all owe him a huge debt!', deck_id: d3.id)
  Card.create!(question: "Why do we call an error in our code a bug?", answer: 'Operators traced an error in the Mark II to a moth trapped in a relay, coining the term bug.', deck_id: d3.id)
  Card.create!(question: 'Where did Tim Berners Lee invent the World Wide Web, and on what computer?', answer: 'Invented the web at CERN in Switzerland on a NeXT Cube', deck_id: d3.id)
  Card.create!(question: 'What was the original name of the internet?', answer: 'The ARPANET (Advanced Research Projects Agency) - an agency of the U.S. Department of Defense', deck_id: d3.id)

  Card.create!(question: 'What is a tendon?', answer: 'Fibrous collagen that links muscle to bone', deck_id: d4.id)
  Card.create!(question: 'What 6 elements make up almost 99% of the human body?', answer: 'oxygen, carbon, hydrogen, nitrogen, calcium, phosphorus', deck_id: d4.id)
  Card.create!(question: 'What is the purpose of the endocrine system?', answer: 'Secrete hormones into the blood. These hormones travel to different tissues and regulate various bodily functions', deck_id: d4.id)
  Card.create!(question: 'Name all of the systems of the human body', answer: 'Circulatory, Digestive, Endocrine, Lymphatic, Muscular, Nervous, Reproductive, Respiratory, Skeletal, Urinary, Integumentary', deck_id: d4.id)
  Card.create!(question: 'What is the name of the long pipe that shifts food from the back of your throat down to your stomach?', answer: 'esophagus', deck_id: d4.id)
  Card.create!(question: 'Another name for your voice box is the?', answer: 'Larynx', deck_id: d4.id)
  Card.create!(question: 'How many bones in a typical human body?', answer: '206. It is composed of 270 bones at birth – this total decreases to 206 bones by adulthood after some bones have fused together', deck_id: d4.id)
  Card.create!(question: 'There are 3 major parts of the respiratory system: name them.', answer: 'the airway, the lungs, and the muscles of respiration', deck_id: d4.id)
  Card.create!(question: 'The ______, also known as the throat, is a muscular funnel that extends from the posterior end of the nasal cavity to the superior end of the esophagus and larynx', answer: 'pharynx', deck_id: d4.id)
  Card.create!(question: 'The integumentary system is an organ system consisting of the ____, _____, ____, and ______', answer: 'skin, hair, nails, and exocrine glands', deck_id: d4.id)
  Card.create!(question: 'The cardiovascular system consists of the heart, blood vessels, and the approximately __ liters of blood that the blood vessels transport', answer: '5. Even at rest, the average heart easily pumps over 5 liters of blood throughout the body every minute....', deck_id: d4.id)

  Card.create!(question: 'Name the major industries dominated by the following industrialists: Rockefeller, Morgan, Carnegie, Vanderbilt, Ford', answer: 'Oil, Finance, Steel, Railroads (Steamships earlier in life), Automobiles', deck_id: d5.id)
  Card.create!(question: 'What was the name of John D. Rockefeller\'s company?', answer: 'Standard Oil', deck_id: d5.id)
  Card.create!(question: 'This man bought Carnegie Steel in 1901 for $400 million and set up U.S. Steel. Who was this man?', answer: 'J.P. Morgan. Following the sale, $226 million went to Andrew Carnegie himself', deck_id: d5.id)
  Card.create!(question: 'In which city did John Rockefeller begin his empire?', answer: 'Cleveland (not New York!). Rockefeller founded the Standard Oil Trust there in 1870. It wasn’t until the 1880s that he moved his life and business headquarters to New York, establishing his family’s close ties to the city.', deck_id: d5.id)
  Card.create!(question: "What was J.P. Morgan's approach in order to maximize profits?", answer: "'Morganization' - taking two rival companies and bringing them together", deck_id: d5.id)
  Card.create!(question: 'What does J.D. Rockefeller decide to build in order to rival Carnegie?', answer: 'Iron ore in Minnesota (a steel plant)', deck_id: d5.id)
  Card.create!(question: 'What new insight did Henry Ford bring to the automobile business?', answer: 'The assembly line', deck_id: d5.id)
  Card.create!(question: "Who became the richest man in the history of the world, with a net worth of $660 Billion dollars in today's money?", answer: 'J.D. Rockefeller', deck_id: d5.id)
  Card.create!(question: "What was Carnegie's favorite charitable cause?", answer: 'Libraries', deck_id: d5.id)

  puts "done."
end
