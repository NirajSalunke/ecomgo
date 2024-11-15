import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { MenuIcon, PersonStandingIcon } from "lucide-react";

const components: { title: string; href?: string; description: string }[] = [
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

export default function Navbar() {
  return (
    <nav className="w-screen h-[8vh] ">
      <div className="w-full h-full flex sm:hidden">
        <div className="w-1/2 h-full items-center flex">
          <div className="flex p-5 gap-2 items-center text-3xl Head ">
            <PersonStandingIcon /> Goodsly
          </div>
        </div>
        <div className="w-1/2 justify-end flex items-center h-full">
          <div className="flex p-5 gap-2">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className=" hidden w-full h-full sm:flex ">
        <div className="w-1/2 h-full items-center flex">
          <div className="flex  items-center  p-5 text-4xl Head gap-2 ">
            <PersonStandingIcon className="scale-125" /> Goodsly
          </div>
        </div>
        <div className="w-1/2 justify-center flex items-center h-full">
          <div className="flex p-5 gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="Head text-xl">
                    About us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <PersonStandingIcon className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-4xl font-bold Head">
                              Goodsly
                            </div>
                            <p className="text-lg font-semibold  leading-tight Head text-muted-foreground">
                              Everything. Everywhere. For You.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/docs"
                        title="User-Centric Experience
"
                      >
                        We prioritize simplicity and accessibility, ensuring
                        that our platform is intuitive and easy to navigate for
                        every customer. Our goal is to provide a seamless
                        shopping experience, from browsing to checkout.
                      </ListItem>
                      <ListItem
                        href="/docs/installation"
                        title="Secure Transactions"
                      >
                        We understand the importance of trust in online
                        shopping. Our platform uses advanced encryption and
                        secure payment gateways to protect customer data and
                        provide a safe shopping environment.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Wide Product Selection"
                      >
                        We offer a diverse range of products to cater to every
                        need and preference. Whether you're looking for the
                        latest trends or everyday essentials, we aim to provide
                        high-quality options at competitive prices.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="Head text-xl">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} Head text-xl`}
                    >
                      Shop Now
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="  text-sm font-mono leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug para  text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
