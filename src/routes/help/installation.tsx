import { InstallationPage } from "@/Pages/HelpsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help/installation")({
  component: InstallationPage
});
