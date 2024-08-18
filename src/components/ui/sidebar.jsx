
import Link from "next/link";
import { Separator } from "./separator";

let pageName = "";

export default function SideBar({ page }) {
  pageName = page
  return (

      <div className="max-h-auto hidden lg:flex flex-col gap-3 w-[25em] px-14">
        <section>
          <h1 className="font-bold mb-4 text-lg">Getting Started</h1>
          <div className="flex flex-col gap-1">
              <SideBarItem title={"Introduction"} link={'/docs'}/>
              <SideBarItem title={"Installation"} link={'/docs/installation'}/> 
          </div>
        </section>

        <Separator/>
        <section>
          <h1 className="font-bold mb-4 text-lg">Commands</h1>
          <div className="flex flex-col gap-1">
            <SideBarItem title={"SET"} link={'/docs/set'} />
            <SideBarItem title={'GET'} link={'/docs/get'} />
            <SideBarItem title={"ALL"} link={'/docs/all'}/>
            <SideBarItem title={"ADD"} link={'/docs/add'}/>
            <SideBarItem title={"CONCAT"} link={'/docs/concat'}/>
          </div>
        </section>
      </div>
  )
}

function SideBarItem({ title, link }) {

  const active = title.toLowerCase() == pageName.toLowerCase() ? 'bg-gray-500' : ''
  return (
    <Link className={"text-md hover:bg-gray-500 w-full py-2 px-3 rounded-lg " + active } href={ link }>{ title }</Link>
  )
}
