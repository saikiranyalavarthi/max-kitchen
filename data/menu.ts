export interface MenuItem {
  id: string;

  // English
  name: string;

  // Arabic
  nameAr?: string;

  // Short descriptions
  description?: string;
  descriptionAr?: string;

  // Price
  price?: string;

  // Calories
  calories?: string;

  // Food item image
  image?: string;

  // Multiple sizes / variants
  variants?: {
    name: string;
    nameAr?: string;
    price: string;
  }[];
}

export interface MenuCategory {
  id: string;

  // English
  name: string;

  // Arabic
  nameAr?: string;

  // Category image
  image?: string;

  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  // =====================================================
  // 1. SOUTH INDIAN BREAKFAST
  // =====================================================

  {
  id: "south-indian-breakfast",
  name: "South Indian Breakfast",
  nameAr: "إفطار جنوب الهند",
  image: "/images/menu/categories/south-indian-breakfast.jpg",

  items: [
    {
      id: "idli",
      name: "Idli",
      nameAr: "إدلي",
      description: "Soft and fluffy steamed rice cakes served with traditional South Indian accompaniments.",
      descriptionAr: "كعكات أرز طرية وهشة مطهوة على البخار وتقدم مع الإضافات الهندية الجنوبية التقليدية.",
      price: "10",
      calories: "180",
      image: "/images/menu/idli.jpg",
    },

    {
      id: "idli-vada",
      name: "Idli + Vada",
      nameAr: "إدلي + فادا",
      description: "3 Pieces of soft idli and crispy vada served as a classic South Indian breakfast.",
      descriptionAr: "3 قطع من الإيدلي الطري والفادا المقرمش، تقدم كوجبة إفطار هندية جنوبية كلاسيكية.",
      price: "10",
      image: "/images/menu/idli-vada.jpg",
    },

    {
      id: "vada",
      name: "Vada",
      nameAr: "فادا",
      description: "3 Pieces of crispy golden lentil fritters with a soft and flavorful center.",
      descriptionAr: "3 قطع من فطائر العدس الذهبية المقرمشة مع قلب طري ولذيذ.",
      price: "10",
      calories: "350",
      image: "/images/menu/vada.jpg",
    },

    {
      id: "sambar-dip-idli",
      name: "Sambar Dip Idli",
      nameAr: "إیدلي سامبار",
      description: "2 Pieces of soft idli soaked in flavorful South Indian sambar.",
      descriptionAr: "قطعتان من الإيدلي الطري المنقوع في سامبار هندي جنوبي غني بالنكهة.",
      price: "10",
      calories: "200",
      image: "/images/menu/sambar-dip-idli.png",
    },

    {
      id: "sambar-dip-vada",
      name: "Sambar Dip Vada",
      nameAr: "فادا سامبار",
      description: "2 Pieces of crispy vada served soaked in delicious South Indian sambar.",
      descriptionAr: "قطعتان من الفادا المقرمش مغمورتان في سامبار هندي جنوبي لذيذ.",
      price: "10",
      calories: "250",
      image: "/images/menu/sambar-dip-vada.png",
    },

    {
      id: "idli-vada-dip-sambar",
      name: "Idli + Vada Dip Sambar",
      nameAr: "إیدلي + فادا سامبار",
      description: "2 Pieces of idli and vada served together with flavorful sambar.",
      descriptionAr: "قطعتان من الإيدلي والفادا تقدمان معًا مع سامبار غني بالنكهة.",
      price: "10",
      calories: "300",
      image: "/images/menu/idli-vada-dip-sambar.png",
    },

    {
      id: "mysore-bonda",
      name: "Mysore Bonda",
      nameAr: "بوندا میسور",
      description: "3 Pieces of soft and fluffy deep-fried South Indian bondas with a crispy exterior.",
      descriptionAr: "3 قطع من بوندا ميسور الطرية والهشة والمقلية بسطح مقرمش.",
      price: "10",
      calories: "300",
      image: "/images/menu/bonda.webp",
    },

    {
      id: "upma",
      name: "Upma",
      nameAr: "أوبما",
      description: "A warm and savory semolina breakfast cooked with aromatic spices and vegetables.",
      descriptionAr: "وجبة إفطار دافئة ولذيذة من السميد مطهوة مع التوابل العطرية والخضروات.",
      price: "10",
      calories: "220",
      image: "/images/menu/upma.jpg",
    },

    {
      id: "plain-dosa",
      name: "Plain Dosa",
      nameAr: "دوسة عادي",
      description: "Thin and crispy traditional South Indian dosa made from fermented rice and lentil batter.",
      descriptionAr: "دوسة هندية جنوبية تقليدية رقيقة ومقرمشة مصنوعة من خليط الأرز والعدس المخمر.",
      price: "10",
      calories: "120",
      image: "/images/menu/dosa.jpg",
    },

    {
      id: "uttappam",
      name: "Uttappam",
      nameAr: "أوتابام",
      description: "Soft and thick South Indian savory pancake with a deliciously hearty texture.",
      descriptionAr: "فطيرة هندية جنوبية طرية وسميكة ذات قوام شهي ولذيذ.",
      price: "12",
      calories: "200",
      image: "/images/menu/uttappam.jpg",
    },

    {
      id: "poori",
      name: "Poori",
      nameAr: "بوري",
      description: "3 Pieces of golden, fluffy deep-fried Indian bread served fresh and hot.",
      descriptionAr: "3 قطع من الخبز الهندي الذهبي والهش والمقلي، تقدم طازجة وساخنة.",
      price: "12",
      calories: "250",
      image: "/images/menu/puri.jpg",
    },

    {
      id: "halwa-poori",
      name: "Halwa Poori",
      nameAr: "بوري",
      description: "Fluffy golden poori served with sweet and rich traditional halwa.",
      descriptionAr: "بوري ذهبي وهش يقدم مع حلوى حلوة وغنية تقليدية.",
      price: "12",
      calories: "250",
      image: "/images/menu/halwa-poori.jpg",
    },

    {
      id: "masala-dosa",
      name: "Masala Dosa",
      nameAr: "ماسالا دوسة",
      description: "Crispy dosa filled with a flavorful spiced potato masala.",
      descriptionAr: "دوسة مقرمشة محشوة بمزيج البطاطس المتبل والغني بالنكهة.",
      price: "12",
      calories: "250",
      image: "/images/menu/masala-dosa.avif",
    },

    {
      id: "onion-dosa",
      name: "Onion Dosa",
      nameAr: "دوسة البصل",
      description: "Crispy dosa topped with fresh onions for a delicious savory flavor.",
      descriptionAr: "دوسة مقرمشة مغطاة بالبصل الطازج لنكهة لذيذة وشهية.",
      price: "12",
      calories: "200",
      image: "/images/menu/onion-dosa.jpg",
    },

    {
      id: "butter-dosa",
      name: "Butter Dosa",
      nameAr: "دوسة الزبدة",
      description: "Golden crispy dosa generously finished with smooth and rich butter.",
      descriptionAr: "دوسة ذهبية مقرمشة مغطاة بسخاء بالزبدة الناعمة والغنية.",
      price: "12",
      calories: "250",
      image: "/images/menu/butter-dosa.webp",
    },

    {
      id: "paneer-dosa",
      name: "Paneer Dosa",
      nameAr: "بانير دوسة",
      description: "Crispy dosa filled with flavorful and creamy paneer for a satisfying meal.",
      descriptionAr: "دوسة مقرمشة محشوة بالبانير الكريمي والغني بالنكهة لوجبة مشبعة.",
      price: "12",
      calories: "300",
      image: "/images/menu/paneer-dosa.webp",
    },

    {
      id: "ghee-roast-dosa",
      name: "Ghee Roast Dosa",
      nameAr: "دوسة سمن",
      description: "Extra-crispy dosa roasted generously with aromatic clarified butter.",
      descriptionAr: "دوسة مقرمشة جدًا محمصة بسخاء بالسمن العطري.",
      price: "12",
      calories: "350",
      image: "/images/menu/ghee-roast-dosa.jpg",
    },

    {
      id: "ghee-karam-dosa",
      name: "Ghee Karam Dosa",
      nameAr: "سمن دوسة",
      description: "Crispy dosa roasted with ghee and a flavorful spicy karam seasoning.",
      descriptionAr: "دوسة مقرمشة محمصة بالسمن ومتبلّة بخليط كرام الحار والغني بالنكهة.",
      price: "12",
      image: "/images/menu/ghee-karam-dosa.jpg",
    },

    {
      id: "upma-dosa",
      name: "Upma Dosa",
      nameAr: "أوما دوسة",
      description: "Crispy dosa combined with flavorful upma for a unique South Indian breakfast.",
      descriptionAr: "دوسة مقرمشة مع الأوبما الغنية بالنكهة لوجبة إفطار هندية جنوبية مميزة.",
      price: "12",
      calories: "250",
      image: "/images/menu/upma-dosa.jpg",
    },

    {
      id: "rava-dosa",
      name: "Rava Dosa",
      nameAr: "رافا دوسة",
      description: "Thin, lacy and crispy dosa prepared with flavorful semolina batter.",
      descriptionAr: "دوسة رقيقة ومقرمشة ذات قوام شبكي محضرة من خليط السميد الغني بالنكهة.",
      price: "12",
      calories: "220",
      image: "/images/menu/rava-dosa.webp",
    },

    {
      id: "idli-dosa",
      name: "Idli Dosa",
      nameAr: "إیدلي دوسة",
      description: "A delicious combination of soft idli and crispy dosa in one breakfast platter.",
      descriptionAr: "مزيج لذيذ من الإيدلي الطري والدوسة المقرمشة في طبق إفطار واحد.",
      price: "12",
      calories: "220",
      image: "/images/menu/idli-dosa.avif",
    },

    {
      id: "flower-dosa",
      name: "Flower Dosa",
      nameAr: "زھرة دوسة",
      description: "Beautifully shaped crispy dosa prepared for a unique and delightful presentation.",
      descriptionAr: "دوسة مقرمشة بتشكيل جميل تقدم بطريقة مميزة وشهية.",
      price: "12",
      calories: "200",
      image: "/images/menu/flower-dosa.png",
    },
  ],
},
  // =====================================================
  // 2. ARABIC BREAKFAST
  // =====================================================
{
  id: "arabic-breakfast",
  name: "Arabic Breakfast",
  nameAr: "الإفطار العربي",
  image: "/images/menu/categories/arabic-breakfast.jpg",
  items: [],
},

// =====================================================
// 3. HOT SOUPS
// =====================================================

{
  id: "hot-soups",
  name: "Hot Soups",
  nameAr: "الشوربات الساخنة",
  image: "/images/menu/categories/hot-soups.png",

  items: [
    {
      id: "veg-hot-sour-soup",
      name: "Veg Hot & Sour Soup",
      nameAr: "شوربة خضار حارة وحامضة",
      description: "A flavorful vegetable soup with a perfect balance of spicy and tangy flavors.",
      descriptionAr: "شوربة خضار غنية بالنكهة تجمع بين الطعم الحار والحامض بشكل متوازن.",
      price: "14",
      calories: "100",
      image: "/images/menu/veg-hot-sour-soup.webp",
    },

    {
      id: "veg-corn-soup",
      name: "Veg Corn Soup",
      nameAr: "شوربة خضار بالذرة",
      description: "A warm and comforting vegetable soup prepared with sweet corn and fresh vegetables.",
      descriptionAr: "شوربة خضار دافئة ولذيذة محضرة بالذرة الحلوة والخضروات الطازجة.",
      price: "14",
      calories: "120",
      image: "/images/menu/veg-corn-soup.jpg",
    },

    {
      id: "veg-manchow-soup",
      name: "Veg Manchow Soup",
      nameAr: "شوربة خضار مانشو",
      description: "Spicy vegetable Manchow soup packed with aromatic spices and fresh vegetables.",
      descriptionAr: "شوربة مانشو بالخضار حارة وغنية بالتوابل العطرية والخضروات الطازجة.",
      price: "14",
      calories: "110",
      image: "/images/menu/veg-manchow-soup.jpg",
    },

    {
      id: "chicken-hot-sour-soup",
      name: "Chicken Hot & Sour Soup",
      nameAr: "شوربة دجاج حارة",
      description: "A delicious chicken soup combining tender chicken with spicy and tangy flavors.",
      descriptionAr: "شوربة دجاج لذيذة تجمع بين قطع الدجاج الطرية والنكهات الحارة والحامضة.",
      price: "16",
      calories: "140",
      image: "/images/menu/chicken-hot-sour-soup.webp",
    },

    {
      id: "chicken-corn-soup",
      name: "Chicken Corn Soup",
      nameAr: "شوربة دجاج بالذرة",
      description: "Comforting chicken soup made with tender chicken and sweet corn.",
      descriptionAr: "شوربة دجاج دافئة محضرة بالدجاج الطري والذرة الحلوة.",
      price: "16",
      calories: "160",
      image: "/images/menu/chicken-corn-soup.webp",
    },

    {
      id: "chicken-manchow-soup",
      name: "Chicken Manchow Soup",
      nameAr: "شوربة دجاج مانشو",
      description: "Spicy Manchow soup with tender chicken, vegetables and aromatic spices.",
      descriptionAr: "شوربة مانشو حارة مع الدجاج الطري والخضروات والتوابل العطرية.",
      price: "16",
      calories: "150",
      image: "/images/menu/chicken-manchow-soup.jpg",
    },
  ],
},

