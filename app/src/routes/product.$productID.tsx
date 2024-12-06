import * as React from "react";
import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import { randomInt } from "crypto";
export const Route = createFileRoute("/product/$productID")({
  component: RouteComponent,
});
const randO = (max: number) => {
  return Math.floor(Math.random() * (max - 1)) + 0.5;
};
const dummyData = {
  id: "64f8a92d6c9b8d5c3f72a9a1",
  name: "Wireless Bluetooth Headphones",
  price: 1300,
  description:
    "High-quality wireless headphones with noise cancellation and long battery life.",
  image_url: [
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/LG.png?alt=media&token=f59e1897-159f-4624-a5e3-bb345c1a4dc2",
  ],
  category: "Electronics",
  stock: 150,
  created_at: "2024-12-06T12:34:56Z",
  updated_at: "2024-12-06T12:34:56Z",
};

function RouteComponent() {
  const params = getRouteApi("/product/$productID").useParams();

  const [num, setnum] = React.useState(0);
  return (
    <main className="w-screen">
      <section className="w-full">
        <div className="w-full flex justify-center items-center" id="main img">
          <img
            className=" rounded-3xl object-contain scale-95 mt-10 mb-5"
            src={dummyData.image_url[0]}
            alt="main"
          />
        </div>
        <div className="w-full flex gap-3 px-3 mb-3">
          {dummyData.image_url.map(
            (item, idx) =>
              idx > 0 &&
              idx < 4 && (
                <div className="">
                  <img src={item} className="rounded-2xl" alt="sub-images" />
                </div>
              )
          )}
        </div>
      </section>
      <section className="w-screen">
        <h1 className="text-3xl font-bold para p-2">
          {dummyData.name.toUpperCase()}
        </h1>
        <div className="w-full p-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={randO(5)}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
        <div className="w-full">
          <h2 className="px-3 para text-2xl font-semibold">
            &#x20B9;{dummyData.price}.00
          </h2>
        </div>
        <div className="w-full p-3 para text-lg ">
          <h3 className="">{dummyData.description}</h3>
        </div>
        <div className="w-screen h-20 gap-3 flex justify-evenly  ">
          <div className="flex bg-gray-300 rounded-full m-2 scale-90 w-1/3 gap-6 p-5 justify-evenly  items-center  ">
            <button
              onClick={() => {
                if (num > 0) {
                  setnum((prev) => prev - 1);
                }
              }}
              className="w-1/3 text-2xl br "
            >
              -
            </button>
            <div className="w-1/3 text-2xl para">{num}</div>
            <button
              onClick={() => {
                setnum((prev) => prev + 1);
              }}
              className=" w-1/3 text-2xl para"
            >
              +
            </button>
          </div>
          <div className=" flex justify-center items-center bg-black text-white rounded-full w-2/3 m-2 hover:bg-opacity-10 para text-lg hover:text-black transition-all  ">
            Add to Cart
          </div>
        </div>
      </section>
    </main>
  );
}
