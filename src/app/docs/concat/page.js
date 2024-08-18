

import Code from "@/components/ui/code";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer"

export const metadata = {
  title: "CONCAT - Project Hermes"
}

export default function Concat() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='CONCAT'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">CONCAT key... value...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            The `CONCAT` command like it name suggests concatenates the `value` to the String that is located at `key`.
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'CONCAT poem "There is a field, I\'ll meet you there.\n"'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>CONCAT: This is the operation for concatenating a value to a String in the store. It is case insensitive.</li>
              <li>poem: This is the key that is being altered in form of concatenation.</li>
              <li>"There is a field, I'll meet you there": This is the value to be concatenated to `poem` value.</li>
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

        <Footer prev={'/docs/add'} />
      </section>

    </div>
  )
}
