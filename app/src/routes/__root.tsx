import { useEffect, useState } from "react";
import {
  Outlet,
  RouteApi,
  createRootRoute,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import LoaderScreen from "@/components/Loader";
import Footer from "@/components/Footer";
// import { Search } from "lucide-react";
import Search from "@/components/Search";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isLoading, setIsLoading] = useState(true);
  // const url = useParams();
  // const url = useParams();
  const url = useLocation().pathname;
  // console.log(url.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <>
      <Navbar />
      {url == "/home" && (
        <Search className="md:hidden flex justify-center items-center flex-col" />
      )}
      <Outlet />
      <Footer />
    </>
  );
}
