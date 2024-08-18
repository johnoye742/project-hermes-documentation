import Code from "@/components/ui/code";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer"

export const metadata = {
  title: "ALL - Project Hermes"
}

export default function All() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='ALL'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">ALL</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            Say you had records of over hundred or so, and you wanted to retrieve them, how do you do that? If you guessed the 'ALL' command then you would be correct. The ALL command fetches all the data on that connection in a JSON format, but it is not recommended for large stores.
          </p>
          <p className="py-3">Examples: </p>
          <Code code={'ALL'}/> 
          <section className="flex flex-col gap-3 my-3">
            Explanation:
            <ul className="list-disc px-10">
              <li>ALL: This is the operation to get all records in the store.</li>
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

        <Footer prev={'/docs/get'} next={'/docs/add'} />
      </section>

    </div>
  )
}
