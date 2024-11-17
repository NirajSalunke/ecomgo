import React, { useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { words } from "@/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";
import qs from "qs";
import axios, { isCancel, AxiosError } from "axios";
import { last } from "node_modules/@tanstack/react-router/dist/esm/utils";
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const date = new Date().toISOString();
    console.log(date);
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/auth/signup",
        qs.stringify({
          name: firstName + " " + lastName,
          email: email,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });

    // log(e);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value);
    console.log("Form submitted");
  };
  return (
    <div className="flex w-screen  h-screen    " id="signup">
      <div className="w-1/2 h-full  items-center justify-center hidden md:flex ">
        <div className="flex text-center justify-center items-center h-[40rem] flex-col px-4">
          <p className="text-neutral-500 dark Head flex  justify-center items-center gap-5 dark:text-neutral-400 text-xl md:text-6xl max-w-3xl mx-auto">
            <p className="text-9xl">
              <TypewriterEffectSmooth
                cursorClassName=" h-30 bg-[#737373] "
                words={[
                  {
                    text: "Shop",
                    className: "  p-2 text-9xl Head text-neutral-500",
                  },
                ]}
              />
            </p>
            <p className="flex flex-col ">
              <LinkPreview url="https://www.blackbox.ai/chat/c15Hg6P">
                for Anything,{"\n"}
              </LinkPreview>
              <LinkPreview url="https://www.blackbox.ai/chat/Lp89wxB">
                from Anywhere,{"\n"}
              </LinkPreview>
              <LinkPreview url="https://www.blackbox.ai/chat/He2OWFl">
                at Anytime.{"\n"}
              </LinkPreview>
            </p>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-full flex justify-center items-center">
        <div className="max-w-md scale-90 sm:scale-100 w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 sm:shadow-input bg-slate-100 dark:bg-black">
          <TypewriterEffectSmooth
            words={words}
            cursorClassName="h-10 "
            className="flex justify-center"
          />
          <form className="my-8 " onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  required
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  placeholder="Niraj"
                  type="text"
                  onChange={(e) => {
                    e.preventDefault();
                    setfirstName(e.target.value);
                  }}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  required
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={lastName}
                  placeholder="Salunke"
                  onChange={(e) => {
                    e.preventDefault();
                    setlastName(e.target.value);
                  }}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                required
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="nirajsalunke@gmail.com"
                onChange={(e) => {
                  e.preventDefault();
                  setemail(e.target.value);
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                required
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                name="password"
                onChange={(e) => {
                  e.preventDefault();
                  setpassword(e.target.value);
                }}
              />
            </LabelInputContainer>

            <button
              className=" bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
            <p className="text-neutral-500 text-center p-2 ">or</p>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Log in with email &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
