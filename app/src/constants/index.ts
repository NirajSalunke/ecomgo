export interface Word {
  text: string;
  className?: string;
}

export interface Product {
  title: string;
  thumbnail: string;
}

export const words: Word[] = [
  {
    text: "Goodsly",
    className: "text-blue-500 p-2 text-4xl Head dark:text-blue-500",
  },
];
export const placeholders = [
  "Best deals on iPhone?",
  "Cheap sneakers for running",
  "Affordable home office furniture",
  "Best budget laptops for students",
  "Cute phone cases online",
  "Summer dresses for a wedding",
  "Find a smartwatch under 2000",
];
export const products: Product[] = [
  {
    title: "Nike Footwear",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/nike.png?alt=media&token=a39d2f87-0446-4d04-8fe5-859ee3252066",
  },
  {
    title: "Adidas Sportswear",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/addidas.png?alt=media&token=52cfb02c-1f32-4691-aee8-83f93af86539",
  },
  {
    title: "Apple Electronics",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/apple.png?alt=media&token=00a2cd4b-a5fd-4b9b-b681-4ddc68f9013a",
  },

  {
    title: "Google Phones",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/google.png?alt=media&token=aaaec90f-2cee-45df-96fa-f6bdfaed447b",
  },
  {
    title: "Samsung Gadgets",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/samsungpng.png?alt=media&token=a216d779-1746-4b37-878e-5d114e29e258",
  },
  {
    title: "LG Appliances",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
  },

  {
    title: "Dell Laptops",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/dell.png?alt=media&token=9eb16450-2e4e-45d5-a376-7ed3bbe4ed09",
  },
  {
    title: "H&M Fashion",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/hm.png?alt=media&token=22447322-db33-4006-a845-55d36b0070e4",
  },
  {
    title: "Zara Clothing",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/zara.png?alt=media&token=c079a618-cd1a-4d57-abf4-ffd2c2f0b8b9",
  },
  {
    title: "Levi's Jeans",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/levi.png?alt=media&token=f66b29ed-bbe8-4cdb-83e8-7ebc50a6660e",
  },
  {
    title: "Tommy Hilfiger Fashion",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/tommy.png?alt=media&token=739717ef-047b-487b-a452-fdd38dacae90",
  },

  {
    title: "Under Armour Gear",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/armour.png?alt=media&token=88ec00f4-c777-4068-a49c-7ad92b29a14b",
  },
  {
    title: "Puma Sportswear",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/puma.png?alt=media&token=29399bc3-0299-4764-99e6-8e11f65bfe2e",
  },
  {
    title: "The North Face Jackets",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/north.png?alt=media&token=e658ef43-eea9-450f-9af7-7050947080c3",
  },
  {
    title: "Reebok Shoes",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/reebook.png?alt=media&token=29d08aa2-dc0c-4786-aae5-8e25f1b65269",
  },
];

export const components: {
  title: string;
  href?: string;
  description: string;
}[] = [
  {
    title: "Product Reviews",
    description:
      "Check customer reviews and ratings to make informed purchase decisions.",
  },
  {
    title: "Secure Checkout",
    description:
      "Experience a fast and secure checkout process with multiple payment options.",
  },

  {
    title: "Wishlist",
    description:
      "Save your favorite items and purchase them later with our Wishlist feature.",
  },
  {
    title: "Discount Alerts",
    description:
      "Receive notifications about ongoing sales, discounts, and exclusive offers.",
  },
];
