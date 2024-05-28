"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export function Header() {
    return (
        <>
        <div className="container flex justify-between items-center py-3"> 
            <div className="w-[200px]">
                <a href="/">
                    <img src="/images/logo.png" />
                </a>
            </div>
            <div className="flex lg:hidden ">
                    <Sheet>
                        <SheetTrigger><HamburgerMenuIcon width={20} height={20}/></SheetTrigger>
                        <SheetContent >
                            <SheetHeader>
                                <SheetTitle>
                                    <div className="w-1/2">
                                        <a href="/">
                                        <img src="/images/logo.png" />
                                        </a>
                                    </div>
                                </SheetTitle>
                                <SheetDescription className="text-left">
                                    <div className="flex flex-col gap-4 font-semibold justify-start">
                                        <a href="/" className="text-black">Home</a>
                                        <a href="/jobs" className="text-black">Jobs</a>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem className="border-0" value="item-1">
                                                <AccordionTrigger className="text-black py-0">Recruitment</AccordionTrigger>
                                                <AccordionContent className="pb-0">
                                                    <div className="flex flex-col gap-3 pt-3">
                                                        <a className="text-black" href='/recruitment/java-recruitment'>Java Recruitment</a>
                                                        <a className="text-black" href='/recruitment/angular-recruitment'>Angular Recruitment</a>
                                                        <a className="text-black" href='/recruitment/net-recruitment'>.NET Recruitment</a>
                                                        <a className="text-black" href='/recruitment/drupal-recruitment'>Drupal Recruitment</a>
                                                        <a className="text-black" href='/recruitment/devops-recruitment'>DevOps Recruitment</a>
                                                        <a className="text-black" href='/recruitment/big-data-recruitment'>Big Data Recruitment</a>
                                                        <a className="text-black" href='/recruitment/mobile-developer-recruitment'>Mobile Developer Recruitment</a>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            
                                        </Accordion>
                                        <a href="/about" className="text-black">About</a>
                                        <a href="/contact" className="text-black">Contact</a>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet> 
            </div>
            <div className="hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/jobs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Jobs
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Recruitment</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/recruitment/java-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                <div className="text-sm font-medium leading-none">Java Recruitment</div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                                <a href="/recruitment/angular-recruitment" className={cn( "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                <div className="text-sm font-medium leading-none">Angular Recruitment</div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a  href="/recruitment/net-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">.NET Recruitment</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/recruitment/drupal-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Drupal Recruitment</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/recruitment/devops-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">DevOps Recruitment</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/recruitment/bigdata-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Big Data Recruitment</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/recruitment/mobile-developer-recruitment" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Mobile Developer Recruitment</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>


        </>


    )
}

