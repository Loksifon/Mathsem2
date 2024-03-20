import { OverviewPage } from "@/Pages/HelpsPage";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help/")({
  component: OverviewPage
});
