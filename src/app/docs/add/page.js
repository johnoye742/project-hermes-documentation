
import Code from "@/components/ui/code";
import Footer from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";

export const metadata = {
  title: "ADD - Project Hermes"
}

export default function Add() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='ADD'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">ADD key... value...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            Imagine you had an integer in the store and you don't want to go through the process of getting it and adding another integer to it before setting it again, the `ADD` command is here to your rescue. The `ADD` command adds whatever value to the key that you specify. If the key or the value is not a valid integer, it will append it as a String instead.
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'ADD myAge 1'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>ADD: This is the operation for adding a value to an integer in the store. It is case insensitive.</li>
              <li>myAge: This is the key that is being altered in form of summation.</li>
              <li>1: This is the value to be added to `myAge` value.</li>
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
        <Footer prev={'/docs/all'} next={'/docs/concat'} />
      </section>
      
      
    </div>
  )
}
