import Code from "@/components/ui/code";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "SET - Project Hermes"
}

export default function Set() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='SET'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">SET key... value...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            Project Hermes allows for setting values in the store with a simple and intuitive syntax.<br/>
    When you set a value that does not already it exist, it gets added to the store automatically with the value you put in your command and if it already exists, it overrides with the new value you put.
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'SET myName John Oye'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>SET: This is the operation for setting a value. It is case insensitive.</li>
              <li>myName: This is the key that is being set. It can be any value without a space.</li>
              <li>John Oye: This is the value of the key being set. There is no need to wrap it in quotes because all of it is appended as a string and stored</li>
            </ul>
          </section>
        </section>
        <section className="" id="requirements">
          <h1 className="text-2xl">Requirements 🤖</h1>
          <Separator className="mb-3 mt-1"/>
          <ul className="list-inside" style={{listStyle: "inside", listStyleType: "disc"}}>
            <li>Java: Project Hermes was built with Java so it requires Java to run on your machine or server.</li>
          </ul>
        </section>

        <Footer prev={'/docs/installation'} next={'/docs/get'} />
      </section>

    </div>
  )
}
