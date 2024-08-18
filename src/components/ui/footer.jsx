import Link from "next/link"
import { Button } from "./button"
import { Separator } from "./separator"

export default function Footer ({ prev, next, className }) {
  return (
    <div className={"w-full bottom-0 " + className}>
      <Separator />
      <div className="py-5 w-full flex flex-row justify-between">
        {prev && <Button><Link href={prev || ""}> Prev</Link></Button>}
        {next && <Button><Link href={next || ""}>Next </Link></Button>}
      </div>
      <h1 className="text-center mb-3">Made with ❤️  by <a className="hover:text-blue-500 transition-all ease-in duration-100" href="https://johnoye742.netlify.app" target="_blank">John Oye.</a></h1>
    </div>
  )
}
