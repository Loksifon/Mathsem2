import { HomePage } from "@/Pages";
import { createLazyFileRoute } from "@tanstack/react-router";


export const Route = createLazyFileRoute("/") ({
  component: HomePage
})




