

import Code from "@/components/ui/code";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer"

export const metadata = {
  title: "GET - Project Hermes"
}

export default function Get() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='GET'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">GET key...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            Project Hermes allows for getting values in the store with a simple and intuitive syntax.<br/>
            After setting a value in the store, to access it, you will then need to access it later on, Project Hermes offers an easy way to do that. If the key does not exist already, nothing will be returned.
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'GET myName'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>GET: This is the operation for getting a value. It is case insensitive.</li>
              <li>myName: This is the key that is being fetched from the store.</li>
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

        <Footer prev={'/docs/set'} next={'/docs/all'} />
      </section>

    </div>
  )
}