  // =====================================================
  // 4. APPETIZERS
  // =====================================================

 {
  id: "appetizers",
  name: "Appetizers",
  nameAr: "المقبلات",
  image: "/images/menu/categories/appetizers.jpg",

  items: [
    {
      id: "veg-spring-roll",
      name: "Veg Spring Roll",
      nameAr: "سبرينغ رول خضار",
      description: "Crispy spring rolls filled with fresh mixed vegetables and served with a flavorful dip.",
      descriptionAr: "لفائف ربيعية مقرمشة محشوة بالخضروات الطازجة المشكلة وتقدم مع صلصة لذيذة.",
      price: "25",
      calories: "180",
      image: "/images/menu/veg-spring-roll.jpg",
    },

    {
      id: "gobi-manchurian",
      name: "Gobi Manchurian",
      nameAr: "غوبي مانشوريان",
      description: "Crispy cauliflower tossed in a flavorful Manchurian sauce with aromatic spices.",
      descriptionAr: "قرنبيط مقرمش مع صلصة مانشورية غنية بالنكهة والتوابل العطرية.",
      price: "25",
      calories: "220",
      image: "/images/menu/gobi-manchurian.jpg",
    },

    {
      id: "chicken-spring-roll",
      name: "Chicken Spring Roll",
      nameAr: "سبرينغ رول دجاج",
      description: "Crispy spring rolls filled with seasoned chicken and fresh vegetables.",
      descriptionAr: "لفائف ربيعية مقرمشة محشوة بالدجاج المتبل والخضروات الطازجة.",
      price: "30",
      calories: "220",
      image: "/images/menu/chicken-spring-roll.jpg",
    },

    {
      id: "chicken-fry",
      name: "Chicken Fry",
      nameAr: "دجاج مقلي",
      description: "Tender chicken pieces marinated with aromatic spices and fried until crispy and flavorful.",
      descriptionAr: "قطع دجاج طرية متبلة بالتوابل العطرية ومقلية حتى تصبح مقرمشة ولذيذة.",
      price: "35",
      calories: "330",
      image: "/images/menu/chicken-fry.jpg",
    },

    {
      id: "chicken-lollipop",
      name: "Chicken Lollipop",
      nameAr: "دجاج لولي بوب",
      description: "Juicy chicken lollipop pieces coated with flavorful spices and fried to perfection.",
      descriptionAr: "قطع دجاج لولي بوب طرية متبلة بالتوابل الغنية بالنكهة ومقلية بشكل مثالي.",
      price: "35",
      calories: "320",
      image: "/images/menu/chicken-lollipop.jpg",
    },

    {
      id: "chicken-65",
      name: "Chicken 65",
      nameAr: "دجاج 65",
      description: "Crispy fried chicken tossed with spicy aromatic seasoning for a bold and flavorful bite.",
      descriptionAr: "دجاج مقلي مقرمش متبل بتوابل عطرية حارة لنكهة قوية ولذيذة.",
      price: "35",
      calories: "380",
      image: "/images/menu/chicken-65.jpg",
    },

    {
      id: "chicken-manchurian",
      name: "Chicken Manchurian",
      nameAr: "دجاج مانشوريان",
      description: "Tender chicken tossed in a rich Manchurian sauce with aromatic spices and vegetables.",
      descriptionAr: "دجاج طري مع صلصة مانشورية غنية والتوابل العطرية والخضروات.",
      price: "35",
      calories: "300",
      image: "/images/menu/chicken-manchurian.jpg",
    },

    {
      id: "chicken-chilli",
      name: "Chilli Chicken",
      nameAr: "دجاج حار",
      description: "Tender chicken cooked with fresh chillies, onions and flavorful Indo-Chinese sauce.",
      descriptionAr: "دجاج طري مطهو مع الفلفل الحار الطازج والبصل وصلصة هندية صينية لذيذة.",
      price: "35",
      calories: "300",
      image: "/images/menu/chicken-chilli.webp",
    },

    {
      id: "pepper-chicken",
      name: "Pepper Chicken",
      nameAr: "دجاج بالفلفل",
      description: "Juicy chicken cooked with aromatic black pepper and flavorful spices.",
      descriptionAr: "دجاج طري مطهو مع الفلفل الأسود العطري والتوابل الغنية بالنكهة.",
      price: "35",
      calories: "340",
      image: "/images/menu/pepper-chicken.jpg",
    },

    {
      id: "thread-chicken",
      name: "Thread Chicken",
      nameAr: "دجاج ثريد",
      description: "Crispy chicken wrapped in delicate crunchy threads and fried until golden.",
      descriptionAr: "دجاج مقرمش ملفوف بخيوط رقيقة ومقرمشة ومقلي حتى يصبح ذهبيًا.",
      price: "35",
      calories: "380",
      image: "/images/menu/thread-chicken.jpg",
    },

    {
      id: "majestic-chicken",
      name: "Majestic Chicken",
      nameAr: "دجاج ماجستيك",
      description: "Tender chicken coated in a creamy, spicy and flavorful sauce with aromatic herbs.",
      descriptionAr: "دجاج طري مغطى بصلصة كريمية وحارة وغنية بالنكهة مع الأعشاب العطرية.",
      price: "35",
      calories: "400",
      image: "/images/menu/majestic-chicken.jpg",
    },

    {
      id: "fish-fry",
      name: "Fish Fry",
      nameAr: "سمك مقلي",
      description: "Fresh fish marinated with aromatic spices and fried until crispy and golden.",
      descriptionAr: "سمك طازج متبل بالتوابل العطرية ومقلي حتى يصبح مقرمشًا وذهبيًا.",
      price: "35",
      calories: "360",
      image: "/images/menu/fish-fry.jpg",
    },

    {
      id: "apollo-chilli-fish",
      name: "Apollo / Chilli Fish",
      nameAr: "سمك أبولو / حار",
      description: "Crispy fish tossed with spicy sauce, chillies and aromatic seasonings.",
      descriptionAr: "سمك مقرمش مع صلصة حارة والفلفل والتوابل العطرية.",
      price: "40",
      calories: "380",
      image: "/images/menu/apollo-chilli-fish.jpg",
    },

    {
      id: "finger-fish",
      name: "Finger Fish",
      nameAr: "سمك فينجرفيش",
      description: "Crispy golden fish fingers prepared with a flavorful seasoned coating.",
      descriptionAr: "أصابع سمك ذهبية ومقرمشة بطبقة متبلة وغنية بالنكهة.",
      price: "40",
      calories: "450",
      image: "/images/menu/finger-fish.webp",
    },
  ],
},
  // =====================================================
  // 5. APPETIZERS SIZZLER
  // =====================================================

