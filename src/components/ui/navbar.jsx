
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
      <div className="sticky top-0 z-20">
        <nav className="flex flex-row px-10 py-3 bg-[hsl(var(--background))] items-center justify-between ">
          <h1><Link href="/"> <Image src={'/hermes.png'} width={'50'} height={'50'}></Image> </Link></h1>
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                 
                  <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
                      
                        Documentation
                      
                  </NavigationMenuLink>
                  
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
