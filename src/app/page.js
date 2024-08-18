import { GoogleGeminiEffectDemo } from "@/components/hero";

export const metadata = {
  title: "Project Hermes",
  description: "Project Hermes is a fast key-value store for supercharging your application!"
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
    </main>
  );
}
