export interface MenuItem {
  id: string;

  // English
  name: string;

  // Arabic
  nameAr?: string;

  // Descriptions - can be added later
  description?: string;
  descriptionAr?: string;

  // Price
  price?: string;

  // Calories
  calories?: string;

  // Food image - client can provide later
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

    items: [
      {
        id: "idli",
        name: "Idli",
        nameAr: "إدلي",
        description: "3 Pieces",
        price: "10",
        calories: "180",
         image: "/images/menu/idli.jpg",
      },

      {
        id: "idli-vada",
        name: "Idli + Vada",
        nameAr: "إدلي + فادا",
        description: "3 Pieces",
        price: "10",
         image: "/images/menu/vada.jpg",
      },

      {
        id: "vada",
        name: "Vada",
        nameAr: "فادا",
        description: "3 Pieces",
        price: "10",
        calories: "350",
         image: "/images/menu/idli.jpg",
      },

      {
        id: "sambar-dip-idli",
        name: "Sambar Dip Idli",
        nameAr: "إیدلي سامبار",
        description: "2 Pieces",
        price: "10",
        calories: "200",
         image: "/images/menu/vada.jpg",
      },

      {
        id: "sambar-dip-vada",
        name: "Sambar Dip Vada",
        nameAr: "فادا سامبار",
        description: "2 Pieces",
        price: "10",
        calories: "250",
         image: "/images/menu/idli.jpg",
      },

      {
        id: "idli-vada-dip-sambar",
        name: "Idli + Vada Dip Sambar",
        nameAr: "إیدلي + فادا سامبار",
        description: "2 Pieces",
        price: "10",
        calories: "300",
         image: "/images/menu/idli.jpg",
      },

      {
        id: "mysore-bonda",
        name: "Mysore Bonda",
        nameAr: "بوندا میسور",
        description: "3 Pieces",
        price: "10",
        calories: "300",
         image: "/images/menu/bonda.jpg",
      },

      {
        id: "upma",
        name: "Upma",
        nameAr: "أوبما",
        price: "10",
        calories: "220",
         image: "/images/menu/upma.jpg",
      },

      {
        id: "plain-dosa",
        name: "Plain Dosa",
        nameAr: "دوسة عادي",
        price: "10",
        calories: "120",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "uttappam",
        name: "Uttappam",
        nameAr: "أوتابام",
        price: "12",
        calories: "200",
         image: "/images/menu/idli.jpg",
      },

      {
        id: "poori",
        name: "Poori",
        nameAr: "بوري",
        description: "3 Pieces",
        price: "12",
        calories: "250",
         image: "/images/menu/puri.jpg",
      },

      {
        id: "halwa-poori",
        name: "Halwa Poori",
        nameAr: "بوري",
        price: "12",
        calories: "250",
         image: "/images/menu/puri.jpg",
      },

      {
        id: "masala-dosa",
        name: "Masala Dosa",
        nameAr: "ماسالا دوسة",
        price: "12",
        calories: "250",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "onion-dosa",
        name: "Onion Dosa",
        nameAr: "دوسة البصل",
        price: "12",
        calories: "200",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "butter-dosa",
        name: "Butter Dosa",
        nameAr: "دوسة الزبدة",
        price: "12",
        calories: "250",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "paneer-dosa",
        name: "Paneer Dosa",
        nameAr: "بانير دوسة",
        price: "12",
        calories: "300",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "ghee-roast-dosa",
        name: "Ghee Roast Dosa",
        nameAr: "دوسة سمن",
        price: "12",
        calories: "350",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "ghee-karam-dosa",
        name: "Ghee Karam Dosa",
        nameAr: "سمن دوسة",
        price: "12",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "upma-dosa",
        name: "Upma Dosa",
        nameAr: "أوما دوسة",
        price: "12",
        calories: "250",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "rava-dosa",
        name: "Rava Dosa",
        nameAr: "رافا دوسة",
        price: "12",
        calories: "220",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "idli-dosa",
        name: "Idli Dosa",
        nameAr: "إیدلي دوسة",
        price: "12",
        calories: "220",
         image: "/images/menu/dosa.jpg",
      },

      {
        id: "flower-dosa",
        name: "Flower Dosa",
        nameAr: "زھرة دوسة",
        price: "12",
        calories: "200",
        image: "/images/menu/dosa.jpg",
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
    items: [],
  },

  // =====================================================
  // 3. HOT SOUPS
  // =====================================================

  {
    id: "hot-soups",
    name: "Hot Soups",
    nameAr: "الشوربات الساخنة",

    items: [
      {
        id: "veg-hot-sour-soup",
        name: "Veg Hot & Sour Soup",
        nameAr: "شوربة خضار حارة وحامضة",
        price: "14",
        calories: "100",
        image: "/images/menu/soup.jpg",
      },

      {
        id: "veg-corn-soup",
        name: "Veg Corn Soup",
        nameAr: "شوربة خضار بالذرة",
        price: "14",
        calories: "120",
        image: "/images/menu/soup.jpg",
      },

      {
        id: "veg-manchow-soup",
        name: "Veg Manchow Soup",
        nameAr: "شوربة خضار مانشو",
        price: "14",
        calories: "110",
        image: "/images/menu/soup.jpg",
      },

      {
        id: "chicken-hot-sour-soup",
        name: "Chicken Hot & Sour Soup",
        nameAr: "شوربة دجاج حارة",
        price: "16",
        calories: "140",
        image: "/images/menu/soup.jpg",
      },

      {
        id: "chicken-corn-soup",
        name: "Chicken Corn Soup",
        nameAr: "شوربة دجاج بالذرة",
        price: "16",
        calories: "160",
        image: "/images/menu/soup.jpg",
      },

      {
        id: "chicken-manchow-soup",
        name: "Chicken Manchow Soup",
        nameAr: "شوربة دجاج مانشو",
        price: "16",
        calories: "150",
        image: "/images/menu/soup.jpg",
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

    items: [
      {
        id: "veg-spring-roll",
        name: "Veg Spring Roll",
        nameAr: "سبرينغ رول خضار",
        price: "25",
        calories: "180",
      },

      {
        id: "gobi-manchurian",
        name: "Gobi Manchurian",
        nameAr: "غوبي مانشوريان",
        price: "25",
        calories: "220",
      },

      {
        id: "chicken-spring-roll",
        name: "Chicken Spring Roll",
        nameAr: "سبرينغ رول دجاج",
        price: "30",
        calories: "220",
      },

      {
        id: "chicken-fry",
        name: "Chicken Fry",
        nameAr: "دجاج مقلي",
        price: "35",
        calories: "330",
      },

      {
        id: "chicken-lollipop",
        name: "Chicken Lollipop",
        nameAr: "دجاج لولي بوب",
        price: "35",
        calories: "320",
      },

      {
        id: "chicken-65",
        name: "Chicken 65",
        nameAr: "دجاج 65",
        price: "35",
        calories: "380",
      },

      {
        id: "chicken-manchurian",
        name: "Chicken Manchurian",
        nameAr: "دجاج مانشوريان",
        price: "35",
        calories: "300",
      },

      {
        id: "chicken-chilli",
        name: "Chilli Chicken",
        nameAr: "دجاج حار",
        price: "35",
        calories: "300",
      },

      {
        id: "pepper-chicken",
        name: "Pepper Chicken",
        nameAr: "دجاج بالفلفل",
        price: "35",
        calories: "340",
      },

      {
        id: "thread-chicken",
        name: "Thread Chicken",
        nameAr: "دجاج ثريد",
        price: "35",
        calories: "380",
      },

      {
        id: "majestic-chicken",
        name: "Majestic Chicken",
        nameAr: "دجاج ماجستيك",
        price: "35",
        calories: "400",
      },

      {
        id: "fish-fry",
        name: "Fish Fry",
        nameAr: "سمك مقلي",
        price: "35",
        calories: "360",
      },

      {
        id: "apollo-chilli-fish",
        name: "Apollo / Chilli Fish",
        nameAr: "سمك أبولو / حار",
        price: "40",
        calories: "380",
      },

      {
        id: "finger-fish",
        name: "Finger Fish",
        nameAr: "سمك فينجرفيش",
        price: "40",
        calories: "450",
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

    items: [
      {
        id: "chicken-sizzler",
        name: "Chicken Sizzler",
        nameAr: "دجاج سیزلر",
        price: "40",
        calories: "450",
      },

      {
        id: "fish-sizzler",
        name: "Fish Sizzler",
        nameAr: "سمك سیزلر",
        price: "40",
        calories: "450",
      },

      {
        id: "prawn-sizzler",
        name: "Prawn Sizzler",
        nameAr: "روبیان سیزلر",
        price: "40",
        calories: "450",
      },

      {
        id: "mutton-sizzler",
        name: "Mutton Sizzler",
        nameAr: "لحم ضأن سيزلر",
        price: "40",
        calories: "450",
      },

      {
        id: "golden-fried-prawns",
        name: "Golden Fried Prawns",
        nameAr: "روبیان مقلي",
        price: "40",
        calories: "500",
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

    items: [
      {
        id: "chicken-seekh-kebab",
        name: "Chicken Seekh Kebab",
        nameAr: "سيخ كباب دجاج",
        price: "30",
        calories: "290",
        image: "/images/menu/kebab.jpg",
      },

      {
        id: "mutton-seekh-kebab",
        name: "Mutton Seekh Kebab",
        nameAr: "لحم ضأن سيخ كباب",
        price: "35",
        calories: "320",
      },

      {
        id: "chicken-tikka",
        name: "Chicken Tikka",
        nameAr: "دجاج تكا",
        price: "30",
        calories: "280",
      },

      {
        id: "chicken-malai-kebab",
        name: "Chicken Malai Kebab",
        nameAr: "كباب دجاج مالاي",
        price: "35",
        calories: "320",
      },

      {
        id: "chicken-hariyali-kebab",
        name: "Chicken Hariyali Kebab",
        nameAr: "كباب دجاج هاريالي",
        price: "30",
        calories: "300",
      },

      {
        id: "chicken-tangdi",
        name: "Chicken Tangdi",
        nameAr: "دجاج تانجدي",
        description: "2 Pieces",
        price: "35",
        calories: "360",
      },

      {
        id: "tandoori-chicken-half",
        name: "Tandoori Chicken Half",
        nameAr: "نصف دجاج تندوري",
        price: "40",
        calories: "300",
      },

      {
        id: "tandoori-chicken-full",
        name: "Tandoori Chicken Full",
        nameAr: "دجاج تندوري كامل",
        price: "70",
        calories: "600",
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

    items: [
      {
        id: "veg-fried-rice",
        name: "Veg Fried Rice",
        nameAr: "أرز مقلي بالخضار",
        price: "25",
        calories: "280",
      },

      {
        id: "jeera-rice",
        name: "Jeera Rice",
        nameAr: "أرز جيرا",
        price: "25",
        calories: "280",
      },

      {
        id: "chicken-fried-rice",
        name: "Chicken Fried Rice",
        nameAr: "أرز مقلي بالدجاج",
        price: "30",
        calories: "320",
      },

      {
        id: "veg-noodles",
        name: "Veg Noodles",
        nameAr: "نودلز بالخضار",
        price: "25",
        calories: "320",
      },

      {
        id: "egg-noodles",
        name: "Egg Noodles",
        nameAr: "نودلز البيض",
        price: "25",
        calories: "380",
      },

      {
        id: "chicken-schezwan-noodles",
        name: "Chicken Schezwan Noodles",
        nameAr: "نودلز دجاج شيزوان",
        price: "25",
        calories: "360",
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

    items: [
      {
        id: "mutton-haleem",
        name: "Mutton Haleem",
        nameAr: "لحم ضأن حليم",
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
        price: "25",
        calories: "220",
      },

      {
        id: "mutton-shami-kebab",
        name: "Mutton Shami Kebab",
        nameAr: "كباب شامي لحم",
        price: "25",
        calories: "290",
      },

      {
        id: "khichdi-khatta-kheema",
        name: "Khichdi - Khatta - Kheema",
        nameAr: "خيشدي - خطا - خيمه",
        price: "35",
        calories: "220",
      },

      {
        id: "mutton-tahari",
        name: "Mutton Tahari",
        nameAr: "لحم ضأن طاهري",
        price: "35",
        calories: "300",
      },

      {
        id: "mutton-marag",
        name: "Mutton Marag",
        nameAr: "لحم ضأن مرج",
        price: "35",
        calories: "250",
      },

      {
        id: "mutton-handi",
        name: "Mutton Handi",
        nameAr: "لحم الضأن هاندي",
        price: "35",
        calories: "250",
      },

      {
        id: "mutton-kali-mirchi",
        name: "Mutton Kali Mirchi",
        nameAr: "لحم الضأن كالي ميرشي",
        price: "35",
        calories: "250",
      },

      {
        id: "mutton-hyderabadi",
        name: "Mutton Hyderabadi",
        nameAr: "لحم الضأن حيدر أباد",
        price: "35",
        calories: "250",
      },

      {
        id: "mutton-mughlai",
        name: "Mutton Mughlai",
        nameAr: "لحم ضأن موغلاي",
        price: "35",
        calories: "250",
      },

      {
        id: "dum-ka-mutton",
        name: "Dum Ka Mutton",
        nameAr: "دوم كا لحم الضأن",
        price: "35",
        calories: "250",
      },

      {
        id: "chicken-handi",
        name: "Handi Chicken",
        nameAr: "هاندي دجاج",
        price: "35",
        calories: "200",
      },

      {
        id: "chicken-kali-mirchi",
        name: "Mirchi Kali Chicken",
        nameAr: "دجاج كالي ميرشي",
        price: "35",
        calories: "200",
      },

      {
        id: "chicken-hyderabadi",
        name: "Hyderabadi Chicken",
        nameAr: "دجاج حيدر ابادي",
        price: "35",
        calories: "200",
      },

      {
        id: "dum-ka-chicken",
        name: "Chicken Ka Dum",
        nameAr: "دم كا دجاج",
        price: "35",
        calories: "200",
      },

      {
        id: "white-rice-khatti-dal",
        name: "White Rice & Khatti Dal",
        nameAr: "أرز أبيض وخاتي دال",
        price: "16",
        calories: "200",
      },

      {
        id: "bagara-khana-dalcha",
        name: "Bagara Khana - Dalcha",
        nameAr: "باجارا خانا - دالشا",
        price: "18",
        calories: "240",
      },

      {
        id: "gost-hua-tala",
        name: "Gosht Hua Tala",
        nameAr: "تالا هوا جوشت",
        price: "35",
        calories: "360",
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

    items: [
      {
        id: "mutton-dum-biryani",
        name: "Mutton Dum Biryani",
        nameAr: "لحم ضأن دوم برياني",

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
        price: "40",
        calories: "350",
      },

      {
        id: "egg-biryani",
        name: "Egg Biryani",
        nameAr: "برياني بيض",
        price: "30",
        calories: "300",
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

    items: [
      {
        id: "roti",
        name: "Roti",
        nameAr: "نان",
        price: "2",
        calories: "180",
      },

      {
        id: "plain-naan",
        name: "Plain Naan",
        nameAr: "نان عادي",
        price: "3",
        calories: "185",
      },

      {
        id: "butter-naan",
        name: "Butter Naan",
        nameAr: "زبدة نان",
        price: "5",
        calories: "200",
      },

      {
        id: "garlic-naan",
        name: "Garlic Naan",
        nameAr: "ثوم نان",
        price: "5",
        calories: "200",
      },

      {
        id: "lachha-paratha",
        name: "Lachha Paratha",
        nameAr: "لاتشا باراثا",
        price: "3",
        calories: "240",
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

    items: [
      {
        id: "dal-tadka",
        name: "Dal Tadka",
        nameAr: "دال تادكا",
        price: "20",
        calories: "180",
      },

      {
        id: "dak-makhni",
        name: "Dak Makhni",
        nameAr: "داك مخني",
        price: "20",
        calories: "180",
      },

      {
        id: "mater-paneer",
        name: "Mater Paneer",
        nameAr: "ماتر بانير",
        price: "25",
        calories: "180",
      },

      {
        id: "mater-masala",
        name: "Mater Masala",
        nameAr: "ماتر ماسالا",
        price: "25",
        calories: "180",
      },

      {
        id: "nauratan-khorma",
        name: "Nauratan Khorma",
        nameAr: "نوراتان خورما",
        price: "35",
        calories: "190",
      },

      {
        id: "mix-veg-curry",
        name: "Mix Veg Curry",
        nameAr: "مزيج الخضار بالكاري",
        price: "30",
        calories: "200",
      },

      {
        id: "palak-paneer",
        name: "Palak Paneer",
        nameAr: "بالاك بانير",
        price: "30",
        calories: "280",
      },

      {
        id: "butter-paneer-masala",
        name: "Butter Paneer Masala",
        nameAr: "زبدة بانير ماسالا",
        price: "30",
        calories: "320",
      },

      {
        id: "butter-chicken",
        name: "Butter Chicken",
        nameAr: "دجاج بالزبدة",
        price: "30",
        calories: "350",
      },

      {
        id: "chicken-masala",
        name: "Chicken Masala",
        nameAr: "دجاج ماسالا",
        price: "30",
        calories: "280",
      },

      {
        id: "chicken-methi-malai",
        name: "Chicken Methi Malai",
        nameAr: "دجاج ميثي مالاي",
        price: "30",
        calories: "360",
      },

      {
        id: "dum-ka-chicken-curry",
        name: "Dum Ka Chicken",
        nameAr: "دجاج دوم كا",
        price: "30",
        calories: "300",
      },

      {
        id: "chicken-masala-special",
        name: "Chicken Masala",
        nameAr: "دجاج ماسالا",
        price: "30",
        calories: "320",
      },

      {
        id: "chicken-khorma",
        name: "Chicken Khorma",
        nameAr: "دجاج خورما",
        price: "30",
        calories: "320",
      },

      {
        id: "chicken-kadai",
        name: "Chicken Kadai",
        nameAr: "فرخة كاداي",
        price: "30",
        calories: "300",
      },

      {
        id: "chicken-do-pyaza",
        name: "Chicken Do Pyaza",
        nameAr: "دجاج دو بيازا",
        price: "30",
        calories: "280",
      },

      {
        id: "chicken-achari",
        name: "Chicken Achari",
        nameAr: "دجاج أشاري",
        price: "30",
        calories: "290",
      },

      {
        id: "mutton-kheema",
        name: "Mutton Kheema",
        nameAr: "لحم ضأن كيما",
        price: "40",
        calories: "350",
      },

      {
        id: "mutton-palak",
        name: "Mutton Palak",
        nameAr: "لحم ضأن بالاك",
        price: "40",
        calories: "320",
      },

      {
        id: "mutton-aloo-methi",
        name: "Mutton Aloo Methi",
        nameAr: "لحم الضأن ألو ميثي",
        price: "40",
        calories: "330",
      },

      {
        id: "mutton-masala",
        name: "Mutton Masala",
        nameAr: "لحم ضأن ماسالا",
        price: "40",
        calories: "360",
      },

      {
        id: "mutton-khorma",
        name: "Mutton Khorma",
        nameAr: "لحم ضأن كورما",
        price: "40",
        calories: "360",
      },

      {
        id: "mutton-kadai",
        name: "Mutton Kadai",
        nameAr: "لحم ضأن كاداي",
        price: "40",
        calories: "340",
      },

      {
        id: "mutton-mughlai",
        name: "Mutton Mughlai",
        nameAr: "لحم ضأن موغلاي",
        price: "40",
        calories: "380",
      },

      {
        id: "mutton-afghani",
        name: "Mutton Afghani",
        nameAr: "لحم ضأن أفغاني",
        price: "40",
        calories: "370",
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

    items: [
      {
        id: "mutton-fry-jeera-dal",
        name: "Mutton Fry + Jeera Rice + Dal Tadka",
        nameAr: "لحم ضأن مقلي + أرز جيرا + دال تادكا",
        price: "35",
      },

      {
        id: "chicken-65-jeera-dal",
        name: "Chicken 65 + Jeera Rice + Dal Tadka",
        nameAr: "دجاج 65 + أرز جيرا + دال تادكا",
        price: "35",
      },

      {
        id: "chicken-fry-jeera-dal",
        name: "Chicken Fry + Jeera Rice + Dal Tadka",
        nameAr: "دجاج مقلي + أرز جيرا + دال تادكا",
        price: "35",
      },

      {
        id: "crispy-chicken-rice",
        name: "Crispy Chicken Rice",
        nameAr: "أرز الدجاج المقرمش",
        price: "30",
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

    items: [
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        nameAr: "جولاب جامون",
        description: "3 Pieces",
        price: "15",
        calories: "180",
      },

      {
        id: "gajar-ka-halwa",
        name: "Gajar Ka Halwa",
        nameAr: "جاجار كا حلوة",
        price: "20",
        calories: "220",
      },

      {
        id: "khubani-ka-meetha",
        name: "Khubani Ka Meetha",
        nameAr: "خوباني كا میثا",
        price: "25",
        calories: "300",
      },

      {
        id: "kaddu-ki-kheer",
        name: "Kaddu Ki Kheer",
        nameAr: "كادو كي خیر",
        price: "25",
        calories: "240",
      },

      {
        id: "shahi-tukda",
        name: "Shahi Tukda",
        nameAr: "شاھي توكدا",
        price: "15",
        calories: "220",
      },

      {
        id: "shahi-kheer",
        name: "Shahi Kheer",
        nameAr: "شاھي خیر",
        price: "15",
        calories: "240",
      },

      {
        id: "badam-ki-kheer",
        name: "Badam Ki Kheer",
        nameAr: "بادام كي خیر",
        price: "20",
        calories: "260",
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

    items: [
      {
        id: "water-330ml",
        name: "Water 330 ML",
        nameAr: "ماء 330 مل",
        price: "2",
        calories: "140",
      },

      {
        id: "water-1-5-liter",
        name: "Water 1.5 Liter",
        nameAr: "ماء 1.5 لتر",
        price: "3",
      },

      {
        id: "pepsi",
        name: "Pepsi",
        nameAr: "بيبسي",
        price: "5",
        calories: "140",
      },

      {
        id: "pepsi-diet",
        name: "Pepsi Diet",
        nameAr: "بيبسي دايت",
        price: "5",
      },

      {
        id: "7up",
        name: "7UP",
        nameAr: "سفن أب",
        price: "5",
        calories: "140",
      },

      {
        id: "mirinda-orange",
        name: "Mirinda Orange",
        nameAr: "میرندا حمضیات",
        price: "5",
        calories: "160",
      },

      {
        id: "mirinda-citrus",
        name: "Mirinda Citrus",
        nameAr: "میرندا حمضیات",
        price: "5",
        calories: "160",
      },

      {
        id: "kinza-kola",
        name: "Kinza Kola",
        nameAr: "كینزا كولا",
        price: "5",
        calories: "130",
      },

      {
        id: "kinza-diet",
        name: "Kinza Diet",
        nameAr: "كینزا دايت",
        price: "5",
      },
    ],
  },
];