  {
  id: "appetizers-sizzler",
  name: "Appetizers Sizzler",
  nameAr: "المقبلات السيزلر",
  image: "/images/menu/categories/sizzler.jpg",

  items: [
    {
      id: "chicken-sizzler",
      name: "Chicken Sizzler",
      nameAr: "دجاج سیزلر",
      description: "Juicy grilled chicken served sizzling hot with vegetables and flavorful sauce.",
      descriptionAr: "دجاج مشوي طري يقدم ساخنًا على طبق سيزلر مع الخضروات وصلصة غنية بالنكهة.",
      price: "40",
      calories: "450",
      image: "/images/menu/chicken-sizzler.jpg",
    },

    {
      id: "fish-sizzler",
      name: "Fish Sizzler",
      nameAr: "سمك سیزلر",
      description: "Tender grilled fish served sizzling hot with fresh vegetables and sauce.",
      descriptionAr: "سمك مشوي طري يقدم ساخنًا على طبق سيزلر مع الخضروات الطازجة والصلصة.",
      price: "40",
      calories: "450",
      image: "/images/menu/fish-sizzler.jpg",
    },

    {
      id: "prawn-sizzler",
      name: "Prawn Sizzler",
      nameAr: "روبيان سیزلر",
      description: "Juicy prawns served sizzling hot with vegetables and aromatic seasoning.",
      descriptionAr: "روبيان طري يقدم ساخنًا على طبق سيزلر مع الخضروات والتوابل العطرية.",
      price: "40",
      calories: "450",
      image: "/images/menu/prawn-sizzler.jpg",
    },

    {
      id: "mutton-sizzler",
      name: "Mutton Sizzler",
      nameAr: "لحم ضأن سيزلر",
      description: "Tender mutton served sizzling hot with vegetables and a rich flavorful sauce.",
      descriptionAr: "لحم ضأن طري يقدم ساخنًا على طبق سيزلر مع الخضروات وصلصة غنية بالنكهة.",
      price: "40",
      calories: "450",
      image: "/images/menu/mutton-sizzler.jpg",
    },

    {
      id: "golden-fried-prawns",
      name: "Golden Fried Prawns",
      nameAr: "روبيان مقلي",
      description: "Crispy golden-fried prawns coated with a flavorful seasoned crust.",
      descriptionAr: "روبيان مقلي ذهبي ومقرمش بطبقة متبلة وغنية بالنكهة.",
      price: "40",
      calories: "500",
      image: "/images/menu/golden-fried-prawns.avif",
    },
  ],
},

// =====================================================
// 6. BBQ
// =====================================================

{
  id: "bbq",
  name: "BBQ",
  nameAr: "مشويات",
  image: "/images/menu/categories/bbq.jpg",

  items: [
    {
      id: "chicken-seekh-kebab",
      name: "Chicken Seekh Kebab",
      nameAr: "سيخ كباب دجاج",
      description: "Juicy minced chicken kebabs seasoned with aromatic spices and grilled to perfection.",
      descriptionAr: "كباب دجاج مفروم طري ومتبل بالتوابل العطرية ومشوي بشكل مثالي.",
      price: "30",
      calories: "290",
      image: "/images/menu/chicken-seekh-kebab.avif",
    },

    {
      id: "mutton-seekh-kebab",
      name: "Mutton Seekh Kebab",
      nameAr: "لحم ضأن سيخ كباب",
      description: "Tender minced mutton kebabs blended with aromatic spices and grilled over heat.",
      descriptionAr: "كباب لحم ضأن مفروم وطري ممزوج بالتوابل العطرية ومشوي على النار.",
      price: "35",
      calories: "320",
      image: "/images/menu/mutton-seekh-kebab.avif",
    },

    {
      id: "chicken-tikka",
      name: "Chicken Tikka",
      nameAr: "دجاج تكا",
      description: "Tender chicken pieces marinated in aromatic spices and grilled until smoky and flavorful.",
      descriptionAr: "قطع دجاج طرية متبلة بالتوابل العطرية ومشوية حتى تصبح مدخنة وغنية بالنكهة.",
      price: "30",
      calories: "280",
      image: "/images/menu/chicken-tikka.jpg",
    },

    {
      id: "chicken-malai-kebab",
      name: "Chicken Malai Kebab",
      nameAr: "كباب دجاج مالاي",
      description: "Creamy and tender chicken kebabs marinated with mild spices and grilled to perfection.",
      descriptionAr: "كباب دجاج طري وكريمي متبل بتوابل خفيفة ومشوي بشكل مثالي.",
      price: "35",
      calories: "320",
      image: "/images/menu/chicken-malai-kebab.jpg",
    },

    {
      id: "chicken-hariyali-kebab",
      name: "Chicken Hariyali Kebab",
      nameAr: "كباب دجاج هاريالي",
      description: "Juicy chicken kebabs marinated with fresh herbs, green spices and aromatic seasoning.",
      descriptionAr: "كباب دجاج طري متبل بالأعشاب الطازجة والتوابل الخضراء والتوابل العطرية.",
      price: "30",
      calories: "300",
      image: "/images/menu/chicken-hariyali-kebab.jpg",
    },

    {
      id: "chicken-tangdi",
      name: "Chicken Tangdi",
      nameAr: "دجاج تانجدي",
      description: "2 Pieces of juicy chicken drumsticks marinated with aromatic spices and grilled to perfection.",
      descriptionAr: "قطعتان من أفخاذ الدجاج الطرية متبلة بالتوابل العطرية ومشوية بشكل مثالي.",
      price: "35",
      calories: "360",
      image: "/images/menu/chicken-tangdi.webp",
    },

    {
      id: "tandoori-chicken-half",
      name: "Tandoori Chicken Half",
      nameAr: "نصف دجاج تندوري",
      description: "Half chicken marinated in traditional tandoori spices and roasted until smoky and tender.",
      descriptionAr: "نصف دجاج متبل بتوابل التندوري التقليدية ومشوي حتى يصبح طريًا ومدخنًا.",
      price: "40",
      calories: "300",
      image: "/images/menu/tandoori-chicken-half.jpg",
    },

    {
      id: "tandoori-chicken-full",
      name: "Tandoori Chicken Full",
      nameAr: "دجاج تندوري كامل",
      description: "Whole chicken marinated with traditional tandoori spices and roasted for a smoky flavor.",
      descriptionAr: "دجاج كامل متبل بتوابل التندوري التقليدية ومشوي لنكهة مدخنة وغنية.",
      price: "70",
      calories: "600",
      image: "/images/menu/tandoori-chicken-full.jpg",
    },
  ],
},
  // =====================================================
  // 7. FRIED RICE & NOODLES
  // =====================================================

