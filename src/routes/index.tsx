import { createFileRoute } from "@tanstack/react-router";
import { Portfolio3D } from "../components/portfolio/Portfolio3D";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Tamim Iqbal Taha — Creative Developer" },
      {
        name: "description",
        content:
          "Interactive 3D portfolio of Tamim Iqbal Taha, a creative developer building immersive web experiences.",
      },
      { property: "og:title", content: "Tamim Iqbal Taha — Creative Developer" },
      {
        property: "og:description",
        content:
          "Interactive 3D portfolio of Tamim Iqbal Taha, a creative developer building immersive web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio3D,
});
