
import Code from "@/components/ui/code";
import Footer from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";

export const metadata = {
  title: "ARRAY_GET - Project Hermes"
}

export default function ArrayGet() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='ARRAY_GET'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">ARRAY_GET key...</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            With the new feature introduced you can now easily get all the items in an array by simply just running the above command and it'll return the items in a JSON format which you can parse in your respective languages.
            Note: Arrays in Hermes are not associative (like in PHP), they're more like lists
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'ARRAY_GET users'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>ARRAY_GET: This is the operation for dumping all the values in the specified array.</li>
              <li>users: This is the key of the array whose values are being dumped.</li>
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
