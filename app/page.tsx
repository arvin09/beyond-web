import { Featured, Hero, Testimonial } from "@/app/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <Testimonial></Testimonial>
      <Featured></Featured>
    </main>
  )
}