  {
  id: "fried-rice-noodles",
  name: "Fried Rice & Noodles",
  nameAr: "الأرز المقلي والمعكرونة",
  image: "/images/menu/categories/fried-rice-noodles.jpg",

  items: [
    {
      id: "veg-fried-rice",
      name: "Veg Fried Rice",
      nameAr: "أرز مقلي بالخضار",
      description: "Fragrant fried rice tossed with fresh vegetables and flavorful seasoning.",
      descriptionAr: "أرز مقلي عطري مع الخضروات الطازجة والتوابل الغنية بالنكهة.",
      price: "25",
      calories: "280",
      image: "/images/menu/veg-fried-rice.jpg",
    },

    {
      id: "jeera-rice",
      name: "Jeera Rice",
      nameAr: "أرز جيرا",
      description: "Fragrant basmati rice cooked with aromatic cumin seeds.",
      descriptionAr: "أرز بسمتي عطري مطهو مع بذور الكمون العطرية.",
      price: "25",
      calories: "280",
      image: "/images/menu/jeera-rice.jpg",
    },

    {
      id: "chicken-fried-rice",
      name: "Chicken Fried Rice",
      nameAr: "أرز مقلي بالدجاج",
      description: "Flavorful fried rice tossed with tender chicken and fresh vegetables.",
      descriptionAr: "أرز مقلي غني بالنكهة مع الدجاج الطري والخضروات الطازجة.",
      price: "30",
      calories: "320",
      image: "/images/menu/chicken-fried-rice.webp",
    },

    {
      id: "veg-noodles",
      name: "Veg Noodles",
      nameAr: "نودلز بالخضار",
      description: "Stir-fried noodles tossed with fresh vegetables and aromatic seasoning.",
      descriptionAr: "نودلز مقلية مع الخضروات الطازجة والتوابل العطرية.",
      price: "25",
      calories: "320",
      image: "/images/menu/veg-noodles.jpg",
    },

    {
      id: "egg-noodles",
      name: "Egg Noodles",
      nameAr: "نودلز البيض",
      description: "Stir-fried noodles combined with egg and flavorful aromatic seasoning.",
      descriptionAr: "نودلز مقلية مع البيض وتوابل عطرية غنية بالنكهة.",
      price: "25",
      calories: "380",
      image: "/images/menu/egg-noodles.webp",
    },

    {
      id: "chicken-schezwan-noodles",
      name: "Chicken Schezwan Noodles",
      nameAr: "نودلز دجاج شيزوان",
      description: "Spicy Schezwan noodles tossed with tender chicken and flavorful vegetables.",
      descriptionAr: "نودلز شيزوان حارة مع الدجاج الطري والخضروات الغنية بالنكهة.",
      price: "25",
      calories: "360",
      image: "/images/menu/chicken-schezwan-noodles.webp",
    },
  ],
},

// =====================================================
// 8. HYDERABADI SPECIALS
// =====================================================

{
  id: "hyderabadi-specials",
  name: "Hyderabadi Specials Items",
  nameAr: "أطباق حيدر أباد الخاصة",
  image: "/images/menu/categories/hyderabadi-specials.jpg",

  items: [
    {
      id: "mutton-haleem",
      name: "Mutton Haleem",
      nameAr: "لحم ضأن حليم",
      description: "Rich and slow-cooked mutton haleem prepared with lentils, grains and aromatic spices.",
      descriptionAr: "حليم لحم ضأن غني ومطهو ببطء مع العدس والحبوب والتوابل العطرية.",
      image: "/images/menu/mutton-haleem.jpg",
      variants: [
        {
          name: "Single",
          nameAr: "مفرد",
          price: "20",
        },
        {
          name: "Medium",
          nameAr: "متوسط",
          price: "50",
        },
        {
          name: "Large",
          nameAr: "كبير",
          price: "85",
        },
      ],
    },

    {
      id: "chicken-shami-kebab",
      name: "Chicken Shami Kebab",
      nameAr: "كباب شامي دجاج",
      description: "Soft and flavorful chicken shami kebabs prepared with aromatic spices.",
      descriptionAr: "كباب شامي بالدجاج طري وغني بالنكهة ومحضر بالتوابل العطرية.",
      price: "25",
      calories: "220",
      image: "/images/menu/chicken-shami-kebab.jpg",
    },

    {
      id: "mutton-shami-kebab",
      name: "Mutton Shami Kebab",
      nameAr: "كباب شامي لحم",
      description: "Tender mutton shami kebabs blended with lentils and aromatic spices.",
      descriptionAr: "كباب شامي باللحم الطري ممزوج بالعدس والتوابل العطرية.",
      price: "25",
      calories: "290",
      image: "/images/menu/mutton-shami-kebab.jpg",
    },

    {
      id: "khichdi-khatta-kheema",
      name: "Khichdi - Khatta - Kheema",
      nameAr: "خيشدي - خطا - خيمه",
      description: "A classic Hyderabadi combination of soft khichdi, tangy khatta and flavorful kheema.",
      descriptionAr: "مزيج حيدر أباد التقليدي من الخيشدي الطري والخاتا الحامض والكيمة الغنية بالنكهة.",
      price: "35",
      calories: "220",
      image: "/images/menu/khichdi-khatta-kheema.jpg",
    },

    {
      id: "mutton-tahari",
      name: "Mutton Tahari",
      nameAr: "لحم ضأن طاهري",
      description: "Aromatic rice cooked with tender mutton and flavorful spices.",
      descriptionAr: "أرز عطري مطهو مع لحم الضأن الطري والتوابل الغنية بالنكهة.",
      price: "35",
      calories: "300",
      image: "/images/menu/mutton-tahari.jpg",
    },

    {
      id: "mutton-marag",
      name: "Mutton Marag",
      nameAr: "لحم ضأن مرج",
      description: "A flavorful and comforting mutton broth prepared with aromatic spices.",
      descriptionAr: "مرق لحم ضأن لذيذ ودافئ محضر بالتوابل العطرية.",
      price: "35",
      calories: "250",
      image: "/images/menu/mutton-marag.jpg",
    },

    {
      id: "mutton-handi",
      name: "Mutton Handi",
      nameAr: "لحم الضأن هاندي",
      description: "Tender mutton slow-cooked with aromatic spices in a traditional handi.",
      descriptionAr: "لحم ضأن طري مطهو ببطء مع التوابل العطرية في هاندي تقليدي.",
      price: "35",
      calories: "250",
      image: "/images/menu/mutton-handi.jpg",
    },

    {
      id: "mutton-kali-mirchi",
      name: "Mutton Kali Mirchi",
      nameAr: "لحم الضأن كالي ميرشي",
      description: "Tender mutton cooked with aromatic black pepper and rich spices.",
      descriptionAr: "لحم ضأن طري مطهو مع الفلفل الأسود العطري والتوابل الغنية.",
      price: "35",
      calories: "250",
      image: "/images/menu/mutton-kali-mirchi.jpg",
    },

    {
      id: "mutton-hyderabadi",
      name: "Mutton Hyderabadi",
      nameAr: "لحم الضأن حيدر أباد",
      description: "Tender mutton prepared in a rich Hyderabadi-style gravy with aromatic spices.",
      descriptionAr: "لحم ضأن طري محضر بمرق حيدر أباد الغني والتوابل العطرية.",
      price: "35",
      calories: "250",
      image: "/images/menu/mutton-hyderabadi.jpg",
    },

    {
      id: "mutton-mughlai",
      name: "Mutton Mughlai",
      nameAr: "لحم ضأن موغلاي",
      description: "Rich and creamy Mughlai-style mutton prepared with aromatic spices.",
      descriptionAr: "لحم ضأن موغلاي غني وكريمي محضر بالتوابل العطرية.",
      price: "35",
      calories: "250",
      image: "/images/menu/mutton-mughlai.jpg",
    },

    {
      id: "dum-ka-mutton",
      name: "Dum Ka Mutton",
      nameAr: "دوم كا لحم الضأن",
      description: "Tender mutton slow-cooked on dum with rich spices for deep flavor.",
      descriptionAr: "لحم ضأن طري مطهو ببطء بطريقة الدُم مع توابل غنية لنكهة عميقة.",
      price: "35",
      calories: "250",
      image: "/images/menu/dum-ka-mutton.jpg",
    },

    {
      id: "chicken-handi",
      name: "Handi Chicken",
      nameAr: "هاندي دجاج",
      description: "Tender chicken slow-cooked with aromatic spices in a traditional handi.",
      descriptionAr: "دجاج طري مطهو ببطء مع التوابل العطرية في هاندي تقليدي.",
      price: "35",
      calories: "200",
      image: "/images/menu/chicken-handi.jpg",
    },

    {
      id: "chicken-kali-mirchi",
      name: "Mirchi Kali Chicken",
      nameAr: "دجاج كالي ميرشي",
      description: "Tender chicken cooked with black pepper and aromatic spices for a bold flavor.",
      descriptionAr: "دجاج طري مطهو مع الفلفل الأسود والتوابل العطرية لنكهة قوية.",
      price: "35",
      calories: "200",
      image: "/images/menu/chicken-kali-mirchi.jpg",
    },

    {
      id: "chicken-hyderabadi",
      name: "Hyderabadi Chicken",
      nameAr: "دجاج حيدر ابادي",
      description: "Tender chicken cooked in a flavorful Hyderabadi-style gravy with aromatic spices.",
      descriptionAr: "دجاج طري مطهو في مرق حيدر أباد الغني بالتوابل العطرية.",
      price: "35",
      calories: "200",
      image: "/images/menu/chicken-hyderabadi.jpg",
    },

    {
      id: "dum-ka-chicken",
      name: "Chicken Ka Dum",
      nameAr: "دم كا دجاج",
      description: "Tender chicken slow-cooked with aromatic spices using the traditional dum method.",
      descriptionAr: "دجاج طري مطهو ببطء مع التوابل العطرية باستخدام طريقة الدُم التقليدية.",
      price: "35",
      calories: "200",
      image: "/images/menu/dum-ka-chicken.jpg",
    },

    {
      id: "white-rice-khatti-dal",
      name: "White Rice & Khatti Dal",
      nameAr: "أرز أبيض وخاتي دال",
      description: "Steamed white rice served with flavorful and tangy traditional Khatti Dal.",
      descriptionAr: "أرز أبيض مطهو على البخار يقدم مع دال خاتي التقليدي الغني بالنكهة والحموضة.",
      price: "16",
      calories: "200",
      image: "/images/menu/white-rice-khatti-dal.webp",
    },

    {
      id: "bagara-khana-dalcha",
      name: "Bagara Khana - Dalcha",
      nameAr: "باجارا خانا - دالشا",
      description: "Aromatic Bagara rice served with traditional flavorful Dalcha.",
      descriptionAr: "أرز باغارا العطري يقدم مع الدالشا التقليدي الغني بالنكهة.",
      price: "18",
      calories: "240",
      image: "/images/menu/bagara-khana-dalcha.jpg",
    },

    {
      id: "gost-hua-tala",
      name: "Gosht Hua Tala",
      nameAr: "تالا هوا جوشت",
      description: "Flavorful mutton preparation cooked with aromatic spices for a rich traditional taste.",
      descriptionAr: "طبق لحم ضأن غني بالنكهة مطهو مع التوابل العطرية بطعم تقليدي غني.",
      price: "35",
      calories: "360",
      image: "/images/menu/gost-hua-tala.webp",
    },
  ],
},

