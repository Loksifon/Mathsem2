import { UsagePage } from "@/Pages/HelpsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help/usage")({
  component: UsagePage
}); 
