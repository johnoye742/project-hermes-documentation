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
          Throughout history, humans have always needed information. With time modes of transmission got better and eventually technology advanced to the point where data and information is now easily accessible. Now begs the question, how fast can you serve that data to users? With Project Hermes, try 100k+ requests per second.
        </p>
        <br/>

      <div style={{width: "100%", height: "0", paddingBottom: "56%", position: "relative"}}><iframe src="https://giphy.com/embed/fBEMsUeGHdpsClFsxM" width="100%" height="100%" style={{ position: "absolute"}} frameBorder="0" className="giphy-embed motion-reduce:hidden" allowFullScreen></iframe></div>

        <br/>
      <section className=" w-full mb-4">
        <h1 className="text-2xl">Things to note</h1>
        <Separator className="mb-3 mt-1"/>
        
          <ul className="list-inside" style={{listStyle: "inside", listStyleType: "disc"}}>
            <li>Config: There is currently now way to configure the hermes server except changing the code directly, I'm going to work on that soon.</li>
            <li>Hostname: By default the hermes server runs on localhost on whatever machine it was installed on</li>
            <li>Port: By default the hermes server runs on port 2907. Bonus tip: that's my birthday.</li>
            <li>Requests: Currently the libraries for language support has not being developed so if you wanted to use this in your application you could send the requests via a socket connection</li>
          </ul>
      </section>

      <Footer  next={'/docs/installation'}/>
      </section>

    </div>
  )
}
