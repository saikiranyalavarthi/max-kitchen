export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  calories?: string;
  image?: string;
  variants?: {
    name: string;
    price: string;
  }[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      {
        id: "idli",
        name: "Idli",
        price: "18",
      },
      {
        id: "vada",
        name: "Vada",
        price: "20",
      },
      {
        id: "sambar-idli",
        name: "Dip Sambar Idli",
        description: "2 Pieces",
        price: "22",
      },
      {
        id: "sambar-vada",
        name: "Dip Sambar Vada",
        description: "2 Pieces",
        price: "25",
      },
      {
        id: "mysore-bonda",
        name: "Mysore Bonda",
        description: "3 Pieces",
        price: "20",
      },
      {
        id: "plain-dosa",
        name: "Plain Dosa",
        price: "22",
      },
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        price: "22",
      },
      {
        id: "onion-dosa",
        name: "Onion Dosa",
        price: "20",
      },
      {
        id: "rava-dosa",
        name: "Rava Dosa",
        price: "20",
      },
      {
        id: "paneer-dosa",
        name: "Paneer Dosa",
        price: "30",
      },
    ],
  },

  {
    id: "appetizers-sizzlers",
    name: "Appetizers / Sizzlers",
    items: [
      {
        id: "veg-spring-roll",
        name: "Veg Spring Roll",
        price: "19",
      },
      {
        id: "gobi-manchurian",
        name: "Gobi Manchurian",
        price: "21",
      },
      {
        id: "chicken-spring-roll",
        name: "Chicken Spring Roll",
        price: "25",
      },
      {
        id: "chicken-fry",
        name: "Chicken Fry",
        price: "30",
      },
      {
        id: "chicken-lollipop",
        name: "Chicken Lollipop",
        price: "29",
      },
      {
        id: "chicken-65",
        name: "Chicken 65",
        price: "29",
      },
      {
        id: "chicken-manchurian",
        name: "Chicken Manchurian",
        price: "29",
      },
      {
        id: "pepper-chicken",
        name: "Pepper Chicken",
        price: "29",
      },
      {
        id: "fish-fry",
        name: "Fish Fry",
        price: "30",
      },
      {
        id: "apollo-fish",
        name: "Apollo Fish",
        price: "35",
      },
      {
        id: "finger-fish",
        name: "Finger Fish",
        price: "35",
      },
      {
        id: "golden-fried-prawns",
        name: "Golden Fried Prawns",
        price: "36",
      },
    ],
  },

  {
    id: "hot-soups",
    name: "Hot Soups",
    items: [
      {
        id: "veg-hot-sour-soup",
        name: "Veg Hot & Sour Soup",
        price: "18",
      },
      {
        id: "chicken-hot-sour-soup",
        name: "Chicken Hot & Sour Soup",
        price: "22",
      },
      {
        id: "veg-manchow-soup",
        name: "Veg Manchow Soup",
        price: "18",
      },
      {
        id: "chicken-manchow-soup",
        name: "Chicken Manchow Soup",
        price: "22",
      },
    ],
  },

  {
    id: "barbecue",
    name: "Barbecue (BBQ)",
    items: [
      {
        id: "chicken-tikka",
        name: "Chicken Tikka",
        price: "32",
      },
      {
        id: "chicken-malai-tikka",
        name: "Chicken Malai Tikka",
        price: "35",
      },
      {
        id: "chicken-tandoori",
        name: "Chicken Tandoori",
        price: "35",
      },
      {
        id: "mutton-kabab",
        name: "Mutton Kabab",
        price: "38",
      },
    ],
  },

  {
    id: "veg-barbecue",
    name: "Veg Barbecue",
    items: [
      {
        id: "paneer-tikka",
        name: "Paneer Tikka",
        price: "28",
      },
      {
        id: "malai-paneer-tikka",
        name: "Malai Paneer Tikka",
        price: "30",
      },
      {
        id: "veg-seekh-kabab",
        name: "Veg Seekh Kabab",
        price: "25",
      },
    ],
  },

  {
    id: "combo-meals",
    name: "Combo Meals Specials",
    items: [
      {
        id: "chicken-combo",
        name: "Chicken Combo Meal",
        description: "Chicken dish served with rice, bread and drink.",
        price: "39",
      },
      {
        id: "mutton-combo",
        name: "Mutton Combo Meal",
        description: "Mutton dish served with rice, bread and drink.",
        price: "45",
      },
      {
        id: "veg-combo",
        name: "Veg Combo Meal",
        description: "Vegetarian meal with rice, bread and drink.",
        price: "32",
      },
    ],
  },

  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "fresh-lime",
        name: "Fresh Lime",
        price: "10",
      },
      {
        id: "mint-lemonade",
        name: "Mint Lemonade",
        price: "12",
      },
      {
        id: "mango-juice",
        name: "Fresh Mango Juice",
        price: "15",
      },
      {
        id: "orange-juice",
        name: "Fresh Orange Juice",
        price: "15",
      },
    ],
  },

  {
    id: "breads",
    name: "Breads",
    items: [
      {
        id: "plain-naan",
        name: "Plain Naan",
        price: "6",
      },
      {
        id: "butter-naan",
        name: "Butter Naan",
        price: "8",
      },
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        price: "10",
      },
      {
        id: "tandoori-roti",
        name: "Tandoori Roti",
        price: "5",
      },
    ],
  },

  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        price: "12",
      },
      {
        id: "ice-cream",
        name: "Ice Cream",
        price: "12",
      },
      {
        id: "fruit-salad",
        name: "Fruit Salad",
        price: "15",
      },
    ],
  },

  {
    id: "hyderabadi-specials",
    name: "Hyderabadi Specials",
    items: [
      {
        id: "hyderabadi-mirchi-ka-salan",
        name: "Hyderabadi Mirchi Ka Salan",
        price: "22",
      },
      {
        id: "hyderabadi-dalcha",
        name: "Hyderabadi Dalcha",
        price: "22",
      },
      {
        id: "hyderabadi-mutton",
        name: "Hyderabadi Mutton",
        price: "38",
      },
    ],
  },

  {
    id: "biryani",
    name: "Biryani",
    items: [
      {
        id: "mutton-dum-biryani",
        name: "Mutton Dum Biryani",
        variants: [
          {
            name: "Regular",
            price: "38",
          },
          {
            name: "Family",
            price: "80",
          },
          {
            name: "Jumbo",
            price: "110",
          },
        ],
      },
      {
        id: "chicken-dum-biryani",
        name: "Chicken Dum Biryani",
        variants: [
          {
            name: "Regular",
            price: "28",
          },
          {
            name: "Family",
            price: "60",
          },
          {
            name: "Jumbo",
            price: "90",
          },
        ],
      },
      {
        id: "chicken-65-biryani",
        name: "Chicken 65 Biryani",
        price: "35",
      },
      {
        id: "veg-biryani",
        name: "Veg Biryani",
        price: "25",
      },
      {
        id: "egg-biryani",
        name: "Egg Biryani",
        price: "28",
      },
    ],
  },

  {
    id: "fried-rice-noodles",
    name: "Fried Rice & Noodles",
    items: [
      {
        id: "veg-fried-rice",
        name: "Veg Fried Rice",
        price: "22",
      },
      {
        id: "chicken-fried-rice",
        name: "Chicken Fried Rice",
        price: "28",
      },
      {
        id: "egg-fried-rice",
        name: "Egg Fried Rice",
        price: "25",
      },
      {
        id: "veg-noodles",
        name: "Veg Noodles",
        price: "22",
      },
      {
        id: "chicken-noodles",
        name: "Chicken Noodles",
        price: "28",
      },
    ],
  },

  {
    id: "curries",
    name: "Curries",
    items: [
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        price: "32",
      },
      {
        id: "chicken-tikka-masala",
        name: "Chicken Tikka Masala",
        price: "32",
      },
      {
        id: "mutton-masala",
        name: "Mutton Masala",
        price: "38",
      },
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        price: "28",
      },
      {
        id: "dal-tadka",
        name: "Dal Tadka",
        price: "20",
      },
    ],
  },
];