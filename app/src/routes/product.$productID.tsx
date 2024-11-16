import * as React from "react";
import { createFileRoute, getRouteApi } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$productID")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = getRouteApi("/product/$productID").useParams();
  return <></>;
}
