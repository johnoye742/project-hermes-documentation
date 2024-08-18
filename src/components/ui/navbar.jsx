
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NavBar() {
  return (
      <div className="sticky top-0 z-20">
        <nav className="flex flex-row px-10 py-5 bg-[hsl(var(--background))] items-center justify-between ">
          <h1><Link href="/"> Project Hermes</Link></h1>
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                  <Link href="/docs">
                  <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
                      
                        Documentation
                      
                  </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                      About Us
                  </NavigationMenuLink>
                
              </NavigationMenuItem>

            </NavigationMenuList>
              
          </NavigationMenu>
        </nav>
      <Separator/> 

      </div>
  )
}