  // =====================================================
  // 9. DUM BIRYANI
  // =====================================================

 {
  id: "dum-biryani",
  name: "Dum Biryani",
  nameAr: "برياني دوم",
  image: "/images/menu/categories/dum-biryani.jpg",

  items: [
    {
      id: "mutton-dum-biryani",
      name: "Mutton Dum Biryani",
      nameAr: "لحم ضأن دوم برياني",
      description: "Aromatic basmati rice layered with tender mutton and slow-cooked with rich biryani spices.",
      descriptionAr: "أرز بسمتي عطري مع لحم ضأن طري مطهو ببطء مع توابل البرياني الغنية.",
      image: "/images/menu/mutton-dum-biryani.jpeg",

      variants: [
        {
          name: "Regular",
          nameAr: "عادي",
          price: "45",
        },
        {
          name: "Spicy",
          nameAr: "حار",
          price: "45",
        },
        {
          name: "Family",
          nameAr: "عائلي",
          price: "90",
        },
        {
          name: "Jumbo",
          nameAr: "جامبو",
          price: "135",
        },
      ],
    },

    {
      id: "chicken-dum-biryani",
      name: "Chicken Dum Biryani",
      nameAr: "دجاج دوم برياني",
      description: "Fragrant basmati rice layered with tender chicken and slow-cooked with traditional biryani spices.",
      descriptionAr: "أرز بسمتي عطري مع دجاج طري مطهو ببطء مع توابل البرياني التقليدية.",
      image: "/images/menu/chicken-dum-biryani.avif",

      variants: [
        {
          name: "Regular",
          nameAr: "عادي",
          price: "35",
        },
        {
          name: "Family",
          nameAr: "عائلي",
          price: "70",
        },
        {
          name: "Jumbo",
          nameAr: "جامبو",
          price: "115",
        },
      ],
    },

    {
      id: "chicken-65-biryani",
      name: "Chicken 65 Biryani",
      nameAr: "دجاج 65 برياني",
      description: "Flavorful biryani rice combined with crispy Chicken 65 and aromatic spices.",
      descriptionAr: "أرز برياني غني بالنكهة مع دجاج 65 المقرمش والتوابل العطرية.",
      price: "40",
      calories: "350",
      image: "/images/menu/chicken-65-biryani.jpg",
    },

    {
      id: "egg-biryani",
      name: "Egg Biryani",
      nameAr: "برياني بيض",
      description: "Fragrant basmati biryani rice served with flavorful eggs and aromatic spices.",
      descriptionAr: "أرز برياني بسمتي عطري يقدم مع البيض اللذيذ والتوابل العطرية.",
      price: "30",
      calories: "300",
      image: "/images/menu/egg-biryani.jpg",
    },
  ],
},

// =====================================================
// 10. BREADS
// =====================================================

{
  id: "breads",
  name: "Breads",
  nameAr: "الخبز",
  image: "/images/menu/categories/breads.jpg",

  items: [
    {
      id: "roti",
      name: "Roti",
      nameAr: "نان",
      description: "Soft and freshly baked traditional Indian flatbread.",
      descriptionAr: "خبز هندي تقليدي طري ومخبوز طازجًا.",
      price: "2",
      calories: "180",
      image: "/images/menu/roti.webp",
    },

    {
      id: "plain-naan",
      name: "Plain Naan",
      nameAr: "نان عادي",
      description: "Soft and fluffy traditional naan freshly baked in the tandoor.",
      descriptionAr: "نان تقليدي طري وهش مخبوز طازجًا في التنور.",
      price: "3",
      calories: "185",
      image: "/images/menu/plain-naan.jpg",
    },

    {
      id: "butter-naan",
      name: "Butter Naan",
      nameAr: "زبدة نان",
      description: "Soft tandoor-baked naan generously finished with smooth butter.",
      descriptionAr: "نان طري مخبوز في التنور ومغطى بسخاء بالزبدة الناعمة.",
      price: "5",
      calories: "200",
      image: "/images/menu/butter-naan.jpg",
    },

    {
      id: "garlic-naan",
      name: "Garlic Naan",
      nameAr: "ثوم نان",
      description: "Soft tandoor-baked naan topped with aromatic garlic and herbs.",
      descriptionAr: "نان طري مخبوز في التنور ومغطى بالثوم العطري والأعشاب.",
      price: "5",
      calories: "200",
      image: "/images/menu/garlic-naan.jpg",
    },

    {
      id: "lachha-paratha",
      name: "Lachha Paratha",
      nameAr: "لاتشا باراثا",
      description: "Flaky and layered Indian flatbread with a crisp golden texture.",
      descriptionAr: "خبز هندي مورق ومتعدد الطبقات بقوام ذهبي ومقرمش.",
      price: "3",
      calories: "240",
      image: "/images/menu/lachha-paratha.jpg",
    },
  ],
},

// =====================================================
// 11. CURRIES
// =====================================================

{
  id: "curries",
  name: "Curries",
  nameAr: "الكاري",
  image: "/images/menu/categories/curries.jpg",

  items: [
    {
      id: "dal-tadka",
      name: "Dal Tadka",
      nameAr: "دال تادكا",
      description: "Creamy lentils tempered with aromatic spices, herbs and flavorful tadka.",
      descriptionAr: "عدس كريمي متبل بالتوابل العطرية والأعشاب وتتبيلة التادكا اللذيذة.",
      price: "20",
      calories: "180",
      image: "/images/menu/dal-tadka.webp",
    },

    {
      id: "dak-makhni",
      name: "Dak Makhni",
      nameAr: "داك مخني",
      description: "Rich and creamy lentil preparation slow-cooked with aromatic spices.",
      descriptionAr: "طبق عدس غني وكريمي مطهو ببطء مع التوابل العطرية.",
      price: "20",
      calories: "180",
      image: "/images/menu/dak-makhni.webp",
    },

    {
      id: "mater-paneer",
      name: "Mater Paneer",
      nameAr: "ماتر بانير",
      description: "Soft paneer and green peas cooked in a flavorful spiced gravy.",
      descriptionAr: "بانير طري والبازلاء الخضراء مطهوة في مرق متبل وغني بالنكهة.",
      price: "25",
      calories: "180",
      image: "/images/menu/mater-paneer.jpg",
    },

    {
      id: "mater-masala",
      name: "Mater Masala",
      nameAr: "ماتر ماسالا",
      description: "Green peas cooked in a rich and aromatic masala gravy.",
      descriptionAr: "بازلاء خضراء مطهوة في مرق ماسالا غني وعطري.",
      price: "25",
      calories: "180",
      image: "/images/menu/mater-masala.jpg",
    },

    {
      id: "nauratan-khorma",
      name: "Nauratan Khorma",
      nameAr: "نوراتان خورما",
      description: "A rich and creamy mixed vegetable curry prepared with aromatic spices.",
      descriptionAr: "كاري خضروات مشكلة غني وكريمي محضر بالتوابل العطرية.",
      price: "35",
      calories: "190",
      image: "/images/menu/nauratan-khorma.webp",
    },

    {
      id: "mix-veg-curry",
      name: "Mix Veg Curry",
      nameAr: "مزيج الخضار بالكاري",
      description: "Fresh mixed vegetables cooked in a flavorful aromatic curry.",
      descriptionAr: "خضروات مشكلة طازجة مطهوة في كاري عطري غني بالنكهة.",
      price: "30",
      calories: "200",
      image: "/images/menu/mix-veg-curry.jpg",
    },

    {
      id: "palak-paneer",
      name: "Palak Paneer",
      nameAr: "بالاك بانير",
      description: "Soft paneer cooked in a smooth and flavorful spinach-based gravy.",
      descriptionAr: "بانير طري مطهو في مرق ناعم ولذيذ من السبانخ.",
      price: "30",
      calories: "280",
      image: "/images/menu/palak-paneer.jpg",
    },

    {
      id: "butter-paneer-masala",
      name: "Butter Paneer Masala",
      nameAr: "زبدة بانير ماسالا",
      description: "Tender paneer cooked in a rich, creamy and buttery masala gravy.",
      descriptionAr: "بانير طري مطهو في مرق ماسالا غني وكريمي بالزبدة.",
      price: "30",
      calories: "320",
      image: "/images/menu/butter-paneer-masala.jpg",
    },

    {
      id: "butter-chicken",
      name: "Butter Chicken",
      nameAr: "دجاج بالزبدة",
      description: "Tender chicken cooked in a rich, creamy tomato and butter gravy.",
      descriptionAr: "دجاج طري مطهو في مرق غني وكريمي من الطماطم والزبدة.",
      price: "30",
      calories: "350",
      image: "/images/menu/butter-chicken.jpg",
    },

    {
      id: "chicken-masala",
      name: "Chicken Masala",
      nameAr: "دجاج ماسالا",
      description: "Tender chicken cooked with aromatic spices in a rich masala gravy.",
      descriptionAr: "دجاج طري مطهو مع التوابل العطرية في مرق ماسالا غني.",
      price: "30",
      calories: "280",
      image: "/images/menu/chicken-masala.jpg",
    },

    {
      id: "chicken-methi-malai",
      name: "Chicken Methi Malai",
      nameAr: "دجاج ميثي مالاي",
      description: "Tender chicken cooked in a creamy gravy flavored with fragrant fenugreek.",
      descriptionAr: "دجاج طري مطهو في مرق كريمي بنكهة الحلبة العطرية.",
      price: "30",
      calories: "360",
      image: "/images/menu/chicken-methi-malai.jpg",
    },

    {
      id: "dum-ka-chicken-curry",
      name: "Dum Ka Chicken",
      nameAr: "دجاج دوم كا",
      description: "Tender chicken slow-cooked with rich spices using the traditional dum method.",
      descriptionAr: "دجاج طري مطهو ببطء مع توابل غنية باستخدام طريقة الدُم التقليدية.",
      price: "30",
      calories: "300",
      image: "/images/menu/dum-ka-chicken-curry.jpg",
    },

    {
      id: "chicken-masala-special",
      name: "Chicken Masala",
      nameAr: "دجاج ماسالا",
      description: "Flavorful chicken cooked in a rich masala gravy with aromatic spices.",
      descriptionAr: "دجاج غني بالنكهة مطهو في مرق ماسالا غني بالتوابل العطرية.",
      price: "30",
      calories: "320",
      image: "/images/menu/chicken-masala-special.jpg",
    },

    {
      id: "chicken-khorma",
      name: "Chicken Khorma",
      nameAr: "دجاج خورما",
      description: "Tender chicken cooked in a rich and creamy Khorma-style gravy.",
      descriptionAr: "دجاج طري مطهو في مرق خورما غني وكريمي.",
      price: "30",
      calories: "320",
      image: "/images/menu/chicken-khorma.jpg",
    },

    {
      id: "chicken-kadai",
      name: "Chicken Kadai",
      nameAr: "فرخة كاداي",
      description: "Tender chicken cooked with aromatic spices, peppers and onions in Kadai style.",
      descriptionAr: "دجاج طري مطهو مع التوابل العطرية والفلفل والبصل بطريقة الكاداي.",
      price: "30",
      calories: "300",
      image: "/images/menu/chicken-kadai.jpg",
    },

    {
      id: "chicken-do-pyaza",
      name: "Chicken Do Pyaza",
      nameAr: "دجاج دو بيازا",
      description: "Tender chicken cooked with generous amounts of onions and aromatic spices.",
      descriptionAr: "دجاج طري مطهو مع كمية وفيرة من البصل والتوابل العطرية.",
      price: "30",
      calories: "280",
      image: "/images/menu/chicken-do-pyaza.jpg",
    },

    {
      id: "chicken-achari",
      name: "Chicken Achari",
      nameAr: "دجاج أشاري",
      description: "Tender chicken cooked with aromatic pickling spices for a tangy and flavorful taste.",
      descriptionAr: "دجاج طري مطهو مع توابل مخللة عطرية لنكهة حامضة وغنية.",
      price: "30",
      calories: "290",
      image: "/images/menu/chicken-achari.jpg",
    },

    {
      id: "mutton-kheema",
      name: "Mutton Kheema",
      nameAr: "لحم ضأن كيما",
      description: "Minced mutton cooked with aromatic spices for a rich and flavorful curry.",
      descriptionAr: "لحم ضأن مفروم مطهو مع التوابل العطرية لكاري غني ولذيذ.",
      price: "40",
      calories: "350",
      image: "/images/menu/mutton-kheema.jpg",
    },

    {
      id: "mutton-palak",
      name: "Mutton Palak",
      nameAr: "لحم ضأن بالاك",
      description: "Tender mutton cooked in a rich and flavorful spinach-based gravy.",
      descriptionAr: "لحم ضأن طري مطهو في مرق غني ولذيذ من السبانخ.",
      price: "40",
      calories: "320",
      image: "/images/menu/mutton-palak.webp",
    },

    {
      id: "mutton-aloo-methi",
      name: "Mutton Aloo Methi",
      nameAr: "لحم الضأن ألو ميثي",
      description: "Tender mutton cooked with potatoes, fenugreek and aromatic spices.",
      descriptionAr: "لحم ضأن طري مطهو مع البطاطس والحلبة والتوابل العطرية.",
      price: "40",
      calories: "330",
      image: "/images/menu/mutton-aloo-methi.jpg",
    },

    {
      id: "mutton-masala",
      name: "Mutton Masala",
      nameAr: "لحم ضأن ماسالا",
      description: "Tender mutton cooked in a rich masala gravy with aromatic spices.",
      descriptionAr: "لحم ضأن طري مطهو في مرق ماسالا غني بالتوابل العطرية.",
      price: "40",
      calories: "360",
      image: "/images/menu/mutton-masala.jpg",
    },

    {
      id: "mutton-khorma",
      name: "Mutton Khorma",
      nameAr: "لحم ضأن كورما",
      description: "Tender mutton cooked in a rich and creamy Khorma-style gravy.",
      descriptionAr: "لحم ضأن طري مطهو في مرق خورما غني وكريمي.",
      price: "40",
      calories: "360",
      image: "/images/menu/mutton-khorma.jpg",
    },

    {
      id: "mutton-kadai",
      name: "Mutton Kadai",
      nameAr: "لحم ضأن كاداي",
      description: "Tender mutton cooked with peppers, onions and aromatic spices in Kadai style.",
      descriptionAr: "لحم ضأن طري مطهو مع الفلفل والبصل والتوابل العطرية بطريقة الكاداي.",
      price: "40",
      calories: "340",
      image: "/images/menu/mutton-kadai.jpg",
    },

    {
      id: "mutton-mughlai",
      name: "Mutton Mughlai",
      nameAr: "لحم ضأن موغلاي",
      description: "Rich Mughlai-style mutton prepared with aromatic spices and a creamy gravy.",
      descriptionAr: "لحم ضأن موغلاي غني محضر بالتوابل العطرية ومرق كريمي.",
      price: "40",
      calories: "380",
      image: "/images/menu/mutton-mughlai.jpg",
    },

    {
      id: "mutton-afghani",
      name: "Mutton Afghani",
      nameAr: "لحم ضأن أفغاني",
      description: "Tender mutton prepared in a rich Afghani-style creamy and aromatic gravy.",
      descriptionAr: "لحم ضأن طري محضر بمرق أفغاني غني وكريمي وعطري.",
      price: "40",
      calories: "370",
      image: "/images/menu/mutton-afghani.jpg",
    },
  ],
},
  // =====================================================
  // 12. COMBO MEALS
  // =====================================================

