import { SetsPage } from "@/Pages/HelpsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help/sets")({
  component: SetsPage
});
