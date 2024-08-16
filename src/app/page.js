import { GoogleGeminiEffectDemo } from "@/components/hero";

export const metadata = {
  title: "Project Hermes"
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
    </main>
  );
}