  {
  id: "combo-meals",
  name: "Combo Meals",
  nameAr: "وجبات كومبو",
  image: "/images/menu/categories/combo-meals.jpg",

  items: [
    {
      id: "mutton-fry-jeera-dal",
      name: "Mutton Fry + Jeera Rice + Dal Tadka",
      nameAr: "لحم ضأن مقلي + أرز جيرا + دال تادكا",
      description: "A hearty combination of crispy mutton fry, fragrant jeera rice and flavorful dal tadka.",
      descriptionAr: "مزيج شهي من لحم الضأن المقلي المقرمش وأرز الجيرا العطري ودال التادكا الغني بالنكهة.",
      price: "35",
      image: "/images/menu/mutton-fry-jeera-dal.png",
    },

    {
      id: "chicken-65-jeera-dal",
      name: "Chicken 65 + Jeera Rice + Dal Tadka",
      nameAr: "دجاج 65 + أرز جيرا + دال تادكا",
      description: "Crispy Chicken 65 served with fragrant jeera rice and flavorful dal tadka.",
      descriptionAr: "دجاج 65 مقرمش يقدم مع أرز الجيرا العطري ودال التادكا الغني بالنكهة.",
      price: "35",
      image: "/images/menu/chicken-65-jeera-dal.png",
    },

    {
      id: "chicken-fry-jeera-dal",
      name: "Chicken Fry + Jeera Rice + Dal Tadka",
      nameAr: "دجاج مقلي + أرز جيرا + دال تادكا",
      description: "Flavorful chicken fry served with aromatic jeera rice and traditional dal tadka.",
      descriptionAr: "دجاج مقلي غني بالنكهة يقدم مع أرز الجيرا العطري ودال التادكا التقليدي.",
      price: "35",
      image: "/images/menu/chicken-fry-jeera-dal.png",
    },

    {
      id: "crispy-chicken-rice",
      name: "Crispy Chicken Rice",
      nameAr: "أرز الدجاج المقرمش",
      description: "Crispy seasoned chicken served with flavorful rice for a satisfying combination.",
      descriptionAr: "دجاج مقرمش ومتبل يقدم مع أرز غني بالنكهة لوجبة شهية ومشبعة.",
      price: "30",
      image: "/images/menu/crispy-chicken-rice.png",
    },
  ],
},

// =====================================================
// 13. DESSERTS
// =====================================================

{
  id: "desserts",
  name: "Desserts",
  nameAr: "الحلويات",
  image: "/images/menu/categories/desserts.jpg",

  items: [
    {
      id: "gulab-jamun",
      name: "Gulab Jamun",
      nameAr: "جولاب جامون",
      description: "3 Pieces of soft golden dumplings soaked in sweet and fragrant sugar syrup.",
      descriptionAr: "3 قطع من كرات الحلوى الذهبية والطرية المنقوعة في شراب سكري حلو وعطري.",
      price: "15",
      calories: "180",
      image: "/images/menu/gulab-jamun.avif",
    },

    {
      id: "gajar-ka-halwa",
      name: "Gajar Ka Halwa",
      nameAr: "جاجار كا حلوة",
      description: "Traditional Indian carrot dessert slow-cooked with milk, sugar and aromatic flavors.",
      descriptionAr: "حلوى هندية تقليدية من الجزر مطهوة ببطء مع الحليب والسكر والنكهات العطرية.",
      price: "20",
      calories: "220",
      image: "/images/menu/gajar-ka-halwa.jpg",
    },

    {
      id: "khubani-ka-meetha",
      name: "Khubani Ka Meetha",
      nameAr: "خوباني كا میثا",
      description: "Traditional Hyderabadi dessert made with sweet stewed apricots and rich flavors.",
      descriptionAr: "حلوى حيدر أباد التقليدية المصنوعة من المشمش المطهو الحلو والنكهات الغنية.",
      price: "25",
      calories: "300",
      image: "/images/menu/khubani-ka-meetha.jpg",
    },

    {
      id: "kaddu-ki-kheer",
      name: "Kaddu Ki Kheer",
      nameAr: "كادو كي خیر",
      description: "Creamy traditional kheer prepared with pumpkin, milk, sugar and aromatic spices.",
      descriptionAr: "خير تقليدي كريمي محضر بالقرع والحليب والسكر والتوابل العطرية.",
      price: "25",
      calories: "240",
      image: "/images/menu/kaddu-ki-kheer.jpg",
    },

    {
      id: "shahi-tukda",
      name: "Shahi Tukda",
      nameAr: "شاھي توكدا",
      description: "Rich royal dessert made with sweetened bread, creamy milk and aromatic flavors.",
      descriptionAr: "حلوى ملكية غنية مصنوعة من الخبز الحلو والحليب الكريمي والنكهات العطرية.",
      price: "15",
      calories: "220",
      image: "/images/menu/shahi-tukda.jpg",
    },

    {
      id: "shahi-kheer",
      name: "Shahi Kheer",
      nameAr: "شاھي خیر",
      description: "Creamy rice pudding slow-cooked with milk, sugar and aromatic ingredients.",
      descriptionAr: "بودينغ أرز كريمي مطهو ببطء مع الحليب والسكر والمكونات العطرية.",
      price: "15",
      calories: "240",
      image: "/images/menu/shahi-kheer.jpg",
    },

    {
      id: "badam-ki-kheer",
      name: "Badam Ki Kheer",
      nameAr: "بادام كي خیر",
      description: "Rich and creamy almond kheer prepared with milk, almonds and aromatic flavors.",
      descriptionAr: "خير اللوز الغني والكريمي محضر بالحليب واللوز والنكهات العطرية.",
      price: "20",
      calories: "260",
      image: "/images/menu/badam-ki-kheer.jpg",
    },
  ],
},

