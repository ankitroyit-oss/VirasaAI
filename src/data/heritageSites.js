/* =============================================
   VirasaAI — Heritage Sites Database
   20 curated sites with full cultural data
   ============================================= */

export const heritageSites = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/960px-Taj_Mahal_%28Edited%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "ताज महल",
    location: { state: "Uttar Pradesh", city: "Agra", coordinates: [27.1751, 78.0421] },
    category: "monument",
    period: "Mughal Era (1632–1653)",
    unesco: true,
    significance: "One of the Seven Wonders of the World, symbol of eternal love",
    history: "Commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, who died during childbirth in 1631. Over 20,000 artisans and workers labored for 22 years to create this masterpiece of Mughal architecture. The white marble was transported from Makrana, Rajasthan, while precious stones came from across Asia.",
    architecture: "Indo-Islamic architecture blending Persian, Ottoman Turkish, and Indian elements. The central dome rises 73 meters, flanked by four minarets. The entire structure is clad in white Makrana marble adorned with pietra dura (semi-precious stone inlay) featuring floral and calligraphic patterns.",
    stories: [
      "Legend says Shah Jahan planned a Black Taj Mahal across the Yamuna as his own tomb, connected by a bridge — though historians debate this.",
      "The four minarets were designed to lean slightly outward so that if they collapsed, they would fall away from the main tomb.",
      "The calligraphy on the Great Gate reads 'O Soul, thou art at rest. Return to the Lord at peace with Him, and He at peace with you.'"
    ],
    cuisine: [
      { name: "Petha", description: "A translucent soft candy made from ash gourd, Agra's most famous sweet" },
      { name: "Mughlai Biryani", description: "Richly spiced rice dish with slow-cooked meat, a legacy of Mughal kitchens" },
      { name: "Bedai & Jalebi", description: "Deep-fried puffed bread with spicy lentil filling, served with crispy jalebis" }
    ],
    artisans: [
      { craft: "Pietra Dura (Marble Inlay)", description: "Semi-precious stones inlaid into marble — a 400-year-old craft still practiced by families in Agra" },
      { craft: "Zardozi Embroidery", description: "Gold and silver thread embroidery on fabric, a Mughal art form" }
    ],
    festivals: ["Taj Mahotsav — A 10-day cultural festival held every February near the Taj Mahal featuring arts, crafts, music, and dance"],
    visitInfo: { bestTime: "October to March", timings: "Sunrise to Sunset (Closed on Fridays)" },
    funFacts: [
      "It took 22 years and 20,000 workers to build",
      "The Taj Mahal changes color throughout the day — pinkish in morning, white at noon, golden in evening",
      "It cost an estimated 32 million rupees in the 1600s (equivalent to ~$1 billion today)",
      "UNESCO declared it a World Heritage Site in 1983"
    ],
    emoji: "🕌",
    color: "#F5F5DC",
    tags: ["mughal", "marble", "love", "agra", "wonder"]
  },
  {
    id: "red-fort",
    name: "Red Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/960px-Delhi_fort.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "लाल किला",
    location: { state: "Delhi", city: "New Delhi", coordinates: [28.6562, 77.2410] },
    category: "fort",
    period: "Mughal Era (1638–1648)",
    unesco: true,
    significance: "Symbol of India's independence — the Prime Minister hoists the national flag here every Independence Day",
    history: "Built by Emperor Shah Jahan when he moved his capital from Agra to Delhi (then Shahjahanabad). The fort's massive red sandstone walls stretch over 2 km and rise 33 meters. It served as the Mughal emperors' primary residence for nearly 200 years until the British captured it in 1857.",
    architecture: "Blend of Persian, Timurid, and Hindu architecture. Notable structures inside include the Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas (Hall of Private Audience), Rang Mahal, and the Nahr-i-Behisht (Stream of Paradise).",
    stories: [
      "The legendary Peacock Throne, encrusted with the Koh-i-Noor diamond, once stood in the Diwan-i-Khas.",
      "The inscription in the Diwan-i-Khas reads: 'If there is paradise on earth, it is this, it is this, it is this.'"
    ],
    cuisine: [
      { name: "Chaat", description: "Delhi's iconic street food — tangy, spicy, and sweet flavors on crispy base" },
      { name: "Paranthe Wali Gali", description: "Famous lane near the fort serving stuffed parathas for over 100 years" },
      { name: "Nihari", description: "Slow-cooked Mughlai stew, traditionally a breakfast dish" }
    ],
    artisans: [
      { craft: "Red Sandstone Carving", description: "Intricate carving on red sandstone, a craft dating to the Mughal era" },
      { craft: "Meenakari (Enamel Work)", description: "Colorful enamel art on metal, historically practiced in and around Old Delhi" }
    ],
    festivals: ["Independence Day Celebration — Every August 15th, the nation watches the PM address from the Red Fort's ramparts"],
    visitInfo: { bestTime: "October to March", timings: "9:30 AM to 4:30 PM (Closed on Mondays)" },
    funFacts: [
      "The walls were originally painted white and were later coated in red",
      "The fort originally had a river flowing alongside it — the Yamuna",
      "It was the site of the last Mughal emperor Bahadur Shah Zafar's trial in 1858"
    ],
    emoji: "🏰",
    color: "#C0392B",
    tags: ["mughal", "delhi", "independence", "fort", "sandstone"]
  },
  {
    id: "qutb-minar",
    name: "Qutb Minar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Qutb_Minar_2022.jpg/960px-Qutb_Minar_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "कुतुब मीनार",
    location: { state: "Delhi", city: "New Delhi", coordinates: [28.5245, 77.1855] },
    category: "monument",
    period: "Delhi Sultanate (1199–1220)",
    unesco: true,
    significance: "World's tallest brick minaret at 72.5 meters, and among the earliest Islamic monuments in India",
    history: "Construction began under Qutb-ud-din Aibak in 1199 and was completed by his successor Iltutmish. The five-story tower was built to celebrate Muslim dominion in Delhi after the defeat of the last Hindu ruler. The complex also contains the Iron Pillar of Delhi, which remarkably has not rusted in over 1,600 years.",
    architecture: "Indo-Islamic architecture. The tower tapers from 14.3m diameter at the base to 2.7m at the top. Each story has a projecting balcony encircling the tower. The lower three stories are made of red sandstone; the fourth and fifth stories are marble and sandstone.",
    stories: [
      "The Iron Pillar (dating to 4th century CE) in the complex has resisted rust for over 1,600 years due to a unique phosphorus composition in the iron.",
      "Legend says if you can encircle the Iron Pillar with your hands behind your back, your wish will come true."
    ],
    cuisine: [
      { name: "Butter Chicken", description: "Creamy tomato-based curry, invented in Delhi's Moti Mahal restaurant" },
      { name: "Chole Bhature", description: "Spicy chickpea curry with deep-fried bread — Delhi's beloved dish" }
    ],
    artisans: [
      { craft: "Islamic Calligraphy", description: "Quranic verses and floral patterns carved in stone — visible throughout the complex" }
    ],
    festivals: ["Phool Walon Ki Sair — A secular flower festival celebrated near the Qutb complex"],
    visitInfo: { bestTime: "October to March", timings: "Sunrise to Sunset" },
    funFacts: [
      "At 72.5 meters, it's taller than the Leaning Tower of Pisa",
      "Entry inside the tower was banned in 1981 after a stampede accident",
      "The complex contains 27 Hindu temple ruins repurposed in its construction"
    ],
    emoji: "🗼",
    color: "#E74C3C",
    tags: ["sultanate", "delhi", "minaret", "brick", "iron-pillar"]
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/960px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "हवा महल",
    location: { state: "Rajasthan", city: "Jaipur", coordinates: [26.9239, 75.8267] },
    category: "monument",
    period: "Rajput Era (1799)",
    unesco: false,
    significance: "The 'Palace of Winds' — an iconic symbol of Jaipur with 953 small windows",
    history: "Built by Maharaja Sawai Pratap Singh in 1799, designed by architect Lal Chand Ustad. The palace allowed royal women of the court to observe street life and festivals without being seen, in keeping with the practice of purdah. Its unique honeycomb-like structure with 953 jharokha (small windows) allows cool air to circulate, making it a natural air conditioner.",
    architecture: "A stunning five-story pyramidal structure made of red and pink sandstone. The front facade resembles a honeycomb of a beehive with its 953 small windows (jharokhas) decorated with intricate latticework. Despite its grand front, the palace is only one room deep in many places.",
    stories: [
      "The Hawa Mahal is essentially a high wall — it was built as an extension to the Royal City Palace and has no solid foundation of its own.",
      "The design was inspired by the crown of Lord Krishna, reflecting Pratap Singh's devotion."
    ],
    cuisine: [
      { name: "Dal Baati Churma", description: "Rajasthan's signature dish — baked wheat balls with lentils and sweet crumbled bread" },
      { name: "Ghevar", description: "A disc-shaped sweet made of flour and soaked in sugar syrup, popular during festivals" },
      { name: "Laal Maas", description: "Fiery red meat curry made with Mathania chillies — a Rajasthani delicacy" }
    ],
    artisans: [
      { craft: "Block Printing (Bagru/Sanganer)", description: "Hand-carved wooden blocks used to print intricate patterns on fabric" },
      { craft: "Lac Bangles", description: "Colorful bracelets made from lac resin, a Jaipur specialty" },
      { craft: "Blue Pottery", description: "Distinctive blue-and-white pottery using Egyptian faience technique brought by Mughals" }
    ],
    festivals: ["Jaipur Literature Festival — The world's largest free literary festival, held every January"],
    visitInfo: { bestTime: "October to March", timings: "9:00 AM to 4:30 PM" },
    funFacts: [
      "It has 953 windows but the building is only one room deep",
      "The wind effect through the windows can drop the temperature significantly inside",
      "Jaipur is called the 'Pink City' because of buildings like Hawa Mahal"
    ],
    emoji: "🏰",
    color: "#E8739A",
    tags: ["rajput", "jaipur", "pink-city", "windows", "palace"]
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/960px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "आमेर किला",
    location: { state: "Rajasthan", city: "Jaipur", coordinates: [26.9855, 75.8513] },
    category: "fort",
    period: "Rajput Era (1592–1727)",
    unesco: true,
    significance: "A stunning hilltop fortress that blends Hindu and Mughal architecture, part of UNESCO's Hill Forts of Rajasthan",
    history: "Originally built by Raja Man Singh I in 1592 and expanded by successive rulers over 150 years. The fort overlooks Maota Lake and was the seat of the Kachwaha Rajput clan. Its grand halls, ornate palaces, and Sheesh Mahal (Mirror Palace) reflect the prosperity and artistic sensibility of the Rajput courts.",
    architecture: "A harmonious blend of Hindu Rajput and Mughal Islamic architecture. Key features include the Ganesh Pol (gateway adorned with mosaics), Sheesh Mahal (Hall of Mirrors), Sukh Niwas (Hall of Pleasure with a cooling water channel), and the Zenana (women's quarters).",
    stories: [
      "The Sheesh Mahal's ceiling is covered with thousands of tiny mirrors — when a single candle is lit, the room appears to glow like a sky full of stars.",
      "A secret underground passage connects Amber Fort to the Jaigarh Fort on the hill above."
    ],
    cuisine: [
      { name: "Ker Sangri", description: "A traditional Rajasthani dish made from desert beans and berries — unique to the arid regions" },
      { name: "Pyaaz Kachori", description: "Deep-fried pastry stuffed with spiced onions — a beloved Jaipur snack" }
    ],
    artisans: [
      { craft: "Mirror Work (Sheesh)", description: "Embedding small mirrors into plaster and fabric — a Rajasthani art form seen in the fort" },
      { craft: "Kundan Jewelry", description: "Gemstone setting technique dating to the Mughal-Rajput era, still practiced in Jaipur" }
    ],
    festivals: ["Elephant Festival — Celebrated during Holi in Jaipur, featuring decorated elephants"],
    visitInfo: { bestTime: "October to February", timings: "8:00 AM to 5:30 PM" },
    funFacts: [
      "The Sheesh Mahal is designed so that a single candle illuminates the entire room through mirror reflections",
      "Elephant rides to the fort entrance were once a main attraction (now restricted for animal welfare)",
      "The fort's walls extend over 11 km around the hills"
    ],
    emoji: "🏯",
    color: "#DAA520",
    tags: ["rajput", "jaipur", "mirrors", "fortress", "mughal"]
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Khajuraho-Lakshmana_temple.JPG/960px-Khajuraho-Lakshmana_temple.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "खजुराहो मंदिर",
    location: { state: "Madhya Pradesh", city: "Khajuraho", coordinates: [24.8318, 79.9199] },
    category: "temple",
    period: "Chandela Dynasty (950–1050 CE)",
    unesco: true,
    significance: "World-renowned for their stunning erotic and spiritual sculptures representing all aspects of human life",
    history: "Built by the Chandela dynasty between 950–1050 CE, originally 85 temples existed — only 25 survive today. The temples were abandoned and forgotten after the decline of the Chandela kingdom, rediscovered by the British in 1838 covered in dense jungle. The carvings depict all aspects of life: war, worship, love, daily activities, and the well-known erotic sculptures that comprise only about 10% of the total.",
    architecture: "Nagara-style Hindu temple architecture. The temples are built on high platforms and feature a sanctum, vestibule, and mandapa (hall). The exterior walls are covered in bands of exquisitely detailed sculptures. The Kandariya Mahadeva temple is the largest, soaring 31 meters.",
    stories: [
      "Only about 10% of the sculptures are erotic — the majority depict daily life, gods, animals, and celestial beings.",
      "Local legend says the temples were built by the moon god Chandrama's son, born of a beautiful mortal woman."
    ],
    cuisine: [
      { name: "Bhutte Ki Kees", description: "Grated corn cooked with spices and milk — a Madhya Pradesh specialty" },
      { name: "Poha Jalebi", description: "Flattened rice breakfast dish served with crispy jalebi, iconic in MP" }
    ],
    artisans: [
      { craft: "Stone Sculpture", description: "The tradition of intricate stone carving continues in Khajuraho, with artisans creating replicas" }
    ],
    festivals: ["Khajuraho Dance Festival — A week-long celebration of classical Indian dance against the backdrop of illuminated temples"],
    visitInfo: { bestTime: "October to March", timings: "Sunrise to Sunset" },
    funFacts: [
      "Of the original 85 temples, only 25 survive today",
      "The temples were lost to the jungle for centuries before being rediscovered in 1838",
      "The erotic carvings make up only about 10% of all the sculptures"
    ],
    emoji: "🛕",
    color: "#C9A96E",
    tags: ["chandela", "sculpture", "temple", "erotic-art", "nagara"]
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/960px-Konarka_Temple.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "कोणार्क सूर्य मंदिर",
    location: { state: "Odisha", city: "Konark", coordinates: [19.8876, 86.0945] },
    category: "temple",
    period: "Eastern Ganga Dynasty (1250 CE)",
    unesco: true,
    significance: "A colossal 13th-century temple designed as a giant chariot of the Sun God with 24 carved stone wheels",
    history: "Built by King Narasimhadeva I of the Eastern Ganga dynasty around 1250 CE. The temple was designed as a massive chariot with 24 exquisitely carved wheels, pulled by 7 horses, representing the Sun God Surya's celestial chariot crossing the heavens. It was a navigational landmark for sailors who called it the 'Black Pagoda'.",
    architecture: "Kalinga architecture at its finest. The temple complex features a massive Vimana (main sanctum, now largely in ruins), a Jagamohana (audience hall that still stands), and a Natya Mandapa (dance hall). The 24 stone wheels (3.6m diameter each) function as sundials — the spokes cast shadows that tell the time accurately to the minute.",
    stories: [
      "Sailors called it the 'Black Pagoda' because it drew ships toward the shore and caused shipwrecks, likely due to large magnets in the temple structure.",
      "The 12-year-old son of the lead architect, Bisu Maharana, solved the structural engineering problem that had stumped 1,200 workers — and then reportedly took his own life to save his father's honor."
    ],
    cuisine: [
      { name: "Dalma", description: "Lentils cooked with local vegetables — a wholesome Odia staple" },
      { name: "Chhena Poda", description: "Baked cheese dessert — Odisha's signature sweet, meaning 'burnt cheese'" },
      { name: "Pakhala Bhata", description: "Fermented rice soaked in water — Odisha's beloved summer dish" }
    ],
    artisans: [
      { craft: "Pattachitra", description: "Traditional scroll painting on cloth using natural colors, depicting mythological stories" },
      { craft: "Stone Carving (Pipili)", description: "Appliqué work and stone sculpting traditions that continue near Konark" }
    ],
    festivals: ["Konark Dance Festival — Classical dance performances held annually against the temple backdrop"],
    visitInfo: { bestTime: "October to March", timings: "6:00 AM to 8:00 PM" },
    funFacts: [
      "The 24 wheels work as sundials and can tell time to the minute",
      "The temple originally had a 70m-tall tower that has since collapsed",
      "It appears on the reverse side of India's 10-rupee note"
    ],
    emoji: "☀️",
    color: "#F39C12",
    tags: ["sun-god", "chariot", "wheels", "odisha", "kalinga"]
  },
  {
    id: "hampi",
    name: "Hampi (Vijayanagara)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/960px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "हम्पी",
    location: { state: "Karnataka", city: "Hampi", coordinates: [15.3350, 76.4600] },
    category: "monument",
    period: "Vijayanagara Empire (1336–1565 CE)",
    unesco: true,
    significance: "Sprawling ruins of one of the world's richest and largest medieval cities",
    history: "The capital of the Vijayanagara Empire, one of the greatest Hindu empires in Indian history. At its peak in the 15th-16th centuries, Hampi was one of the largest and wealthiest cities in the world, with an estimated population of 500,000. The city was sacked in 1565 after the Battle of Talikota and took six months to destroy.",
    architecture: "Dravidian temple architecture mixed with Islamic influences. The ruins spread over 4,100 hectares and include the Vittala Temple (with its iconic stone chariot and musical pillars), Virupaksha Temple, Lotus Mahal, Royal Enclosure, and the Queen's Bath.",
    stories: [
      "The musical pillars of the Vittala Temple produce different musical notes when tapped — Sa Re Ga Ma!",
      "Portuguese traders and Persian merchants who visited called it 'the most prosperous city in the world.'"
    ],
    cuisine: [
      { name: "Bisi Bele Bath", description: "Hot lentil rice — Karnataka's comfort food, spiced with a unique masala blend" },
      { name: "Mysore Pak", description: "Rich, buttery gram flour sweet — born in the kitchens of Mysore Palace" },
      { name: "Ragi Mudde", description: "Finger millet balls served with spicy curry — a nutritious local staple" }
    ],
    artisans: [
      { craft: "Stone Chariot Making", description: "Granite sculpture tradition that produced the iconic stone chariot at Vittala Temple" },
      { craft: "Lambani Embroidery", description: "Colorful mirror work and embroidery by the Lambani tribal community near Hampi" }
    ],
    festivals: ["Hampi Utsav — A grand three-day festival celebrating the glory of the Vijayanagara Empire with music, dance, and fireworks"],
    visitInfo: { bestTime: "October to February", timings: "6:00 AM to 6:00 PM" },
    funFacts: [
      "Hampi was one of the richest cities in the world in the 15th century",
      "The ruins spread over 4,100 hectares — larger than ancient Rome",
      "The stone chariot at Vittala Temple is on the new ₹50 note"
    ],
    emoji: "🏛️",
    color: "#E67E22",
    tags: ["vijayanagara", "karnataka", "ruins", "dravidian", "empire"]
  },
  {
    id: "ajanta-caves",
    name: "Ajanta Caves",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/960px-Ajanta_%2863%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "अजंता गुफाएँ",
    location: { state: "Maharashtra", city: "Aurangabad", coordinates: [20.5519, 75.7033] },
    category: "cave",
    period: "2nd Century BCE – 6th Century CE",
    unesco: true,
    significance: "30 rock-cut Buddhist caves with some of the finest surviving examples of ancient Indian wall paintings",
    history: "Carved from a horseshoe-shaped cliff above the Waghora River, the 30 caves were excavated in two phases: the first during the Satavahana dynasty (2nd-1st century BCE) and the second during the Vakataka dynasty (5th-6th century CE). The caves were abandoned around the 7th century and were rediscovered in 1819 by British officer John Smith while on a tiger hunt.",
    architecture: "Rock-cut Buddhist architecture featuring two types: Chaitya (prayer halls) with stupa, and Vihara (monasteries) with living quarters. The caves are masterpieces of sculptural art and painting, with murals depicting Jataka tales (previous lives of Buddha).",
    stories: [
      "A British officer discovered the caves in 1819 while hunting a tiger — he saw the arch of Cave 10 from across the valley.",
      "The paintings were created using a unique 'tempera' technique with natural pigments that have survived for over 2,000 years."
    ],
    cuisine: [
      { name: "Puran Poli", description: "Sweet stuffed flatbread with jaggery and chana dal — Maharashtra's festival delicacy" },
      { name: "Vada Pav", description: "Mumbai's iconic street food — spiced potato fritter in a bread bun" },
      { name: "Misal Pav", description: "Spicy sprouted moth beans curry served with bread — a Maharashtrian breakfast staple" }
    ],
    artisans: [
      { craft: "Ajanta Painting Tradition", description: "Miniature paintings inspired by cave murals, kept alive by local artists" },
      { craft: "Paithani Weaving", description: "Exquisite silk sarees with golden borders woven in nearby Paithan" }
    ],
    festivals: ["Ellora-Ajanta International Festival — Cultural performances celebrating the cave heritage"],
    visitInfo: { bestTime: "November to March", timings: "9:00 AM to 5:30 PM (Closed on Mondays)" },
    funFacts: [
      "The paintings have survived 2,000+ years using natural mineral pigments",
      "Cave 1's Padmapani Bodhisattva is one of the most reproduced images in Indian art",
      "The caves were completely forgotten for about 1,000 years before rediscovery"
    ],
    emoji: "🪨",
    color: "#8B7355",
    tags: ["buddhist", "caves", "paintings", "rock-cut", "maharashtra"]
  },
  {
    id: "ellora-caves",
    name: "Ellora Caves",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
    nameHindi: "एलोरा गुफाएँ",
    location: { state: "Maharashtra", city: "Aurangabad", coordinates: [20.0258, 75.1780] },
    category: "cave",
    period: "6th–11th Century CE",
    unesco: true,
    significance: "34 caves representing Buddhism, Hinduism, and Jainism — a monument to religious harmony",
    history: "The 34 caves at Ellora were carved over five centuries (6th-11th CE), representing three religions: 12 Buddhist caves, 17 Hindu caves, and 5 Jain caves. This coexistence demonstrates the religious tolerance that prevailed in ancient India. The crown jewel is Cave 16, the Kailasa Temple — the world's largest monolithic rock-cut structure.",
    architecture: "The Kailasa Temple (Cave 16) is an engineering marvel: a freestanding temple carved from top to bottom from a single basalt cliff, removing an estimated 200,000 tonnes of rock. It depicts Mount Kailash, the abode of Lord Shiva, with life-sized elephants, intricate panels, and a multi-story structure.",
    stories: [
      "The Kailasa Temple was carved TOP-DOWN from a single cliff — 200,000 tonnes of rock were removed with only hammers and chisels.",
      "One legend says the architect exclaimed upon completion: 'Oh, how did I do this!' — expressing amazement at his own creation."
    ],
    cuisine: [
      { name: "Shrikhand", description: "Creamy strained yogurt dessert flavored with saffron and cardamom" },
      { name: "Thalipeeth", description: "Multi-grain flatbread made from a special spiced flour mix" }
    ],
    artisans: [
      { craft: "Bidriware", description: "Silver inlay work on blackened zinc alloy — a Deccan craft tradition" },
      { craft: "Himroo Weaving", description: "Brocade weaving with silk and cotton, a specialty of Aurangabad" }
    ],
    festivals: ["Ellora Festival of Music and Dance — Celebrated at the foot of the Kailasa Temple"],
    visitInfo: { bestTime: "November to March", timings: "Sunrise to Sunset (Closed on Tuesdays)" },
    funFacts: [
      "The Kailasa Temple required removing 200,000 tonnes of rock — carved from top to bottom",
      "It represents three religions (Buddhist, Hindu, Jain) side by side — a symbol of tolerance",
      "The Kailasa Temple is twice the size of the Parthenon in Athens"
    ],
    emoji: "⛰️",
    color: "#6B5B43",
    tags: ["rock-cut", "kailasa", "three-religions", "monolithic", "shiva"]
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg/960px-An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "मीनाक्षी अम्मन मंदिर",
    location: { state: "Tamil Nadu", city: "Madurai", coordinates: [9.9195, 78.1193] },
    category: "temple",
    period: "Nayak Dynasty (1623–1655 CE, current form)",
    unesco: false,
    significance: "One of the most spectacular Dravidian temples with 14 towering gopurams covered in 33,000 colorful sculptures",
    history: "The original temple has ancient origins, but the current structure was largely rebuilt by the Nayak rulers in the 17th century. Dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareshwar (Shiva), the temple is the heart and soul of Madurai. It was nominated as one of the new Seven Wonders of the World.",
    architecture: "Classic Dravidian architecture with 14 gopurams (gateway towers), the tallest reaching 52 meters. The temple complex covers 14 acres and features the Hall of Thousand Pillars (actually 985), the Golden Lotus Tank, and intricate sculptures numbering over 33,000.",
    stories: [
      "Legend says Goddess Meenakshi was born with three breasts, and a prophecy said the third would disappear when she met her future husband — Lord Shiva.",
      "The temple has a 'musical pillar' — a single stone pillar that produces the notes of the veena when struck at different points."
    ],
    cuisine: [
      { name: "Jigarthanda", description: "Madurai's iconic cold dessert drink with milk, almond gum, sarsaparilla, and ice cream" },
      { name: "Chettinad Chicken", description: "Fiery chicken curry from the Chettinad region, renowned for its complex spice blend" },
      { name: "Idli & Dosa", description: "Fermented rice and lentil preparations — the quintessential South Indian breakfast" }
    ],
    artisans: [
      { craft: "Sungudi Sarees", description: "Tie-dye cotton sarees from Madurai — known for their tiny knots and vibrant colors" },
      { craft: "Brass and Bronze Casting", description: "Traditional Chola-era metal casting techniques still used to create temple deities" }
    ],
    festivals: ["Meenakshi Thirukalyanam — The grand celestial wedding of Meenakshi and Sundareshwar, celebrated over 12 days in April/May"],
    visitInfo: { bestTime: "October to March", timings: "5:00 AM to 12:30 PM, 4:00 PM to 9:30 PM" },
    funFacts: [
      "The temple has 33,000+ sculptures on its gopurams",
      "The Hall of Thousand Pillars actually has 985 pillars",
      "Each gopuram is repainted every 12 years in a massive restoration effort"
    ],
    emoji: "🛕",
    color: "#E74C3C",
    tags: ["dravidian", "gopuram", "madurai", "goddess", "sculptures"]
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/960px-The_Golden_Temple_of_Amrithsar_7.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "स्वर्ण मंदिर",
    location: { state: "Punjab", city: "Amritsar", coordinates: [31.6200, 74.8765] },
    category: "temple",
    period: "Sikh Era (1574–1604, current gold plating: 1830)",
    unesco: false,
    significance: "The holiest shrine in Sikhism, serving 100,000+ free meals daily through the world's largest free kitchen (Langar)",
    history: "Founded by Guru Ram Das in 1574, the fourth Sikh Guru, who excavated the sacred pool (Amrit Sarovar) from which Amritsar gets its name. The temple was completed by Guru Arjan in 1604, who installed the Adi Granth (Sikh holy scripture) inside. Maharaja Ranjit Singh covered the upper floors in gold leaf in 1830, giving it the golden appearance.",
    architecture: "A unique blend of Hindu and Islamic architecture. The temple is built at a lower level than the surrounding land, symbolizing humility. It has four entrances (one on each side), symbolizing openness to all castes and creeds. The gold-plated structure is reflected beautifully in the surrounding Amrit Sarovar (Pool of Nectar).",
    stories: [
      "The Langar (community kitchen) serves over 100,000 free meals every day to anyone regardless of religion, caste, or status.",
      "The temple was built at a lower level than the surrounding ground to symbolize the Sikh value of humility — visitors must descend steps to enter."
    ],
    cuisine: [
      { name: "Langar Ka Khana", description: "The temple's free community meal — simple dal, roti, and kheer served with love to all" },
      { name: "Amritsari Kulcha", description: "Stuffed bread baked in a tandoor, unique to Amritsar" },
      { name: "Lassi", description: "Rich yogurt drink — Amritsar's lassi shops are legendary" }
    ],
    artisans: [
      { craft: "Phulkari Embroidery", description: "Vibrant floral embroidery on fabric — a centuries-old Punjabi art form" },
      { craft: "Kirpan & Metal Work", description: "Traditional crafting of Sikh ceremonial daggers and other metalwork" }
    ],
    festivals: ["Guru Nanak Jayanti — Grand celebrations with illumination, processions, and community prayers"],
    visitInfo: { bestTime: "October to March", timings: "Open 24 hours, 365 days a year" },
    funFacts: [
      "The Langar feeds 100,000+ people daily — the world's largest free kitchen",
      "The upper floors are covered with 750 kg of pure gold",
      "The temple uses 12,000 kg of flour daily to make rotis"
    ],
    emoji: "✨",
    color: "#F1C40F",
    tags: ["sikh", "golden", "langar", "amritsar", "equality"]
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/960px-Mysore_Palace_Morning.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "मैसूर पैलेस",
    location: { state: "Karnataka", city: "Mysuru", coordinates: [12.3052, 76.6552] },
    category: "fort",
    period: "Wadiyar Dynasty (1912)",
    unesco: false,
    significance: "India's most visited monument after the Taj Mahal, lit by nearly 100,000 bulbs during Dasara",
    history: "The current palace was built in 1912 after the original wooden palace burned down in 1897. Designed by British architect Henry Irwin in the Indo-Saracenic style, it was commissioned by Krishnaraja Wadiyar IV. The palace served as the seat of the Wadiyar dynasty, the rulers of the Kingdom of Mysore.",
    architecture: "Indo-Saracenic architecture combining Hindu, Muslim, Rajput, and Gothic styles. Features include the Kalyana Mantapa (marriage hall) with stained glass ceiling, Durbar Hall with ornate ceilings and impressive columns, and a massive golden throne (200 kg of gold).",
    stories: [
      "During Dasara, the palace is illuminated with 97,000+ light bulbs — a spectacle visible from miles away.",
      "The golden throne weighing 200 kg is displayed only during the Dasara festival."
    ],
    cuisine: [
      { name: "Mysore Pak", description: "Rich, melt-in-mouth sweet made from gram flour, ghee, and sugar — born in the palace kitchen" },
      { name: "Mysore Masala Dosa", description: "Crispy dosa with a red chili-garlic chutney spread inside — different from regular dosa" }
    ],
    artisans: [
      { craft: "Mysore Paintings", description: "Classical South Indian paintings with gold foil, known for gopi (inlaid gold leaf) work" },
      { craft: "Sandalwood Carving", description: "Fragrant sandalwood sculpted into intricate figurines — a Mysore specialty" },
      { craft: "Mysore Silk", description: "Luxurious silk sarees with gold zari borders, woven in Mysore for centuries" }
    ],
    festivals: ["Mysore Dasara — A 10-day mega festival with a royal procession, cultural events, and the palace lit up with 97,000 bulbs"],
    visitInfo: { bestTime: "September to February (Dasara in October)", timings: "10:00 AM to 5:30 PM" },
    funFacts: [
      "It's lit by 97,000+ light bulbs during Dasara celebrations",
      "It's India's second most visited monument (after Taj Mahal) with 6 million visitors/year",
      "The golden throne weighs 200 kg of pure gold"
    ],
    emoji: "👑",
    color: "#9B59B6",
    tags: ["wadiyar", "palace", "dasara", "karnataka", "indo-saracenic"]
  },
  {
    id: "sanchi-stupa",
    name: "Sanchi Stupa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG/960px-East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "सांची स्तूप",
    location: { state: "Madhya Pradesh", city: "Sanchi", coordinates: [23.4793, 77.7399] },
    category: "monument",
    period: "Maurya Dynasty (3rd Century BCE)",
    unesco: true,
    significance: "One of the oldest stone structures in India, commissioned by Emperor Ashoka to enshrine relics of Buddha",
    history: "Originally commissioned by Emperor Ashoka in the 3rd century BCE, the Great Stupa at Sanchi is one of the oldest and most important Buddhist monuments in India. Ashoka erected it to enshrine the relics of the Buddha. The stupa was later enlarged and the elaborate gateways (toranas) were added during the Shunga and Satavahana periods.",
    architecture: "A hemispherical dome (anda) on a raised terrace, surrounded by a stone railing (vedika) with four ornately carved gateways (toranas). The toranas depict scenes from the life of Buddha and Jataka tales, using sophisticated bas-relief and high-relief carving techniques.",
    stories: [
      "The Ashoka Pillar at Sanchi bears the Lion Capital — the design adopted as India's national emblem.",
      "The toranas depict Buddha through symbols (wheel, tree, footprints) rather than human form — reflecting early Buddhist art."
    ],
    cuisine: [
      { name: "Bhutte Ki Kees", description: "Grated corn cooked with spices — a popular Madhya Pradesh dish" },
      { name: "Malpua", description: "Sweet pancakes dipped in sugar syrup — a festive treat" }
    ],
    artisans: [
      { craft: "Stone Carving", description: "The Sanchi carving tradition influenced Buddhist art across Asia" }
    ],
    festivals: ["Buddha Purnima Celebrations — Special prayers and gatherings at the stupa on the full moon of Vaishakha"],
    visitInfo: { bestTime: "October to March", timings: "6:30 AM to 6:30 PM" },
    funFacts: [
      "The Sanchi gateway designs have influenced Buddhist architecture across Asia",
      "Ashoka erected pillars with edicts promoting peace and tolerance",
      "The Lion Capital from Sanchi is India's national emblem"
    ],
    emoji: "🔔",
    color: "#D4A853",
    tags: ["buddhist", "ashoka", "stupa", "maurya", "relics"]
  },
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/960px-Rani_ki_vav_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "रानी की वाव",
    location: { state: "Gujarat", city: "Patan", coordinates: [23.8590, 72.1019] },
    category: "other",
    period: "Solanki Dynasty (1063 CE)",
    unesco: true,
    significance: "An inverted temple built as a stepwell, with 800+ sculptures — it's featured on India's ₹100 note",
    history: "Built by Queen Udayamati in memory of her husband, King Bhimdev I, of the Solanki dynasty around 1063 CE. This is not just a water source but an 'inverted temple' — a seven-level stepwell with over 800 elaborate sculptures. It was buried under silt for centuries and was excavated and restored by the Archaeological Survey of India.",
    architecture: "Maru-Gurjara architectural style. The stepwell descends through seven levels of intricately carved panels featuring sculptures of Vishnu's avatars, apsaras (celestial maidens), and decorative motifs. The well is 64 meters long, 20 meters wide, and 27 meters deep.",
    stories: [
      "The stepwell was designed so that each level gets progressively cooler — the lowest level is several degrees cooler than the surface.",
      "It was buried under river silt for over 700 years before being excavated in the 1940s-80s."
    ],
    cuisine: [
      { name: "Dhokla", description: "Steamed savory cake made from fermented batter — Gujarat's beloved snack" },
      { name: "Undhiyu", description: "Mixed vegetable casserole cooked upside-down underground — a Gujarati winter specialty" },
      { name: "Fafda-Jalebi", description: "Crispy gram flour strips with sweet jalebi — Gujarat's Sunday breakfast tradition" }
    ],
    artisans: [
      { craft: "Patola Weaving", description: "Double ikat silk sarees from Patan — among the most complex weaving techniques in the world" },
      { craft: "Step Well Architecture", description: "Gujarat has over 120 historical stepwells, a unique water management tradition" }
    ],
    festivals: ["Navratri — Gujarat's spectacular nine-night festival of Garba and Dandiya Raas dance"],
    visitInfo: { bestTime: "October to March", timings: "8:00 AM to 6:00 PM" },
    funFacts: [
      "It's featured on the Indian ₹100 note",
      "Over 800 sculptures line its seven levels",
      "It was buried under silt for about 700 years"
    ],
    emoji: "🏗️",
    color: "#C39B77",
    tags: ["stepwell", "queen", "solanki", "inverted-temple", "gujarat"]
  },
  {
    id: "charminar",
    name: "Charminar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/960px-Charminar_Hyderabad_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "चारमीनार",
    location: { state: "Telangana", city: "Hyderabad", coordinates: [17.3616, 78.4747] },
    category: "monument",
    period: "Qutb Shahi Dynasty (1591)",
    unesco: false,
    significance: "The iconic symbol of Hyderabad, built to commemorate the end of a deadly plague",
    history: "Built by Muhammad Quli Qutb Shah in 1591, the fifth ruler of the Qutb Shahi dynasty. Legend says he built it to fulfill a vow — he prayed that the plague ravaging his new city would end, promising to build a mosque at the very spot where he prayed. The plague subsided, and the Charminar was erected with a mosque on its top floor.",
    architecture: "Indo-Islamic architecture. Four grand arches face the four cardinal directions, supporting four ornate minarets that rise 48.7 meters. Each minaret has 149 winding stairs. The top floor houses one of the oldest mosques in Hyderabad.",
    stories: [
      "The four minarets represent the first four caliphs of Islam.",
      "A secret underground tunnel was believed to connect Charminar to Golconda Fort — an escape route for the royals."
    ],
    cuisine: [
      { name: "Hyderabadi Biryani", description: "The legendary dum biryani — layers of fragrant rice and meat slow-cooked in a sealed pot" },
      { name: "Haleem", description: "Slow-cooked wheat, lentils, and meat stew — a GI-tagged Hyderabadi specialty" },
      { name: "Irani Chai & Osmania Biscuit", description: "Strong tea with crumbly buttery biscuit — Hyderabad's signature pairing" }
    ],
    artisans: [
      { craft: "Lac Bangles", description: "Colorful bangles sold in the bustling Laad Bazaar near Charminar — a 400-year-old trade" },
      { craft: "Bidriware", description: "Silver inlay on blackened zinc alloy — a Deccan art form dating to the Bahmani era" },
      { craft: "Pearl Trading", description: "Hyderabad was once known as the 'City of Pearls' for its pearl market" }
    ],
    festivals: ["Bonalu — A vibrant Telangana festival honoring the Mother Goddess with pot-carrying processions"],
    visitInfo: { bestTime: "October to March", timings: "9:30 AM to 5:30 PM" },
    funFacts: [
      "Each minaret has exactly 149 winding stairs",
      "The area around Charminar has been a bustling market for over 400 years",
      "Laad Bazaar near Charminar is the best place for traditional bangles"
    ],
    emoji: "🕌",
    color: "#1ABC9C",
    tags: ["qutb-shahi", "hyderabad", "mosque", "arches", "bangles"]
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/960px-Victoria_Memorial_situated_in_Kolkata.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "विक्टोरिया मेमोरियल",
    location: { state: "West Bengal", city: "Kolkata", coordinates: [22.5448, 88.3426] },
    category: "monument",
    period: "British Colonial (1906–1921)",
    unesco: false,
    significance: "A grand white marble monument that now serves as a museum documenting India's colonial history",
    history: "Conceived by Lord Curzon after Queen Victoria's death in 1901, and completed in 1921. Built with white Makrana marble (same as the Taj Mahal), it blends British and Mughal architecture. Today it serves as a museum housing an impressive collection of paintings, artifacts, and documents from the British Raj era.",
    architecture: "Indo-Saracenic Revival architecture designed by Sir William Emerson. Features a large central dome, corner sub-domes, colonnaded terraces, and ornamental gardens. The bronze 'Angel of Victory' atop the central dome rotates with the wind.",
    stories: [
      "The bronze Angel of Victory on the dome can rotate 180° with the wind.",
      "Lord Curzon insisted the monument be funded by voluntary contributions from Indian princes and citizens."
    ],
    cuisine: [
      { name: "Rosogolla", description: "Spongy cottage cheese balls in sugar syrup — Bengal's GI-tagged pride" },
      { name: "Kosha Mangsho", description: "Slow-cooked spicy mutton curry — Bengali comfort food" },
      { name: "Kathi Roll", description: "Paratha wrapped around spiced kebab — invented on the streets of Kolkata" }
    ],
    artisans: [
      { craft: "Terracotta Art", description: "Clay sculpture tradition — Bengali terracotta temples and figurines are world-famous" },
      { craft: "Baluchari Sarees", description: "Silk sarees featuring mythological scenes woven into the pallu" }
    ],
    festivals: ["Durga Puja — Kolkata's grandest festival, a UNESCO Intangible Cultural Heritage event, with artistic pandals and celebrations"],
    visitInfo: { bestTime: "October to March", timings: "10:00 AM to 5:00 PM (Closed on Mondays)" },
    funFacts: [
      "It's made of the same Makrana marble as the Taj Mahal",
      "The Angel of Victory on top rotates with the wind",
      "It houses 28,394 artifacts including rare paintings and Mughal miniatures"
    ],
    emoji: "🏛️",
    color: "#ECF0F1",
    tags: ["colonial", "kolkata", "marble", "museum", "british"]
  },
  {
    id: "brihadeshwara-temple",
    name: "Brihadeshwara Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg/960px-Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "बृहदेश्वर मंदिर",
    location: { state: "Tamil Nadu", city: "Thanjavur", coordinates: [10.7828, 79.1318] },
    category: "temple",
    period: "Chola Dynasty (1010 CE)",
    unesco: true,
    significance: "A 1,000-year-old Chola masterpiece whose shadow never falls on the ground — an engineering marvel",
    history: "Built by the great Chola Emperor Rajaraja I and completed in 1010 CE. It's the greatest architectural achievement of the Chola Empire and one of the largest temples in India. The temple was built in just 5 years — a remarkable feat given the scale. The capstone atop the 66-meter vimana (tower) weighs 80 tonnes.",
    architecture: "Dravidian architecture at its zenith. The vimana (tower over the sanctum) rises to 66 meters — making it one of the tallest in the world. The crowning octagonal capstone (kalasam) weighs 80 tonnes and was allegedly moved into position using a 6-km inclined plane. The temple features a massive Nandi statue carved from a single rock.",
    stories: [
      "The vimana's shadow never falls on the ground at noon — a deliberate engineering achievement.",
      "The 80-tonne capstone was reportedly moved up a 6-km ramp to the top of the 66m tower — no cranes existed."
    ],
    cuisine: [
      { name: "Thanjavur Special Meals", description: "Elaborate South Indian thali with 12+ items served on a banana leaf" },
      { name: "Degree Coffee", description: "Strong filter coffee — the pride of Tamil Nadu, made with a specific brew ratio" }
    ],
    artisans: [
      { craft: "Tanjore Painting", description: "Classical South Indian painting with gold foil and precious stones — a Thanjavur tradition" },
      { craft: "Bronze Casting (Lost Wax)", description: "The Chola bronzes (Nataraja) are considered the pinnacle of Indian metal sculpture" }
    ],
    festivals: ["Natyanjali Dance Festival — Classical dance offerings to Lord Shiva during Maha Shivaratri"],
    visitInfo: { bestTime: "October to March", timings: "6:00 AM to 8:30 PM" },
    funFacts: [
      "The tower's shadow never falls on the ground at noon",
      "The 80-tonne capstone was placed atop the 66m tower without modern machinery",
      "It was completed in just 5 years by Emperor Rajaraja Chola I"
    ],
    emoji: "🏛️",
    color: "#8B4513",
    tags: ["chola", "thanjavur", "vimana", "engineering", "dravidian"]
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram (Mamallapuram)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg/960px-A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "महाबलीपुरम",
    location: { state: "Tamil Nadu", city: "Mahabalipuram", coordinates: [12.6172, 80.1927] },
    category: "monument",
    period: "Pallava Dynasty (7th–8th Century CE)",
    unesco: true,
    significance: "Rock-cut temples and the world's largest open-air bas-relief — Arjuna's Penance",
    history: "An important seaport during the Pallava dynasty (7th-8th century CE), Mahabalipuram (now Mamallapuram) was transformed into a center of art and architecture by King Narasimhavarman I ('Mamalla'). The site features monolithic rock-cut rathas (chariots), cave temples, the Shore Temple, and the stunning 'Arjuna's Penance' — the world's largest open-air rock relief.",
    architecture: "Early Dravidian architecture. The Five Rathas are monolithic temples carved from single granite boulders, each in a different style. Arjuna's Penance/Descent of the Ganges (27m x 9m) is covered with over 100 figures of gods, humans, and animals carved in high relief.",
    stories: [
      "Local fishermen have long told stories of 'seven pagodas' (temples) submerged in the sea — the 2004 tsunami briefly revealed underwater ruins, validating the legends.",
      "The 'butter ball' — a giant boulder balanced on a slope — has defied gravity for 1,200+ years. Even seven elephants sent by the Pallava king couldn't move it."
    ],
    cuisine: [
      { name: "Fresh Seafood", description: "Being a coastal town, Mahabalipuram is famous for its fresh fish, prawns, and crab preparations" },
      { name: "Kothu Parotta", description: "Shredded layered flatbread stir-fried with egg and spices — a Tamil Nadu street food icon" }
    ],
    artisans: [
      { craft: "Stone Sculpture", description: "Mahabalipuram remains an active stone sculpting center — artisans continue the 1,300-year-old tradition" },
      { craft: "Temple Architecture", description: "The Pallava style influenced temple building across Southeast Asia" }
    ],
    festivals: ["Mamallapuram Dance Festival — A month-long classical dance festival held December-January against the ancient monuments"],
    visitInfo: { bestTime: "November to February", timings: "6:00 AM to 6:00 PM" },
    funFacts: [
      "The 2004 tsunami revealed underwater temple ruins — confirming the 'Seven Pagodas' legend",
      "Krishna's Butter Ball — a 250-tonne boulder — has balanced on a slope for 1,200+ years",
      "The stone sculpting tradition has continued unbroken for 1,300 years"
    ],
    emoji: "🪨",
    color: "#A0522D",
    tags: ["pallava", "shore-temple", "rock-cut", "coastal", "rathas"]
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/960px-Mumbai_03-2016_30_Gateway_of_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nameHindi: "गेटवे ऑफ इंडिया",
    location: { state: "Maharashtra", city: "Mumbai", coordinates: [18.9220, 72.8347] },
    category: "monument",
    period: "British Colonial (1911–1924)",
    unesco: false,
    significance: "Mumbai's most iconic landmark, built to welcome King George V — and ironically the last spot where British troops left India",
    history: "Built to commemorate the visit of King George V and Queen Mary in 1911 (though the foundation stone was laid in 1911, the final structure was completed in 1924). The irony of history: the Gateway, built to welcome the British monarchy, became the spot from which the last British troops departed India on February 28, 1948.",
    architecture: "Indo-Saracenic style combining Hindu and Muslim architectural elements. Built from yellow basalt and concrete, the arch stands 26 meters tall. The central dome is 15 meters in diameter with intricate latticework.",
    stories: [
      "The last British regiment to leave India marched through the Gateway on February 28, 1948 — a poetic reversal of its original purpose.",
      "The architect, George Wittet, also designed the Prince of Wales Museum (now Chhatrapati Shivaji Maharaj Vastu Sangrahalaya) nearby."
    ],
    cuisine: [
      { name: "Vada Pav", description: "Mumbai's iconic street snack — spiced potato fritter in a bun, the city's answer to the burger" },
      { name: "Pav Bhaji", description: "Mashed vegetables in butter served with toasted bread — Mumbai's beloved street food" },
      { name: "Bombay Sandwich", description: "Layered veggie sandwich with green chutney — a Mumbai original" }
    ],
    artisans: [
      { craft: "Warli Painting", description: "Tribal art of Maharashtra — geometric patterns depicting daily life and nature" },
      { craft: "Kolhapuri Chappals", description: "Hand-stitched leather sandals from Maharashtra — known for their durability and artistry" }
    ],
    festivals: ["Ganesh Chaturthi — Mumbai's biggest festival, with massive public Ganesh idols and a visarjan (immersion) procession to the sea"],
    visitInfo: { bestTime: "November to February", timings: "Open 24 hours" },
    funFacts: [
      "The last British troops left India through this Gateway in 1948",
      "It was built to welcome the British King but became a symbol of their departure",
      "The Taj Mahal Palace Hotel across from it was built BEFORE the Gateway"
    ],
    emoji: "🚢",
    color: "#F39C12",
    tags: ["colonial", "mumbai", "arch", "harbor", "british"]
  }
];

// Utility function to find a site by ID
export function findSiteById(id) {
  return heritageSites.find(s => s.id === id);
}

// Utility function to filter sites by category
export function filterSitesByCategory(category) {
  if (category === 'all') return heritageSites;
  return heritageSites.filter(s => s.category === category);
}

// Utility function to search sites
export function searchSites(query) {
  const q = query.toLowerCase();
  return heritageSites.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.location.state.toLowerCase().includes(q) ||
    s.location.city.toLowerCase().includes(q) ||
    s.tags.some(t => t.includes(q))
  );
}
