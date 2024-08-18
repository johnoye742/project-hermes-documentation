import Footer from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";

export default function DocsIntro() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='Introduction'/>
      <Separator orientation="vertical" />
      <section className="px-10 w-full">
        <h1 className="text-2xl">Welcome 👋🏼</h1>
        <Separator className="mb-3 mt-1"/>
        <p>
          Throughout history, humans have always needed information. With time modes of transmission got better and eventually technology advanced to the point where data and information is now easily accessible. Now begs the question, how fast can you serve that data to users? With Project Hermes, try 179ms...
        </p>
        <Footer className={'absolute lg:w-[70%] w-[80%]'} next={'/docs/installation'}/>
      </section>
    </div>
  )
}
