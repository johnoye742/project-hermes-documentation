
import Code from "@/components/ui/code";
import Footer from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";

export const metadata = {
  title: "ARRAY_PUSH - Project Hermes"
}

export default function ArrayGet() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='ARRAY_PUSH'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">ARRAY_PUSH key... value...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            I know... I know... Looks like PHP syntax. But I can this is more expressive than something like LP...(not that nonesense) L? no we don't take Ls over here.
            Anyways... Hermes offers a simple way to work with lists/arrays and with the above command you can add an element to an array. If the array doesn't already exist in the Hermes server, it'll be created and that element appended to it. If you do it without any values it'll create an empty array.
            Note: Arrays in Hermes are not associative (like in PHP), they're more like lists
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'ARRAY_PUSH users Tayo'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>ARRAY_PUSH: This is the operation for pushing a value to an array in the store.</li>
              <li>users: This is the key of the array that is being pushed to.</li>
              <li>Tayo: This is the value to be pushed to the `users` array.</li>
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
        <Footer prev={'/docs/concat'} next={'/docs/array_get'} />
      </section>
      
      
    </div>
  )
}
