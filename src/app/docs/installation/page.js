
import Code from "@/components/ui/code";
import Footer from "@/components/ui/footer";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/ui/sidebar";

export const metadata = {
  title: "Installation - Project Hermes"
}

export default function Installation() {
  return (
    <div className="py-10 flex h-[100dvh] flex-row">
      <SideBar page='Installation'/>
      <Separator orientation="vertical" />
      <section className="w-full px-10 flex flex-col gap-10">
        <section>
          <h1 className="text-2xl">Installation 🤖</h1>
          <Separator className="mb-3 mt-1"/>
          <p>
            For now we do not have a script for installation on different operating systems but, regardless of your operating system, you can run Project Hermes because it is platform dependent and built on java. Follow the steps below to run.
          </p>
          <h1 className="py-3">First clone the repo: </h1>
          <Code code={'git clone https://github.com/johnoye742/Project-Hermes'}
    />
                  
          <h1 className="py-3">Run Hermes server: </h1>
          <Code code={`java -Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8 -p path_to_hermes/bin -XX:+ShowCodeDetailsInExceptionMessages -m com.johnoye742.hermes/hermes.Main
`}
    />
          <h1 className="py-3">Run the test client for commands: </h1>
          <Code code={`java -Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8 -p path_to_hermes/bin -XX:+ShowCodeDetailsInExceptionMessages -m com.johnoye742.hermes/hermes.TestApp
`}
    />

        </section>
        <section className="" id="requirements">
          <h1 className="text-2xl">Requirements 🤖</h1>
          <Separator className="mb-3 mt-1"/>
          <ul className="list-inside" style={{listStyle: "inside", listStyleType: "disc"}}>
            <li>Java: Project Hermes was built with Java so it requires Java to run on your machine or server.</li>
          </ul>
        </section>
        <Footer prev={'/docs'} next={'/docs/set'} />
      </section>

    </div>
  )
}
