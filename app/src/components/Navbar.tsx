import { cn } from "@/lib/utils";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "@tanstack/react-router";
import { LucideCross, PersonStandingIcon } from "lucide-react";
import { IconMenu3 } from "@tabler/icons-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import axios from "axios";
import qs from "qs";
import { components, placeholders } from "@/constants";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export default function Navbar() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  const url = useLocation().pathname;
  const [isOpen, setisOpen] = React.useState(false);
  const { user, isLoaded, isSignedIn } = useUser();
  const sendcreateUserReq = async () => {
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/create`,
        qs.stringify({
          name: user.username,
          email: user.emailAddresses[0]?.emailAddress,
          image_url: user.imageUrl,
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      return;
    } catch (err) {
      console.error(err);
    }
  };
  React.useEffect(() => {
    sendcreateUserReq();
  }, [isSignedIn]);
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-screen h-[8vh] sticky top-0 bg-white bg-opacity-95 z-50 ">
        <div className="w-full h-full flex md:hidden">
          <div className="w-1/2 h-full items-center flex">
            <div className="flex p-5 gap-2 items-center text-3xl Head ">
              <PersonStandingIcon /> Goodsly
            </div>
          </div>
          <div className="w-1/2 justify-end flex items-center h-full">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="flex p-5 gap-2">
              {!isOpen ? (
                <IconMenu3 onClick={handleClick} />
              ) : (
                <LucideCross onClick={handleClick} className=" rotate-45" />
              )}
            </div>
          </div>
        </div>
        <div className=" hidden w-full h-full md:flex ">
          <div className="w-1/2 h-full items-center flex">
            <div className="flex  items-center  p-5 text-4xl  Head gap-2 ">
              <PersonStandingIcon className="scale-125" /> Goodsly
            </div>
            {url == "/home" && (
              <div
                className={`h-full w-screen flex justify-center para  items-center p-2 px-4 `}
              >
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </div>
            )}
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
                          title="User-Centric Experience
"
                        >
                          We prioritize simplicity and accessibility, ensuring
                          that our platform is intuitive and easy to navigate
                          for every customer. Our goal is to provide a seamless
                          shopping experience, from browsing to checkout.
                        </ListItem>
                        <ListItem title="Secure Transactions">
                          We understand the importance of trust in online
                          shopping. Our platform uses advanced encryption and
                          secure payment gateways to protect customer data and
                          provide a safe shopping environment.
                        </ListItem>
                        <ListItem title="Wide Product Selection">
                          We offer a diverse range of products to cater to every
                          need and preference. Whether you're looking for the
                          latest trends or everyday essentials, we aim to
                          provide high-quality options at competitive prices.
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
                    <Link to="/home">
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} Head text-xl`}
                      >
                        Shop Now
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/* desktop */}
                  <NavigationMenuItem className="flex items-center justify-center p-5">
                    <SignedOut>
                      <SignInButton signUpFallbackRedirectUrl={"/"}>
                        <NavigationMenuTrigger className="Head text-xl">
                          Sign in
                        </NavigationMenuTrigger>
                      </SignInButton>
                    </SignedOut>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex items-center justify-center ">
                    <SignedOut>
                      <SignUpButton>
                        <NavigationMenuTrigger className="Head text-xl">
                          Sign Up
                        </NavigationMenuTrigger>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-8vh text-white    transition-all duration-700  w-full h-[92vh]   ${isOpen ? "opacity-100 z-50 bg-opacity-85 bg-black " : "opacity-0 -z-50 "} `}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex-col gap-5 p-5  ">
            <NavigationMenuItem className="w-screen  h-[10vh] flex items-center dark justify-center">
              <NavigationMenuTrigger className="Head text-xl w-[90%] h-[90%]">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
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
                    We prioritize simplicity and accessibility, ensuring that
                    our platform is intuitive and easy to navigate for every
                    customer. Our goal is to provide a seamless shopping
                    experience, from browsing to checkout.
                  </ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Secure Transactions"
                  >
                    We understand the importance of trust in online shopping.
                    Our platform uses advanced encryption and secure payment
                    gateways to protect customer data and provide a safe
                    shopping environment.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Wide Product Selection"
                  >
                    We offer a diverse range of products to cater to every need
                    and preference. Whether you're looking for the latest trends
                    or everyday essentials, we aim to provide high-quality
                    options at competitive prices.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-screen h-[10vh] flex items-center dark justify-center">
              <NavigationMenuTrigger className="Head text-xl w-[90%] h-[90%] ">
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
            <NavigationMenuItem className="w-screen h-[10vh] flex items-center dark justify-center ">
              <Link
                to="/home"
                className="w-full cursor-pointer h-full flex justify-center items-center"
              >
                <NavigationMenuLink
                  onClick={() => {
                    setisOpen(false);
                  }}
                  className={`${navigationMenuTriggerStyle()} Head text-xl w-screen h-[100%] `}
                >
                  Shop Now
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-screen h-[10vh] flex items-center dark justify-center ">
              <SignedOut>
                <SignUpButton>
                  <NavigationMenuTrigger className="Head text-xl">
                    Sign Up
                  </NavigationMenuTrigger>
                </SignUpButton>
              </SignedOut>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-screen h-[10vh] flex items-center dark justify-center ">
              <SignedOut>
                <SignUpButton>
                  <NavigationMenuTrigger className="Head text-xl">
                    Sign-up
                  </NavigationMenuTrigger>
                </SignUpButton>
              </SignedOut>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
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