  // =====================================================
  // 14. DRINKS
  // =====================================================

 {
  id: "drinks",
  name: "Drinks",
  nameAr: "المشروبات",
  image: "/images/menu/categories/drinks.jpg",

  items: [
    {
      id: "water-330ml",
      name: "Water 330 ML",
      nameAr: "ماء 330 مل",
      description: "Refreshing bottled drinking water, 330 ML.",
      descriptionAr: "مياه شرب منعشة ومعبأة بحجم 330 مل.",
      price: "2",
      calories: "140",
      image: "/images/menu/water-330ml.png",
    },

    {
      id: "water-1-5-liter",
      name: "Water 1.5 Liter",
      nameAr: "ماء 1.5 لتر",
      description: "Refreshing bottled drinking water, 1.5 Liter.",
      descriptionAr: "مياه شرب منعشة ومعبأة بحجم 1.5 لتر.",
      price: "3",
      image: "/images/menu/water-1-5-liter.png",
    },

    {
      id: "pepsi",
      name: "Pepsi",
      nameAr: "بيبسي",
      description: "Chilled and refreshing Pepsi soft drink.",
      descriptionAr: "مشروب بيبسي غازي بارد ومنعش.",
      price: "5",
      calories: "140",
      image: "/images/menu/pepsi.jpg",
    },

    {
      id: "pepsi-diet",
      name: "Pepsi Diet",
      nameAr: "بيبسي دايت",
      description: "Refreshing Pepsi Diet soft drink with a lighter taste.",
      descriptionAr: "مشروب بيبسي دايت غازي ومنعش بطعم أخف.",
      price: "5",
      image: "/images/menu/pepsi-diet.jpeg",
    },

    {
      id: "7up",
      name: "7UP",
      nameAr: "سفن أب",
      description: "Crisp, cool and refreshing lemon-lime soft drink.",
      descriptionAr: "مشروب غازي منعش وبارد بنكهة الليمون واللايم.",
      price: "5",
      calories: "140",
      image: "/images/menu/7up.jpg",
    },

    {
      id: "mirinda-orange",
      name: "Mirinda Orange",
      nameAr: "میرندا حمضیات",
      description: "Refreshing orange-flavored carbonated soft drink.",
      descriptionAr: "مشروب غازي منعش بنكهة البرتقال.",
      price: "5",
      calories: "160",
      image: "/images/menu/mirinda-orange.jpg",
    },

    {
      id: "mirinda-citrus",
      name: "Mirinda Citrus",
      nameAr: "میرندا حمضیات",
      description: "Refreshing citrus-flavored carbonated soft drink.",
      descriptionAr: "مشروب غازي منعش بنكهة الحمضيات.",
      price: "5",
      calories: "160",
      image: "/images/menu/mirinda-citrus.jpg",
    },

    {
      id: "kinza-kola",
      name: "Kinza Kola",
      nameAr: "كینزا كولا",
      description: "Refreshing chilled cola soft drink.",
      descriptionAr: "مشروب كولا غازي بارد ومنعش.",
      price: "5",
      calories: "130",
      image: "/images/menu/kinza-kola.webp",
    },

    {
      id: "kinza-diet",
      name: "Kinza Diet",
      nameAr: "كینزا دايت",
      description: "Refreshing Kinza Diet cola soft drink with a lighter taste.",
      descriptionAr: "مشروب كينزا دايت غازي ومنعش بطعم أخف.",
      price: "5",
      image: "/images/menu/kinza-diet.webp",
    },
  ],
},
];