import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const products = [
    {
      title: "Nike Footwear",
      link: "https://www.nike.com/w/sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/nike.png?alt=media&token=a39d2f87-0446-4d04-8fe5-859ee3252066",
    },
    {
      title: "Adidas Sportswear",
      link: "https://www.adidas.com/us/outlet",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/addidas.png?alt=media&token=52cfb02c-1f32-4691-aee8-83f93af86539",
    },
    {
      title: "Apple Electronics",
      link: "https://www.apple.com/shop",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/apple.png?alt=media&token=00a2cd4b-a5fd-4b9b-b681-4ddc68f9013a",
    },

    {
      title: "Google Phones",
      link: "https://store.google.com/in/product/pixel_9_pro?hl=en-GB",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/google.png?alt=media&token=aaaec90f-2cee-45df-96fa-f6bdfaed447b",
    },
    {
      title: "Samsung Gadgets",
      link: "https://www.samsung.com/us/discounts/",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/samsungpng.png?alt=media&token=a216d779-1746-4b37-878e-5d114e29e258",
    },
    {
      title: "LG Appliances",
      link: "https://www.lg.com/us/promotions",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
    },

    {
      title: "Dell Laptops",
      link: "https://www.dell.com/en-us/shop/dell-laptops",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/dell.png?alt=media&token=9eb16450-2e4e-45d5-a376-7ed3bbe4ed09",
    },
    {
      title: "H&M Fashion",
      link: "https://www.hm.com/us/sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/hm.png?alt=media&token=22447322-db33-4006-a845-55d36b0070e4",
    },
    {
      title: "Zara Clothing",
      link: "https://www.zara.com/us/en/sale-woman-l1010.html",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/zara.png?alt=media&token=c079a618-cd1a-4d57-abf4-ffd2c2f0b8b9",
    },
    {
      title: "Levi's Jeans",
      link: "https://www.levi.com/US/en_US/shop-sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/levi.png?alt=media&token=f66b29ed-bbe8-4cdb-83e8-7ebc50a6660e",
    },
    {
      title: "Tommy Hilfiger Fashion",
      link: "https://www.tommy.com/shop-now/sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/tommy.png?alt=media&token=739717ef-047b-487b-a452-fdd38dacae90",
    },

    {
      title: "Under Armour Gear",
      link: "https://www.underarmour.com/en-us/sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/armour.png?alt=media&token=88ec00f4-c777-4068-a49c-7ad92b29a14b",
    },
    {
      title: "Puma Sportswear",
      link: "https://www.puma.com/shop-sale",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/puma.png?alt=media&token=29399bc3-0299-4764-99e6-8e11f65bfe2e",
    },
    {
      title: "The North Face Jackets",
      link: "https://www.thenorthface.com/shop/jackets",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/north.png?alt=media&token=e658ef43-eea9-450f-9af7-7050947080c3",
    },
    {
      title: "Reebok Shoes",
      link: "https://www.reebok.com/us/outlet",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/reebook.png?alt=media&token=29d08aa2-dc0c-4786-aae5-8e25f1b65269",
    },
  ];

  return (
    <main className="w-screen ">
      <HeroParallax products={products} />
    </main>
  );
}
