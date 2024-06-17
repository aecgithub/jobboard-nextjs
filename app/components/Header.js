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
                                                <AccordionTrigger className="text-black py-0">IT Consultancy</AccordionTrigger>
                                                <AccordionContent className="pb-0">
                                                    <div className="flex flex-col gap-3 pt-3">
                                                        <a className="text-black" href='/consultancy/java-consultancy'>Java Consultancy</a>
                                                        <a className="text-black" href='/consultancy/angular-consultancy'>Angular Consultancy</a>
                                                        <a className="text-black" href='/consultancy/net-consultancy'>.NET Consultancy</a>
                                                        <a className="text-black" href='/consultancy/drupal-consultancy'>Drupal Consultancy</a>
                                                        <a className="text-black" href='/consultancy/devops-consultancy'>DevOps Consultancy</a>
                                                        <a className="text-black" href='/consultancy/big-data-consultancy'>Big Data Consultancy</a>
                                                        <a className="text-black" href='/consultancy/mobile-developer-consultancy'>Mobile Developer Consultancy</a>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            
                                        </Accordion>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem className="border-0" value="item-1">
                                                <AccordionTrigger className="text-black py-0">About</AccordionTrigger>
                                                <AccordionContent className="pb-0">
                                                    <div className="flex flex-col gap-3 pt-3">
                                                        <a className="text-black" href='/approach'>Oru Approach</a>
                                                        <a className="text-black" href='/company'>About the Company</a>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>

                                        </Accordion>
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
                                <NavigationMenuTrigger>IT Consultancy</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/consultancy/java-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Java Consultancy</div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                                <a href="/consultancy/angular-consultancy" className={cn( "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Angular Consultancy</div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a  href="/consultancy/net-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">.NET Consultancy</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/consultancy/drupal-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Drupal Consultancy</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/consultancy/devops-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">DevOps Consultancy</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/consultancy/bigdata-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Big Data Consultancy</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/consultancy/mobile-developer-consultancy" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Mobile Developer Consultancy</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/approach" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">Our Approach</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/company" className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",)} >
                                                    <div className="text-sm font-medium leading-none">About the Company</div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
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

