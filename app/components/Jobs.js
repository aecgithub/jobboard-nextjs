"use client"
import React, { useState } from 'react'
import { filterSkills, filterType, filterCountries } from '../service/filterData'
import { filterJobsByKeyword, filterJobsByType, filterJobsByRemote, filterJobsByCountry, filterJobsBySkill } from '../service/filterJobs'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon, SlidersHorizontal } from 'lucide-react'
import { Cross1Icon, Cross2Icon, FileTextIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import JobCard from './JobCard'
import { cn } from '@/lib/utils'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Jobs(props) {
    const jobs = props.jobs

    const [keywordSearch, setKeywordSearch] = useState('')
    const [filterByKeyword, setFilterByKeyword] = useState('')
    const [filterByType, setFilterByType] = useState('')
    const [filterBySkill, setFilterBySkill] = useState('')
    const [filterByCountry, setFilterByCountry] = useState('')
    const [filterByRemote, setFilterByRemote] = useState(false)
    const [filter, setFilter] = useState(false)

    // add keyword to search state
    function setKeywordToState(event) {
        setFilterByKeyword(keywordSearch)
        event.preventDefault();
    }
    // add keyword to search state

    function clearFilter() {
        setFilter(false)
        setFilterByKeyword('')
        setFilterByType('')
        setFilterBySkill('')
        setFilterByCountry('')
        setFilterByRemote(false)

    }

    function toggleFilter() {
        if (filter) {
            setFilter(false)
        } else {
            setFilter(true)
        }
    }
    const filteredJobsByKeyword = filterJobsByKeyword(jobs, filterByKeyword)
    const filteredJobsType = filterJobsByType(filteredJobsByKeyword, filterByType)
    const filteredJobsByRemote = filterJobsByRemote(filteredJobsType, filterByRemote)
    const filteredJobsBySkill = filterJobsBySkill(filteredJobsByRemote, filterBySkill)
    const filteredJobsByCountry = filterJobsByCountry(filteredJobsBySkill, filterByCountry)


    return (
        <div className='flex gap-4'>
  
            <div className={cn('lg:w-1/5 hidden lg:flex bg-gray-50 rounded-lg', `${filter ? '' : 'hidden'}`)}>
                    <div className="w-full bg-gray-50 rounded-xl p-4">
                        <div className="mb-6 mt-2 w-full" >
                                <div className="flex flex-col items-center w-full gap-2">
                            <Input placeholder="job title..." onChange={(e) => setKeywordSearch(e.target.value.toLowerCase())} name="keyword"/>
                                    <div className='w-full flex gap-2'> 

                                        <Button onClick={setKeywordToState} className="gap-2 w-full">Search <SearchIcon strokeWidth={1.5} className='w-5 h-5' /></Button>
            
                                            {filterByType || filterBySkill || filterByCountry || filterByRemote || filterByKeyword != '' ?
                                                <Button className=" gap-2 w-full" variant='destructive' onClick={clearFilter}>Clear <Cross1Icon /></Button>
                                                :
                                                <>

                                                </>
                                            }
                                    </div>
                                </div>
                        </div>
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Type</h2>
                            <div className="mb-6 mt-2" >
                                <div className="mb-3 flex flex-row items-center boarder-1">
                                    <div className="space-y-1">
                                    <div className="flex items-center space-x-2 pl-2 py-1">
                                        <Checkbox className="w-4 h-4 border-black"
                                            checked={filterByRemote}
                                            value={filterByRemote}
                                            id={filterByRemote}
                                            onCheckedChange={(e) => { !filterByRemote ? setFilterByRemote(true) : setFilterByRemote(false) }} />
                                        <label
                                            // htmlFor="type"
                                            id={filterByRemote}
                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Remote
                                        </label>
                                    </div>
                                        {filterType(jobs).map((type) => (
                                            <div className="flex items-center space-x-2 pl-2 py-1" key={type}>
                                                <Checkbox className="w-4 h-4 border-black"
                                                    checked={type == filterByType}
                                                    value={type}
                                                    id={type}
                                                    onCheckedChange={event => {setFilterByType(type) }} />
                                                <label
                                                    // htmlFor="type"
                                                    id={type}
                                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Skill</h2>
                            <div className="mb-6 mt-2" >
                                <div className="mb-3 flex flex-row items-center boarder-1">
                                    <div className="space-y-1">
                                        {filterSkills(jobs).map((skill) => (
                                            <div className="flex items-center space-x-2 pl-2 py-1" key={skill}>
                                                <Checkbox className="w-4 h-4 border-black"
                                                    checked={skill == filterBySkill}
                                                    value={skill}
                                                    id={skill}
                                                    onCheckedChange={event => {
                                                        setFilterBySkill(skill)
                                                    }} />
                                                <label
                                                    // htmlFor="type"
                                                    id={skill}
                                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {skill}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Country</h2>
                            <div className="mb-6 mt-2">
                                <div className="mb-3 flex flex-row items-center">
                                    <div className="space-y-1 ">
                                        {filterCountries(jobs).map((country) => (
                                            <div className="flex items-center space-x-2 pl-2 py-1" key={country}>
                                                <Checkbox className="w-4 h-4 border-black" checked={country == filterByCountry} value={country} id={country} onCheckedChange={event => {
                                                    setFilterByCountry(country)
                                                }} />
                                                <label 
                                                // htmlFor="country" 
                                                id={country}
                                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {country}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='lg:w-4/5 w-full flex flex-col gap-2'>
                {/* mobile filter  */}
                <div className='py-5 flex lg:hidden'>
                    <div className="flex items-center w-full gap-2">
                        {/* <Input placeholder="job title..." onChange={(e) => setKeywordSearch(e.target.value)} name="keyword" /> */}
                        <div className='w-full flex gap-2 justify-end'>
                            {/* <Button onClick={setKeywordToState} className="gap-2 w-32">Search <SearchIcon strokeWidth={1.5} className='w-5 h-5' /></Button> */}

                            {filterByType || filterBySkill || filterByCountry || filterByKeyword != '' ?
                                <Button className=" gap-2 w-32" variant='destructive' onClick={clearFilter}>Clear <Cross1Icon /></Button>
                                :
                                <>
                                </>
                            }
                            {/* mobile filter  */}
                            <div className="">
                                <Sheet >
                                    <SheetTrigger>
                                        <Button className=" gap-2 w-30" variant='outline' onClick={toggleFilter}>Filter <SlidersHorizontal strokeWidth={1.5} className='w-4 h-4' /></Button>
                                    </SheetTrigger>
                                    <SheetContent >
                                        <SheetHeader>
                                            <SheetDescription className="">
                                                <ScrollArea  className="h-screen pb-5">

                                                    <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Keyword</h2>
                                                    <div className="mb-6 mt-2" >
                                                        <div className="mb-3 flex flex-row items-center boarder-1">
                                                            <div className="w-full space-y-1 px-1">
                                                                <Input placeholder="job title..." onChange={(e) => setKeywordSearch(e.target.value.toLowerCase())} name="keyword" />
                                                                <Button onClick={setKeywordToState} className="gap-2 w-full">Search <SearchIcon strokeWidth={1.5} className='w-5 h-5' /></Button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Type</h2>
                                                    <div className="mb-6 mt-2" >

                                                        <div className="mb-3 flex flex-row items-center boarder-1">
                                                            <div className="space-y-1">
                                                                {filterType(jobs).map((type) => (
                                                                    <div className="flex items-center space-x-2 pl-2 py-1" key={type}>
                                                                        <Checkbox className="w-4 h-4 border-black"
                                                                            checked={type == filterByType}
                                                                            value={type}
                                                                            id={type}
                                                                            onCheckedChange={event => {
                                                                                setFilterByType(type)
                                                                            }} />
                                                                        <label
                                                                            // htmlFor="type"
                                                                            id={type}
                                                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                                            {type}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <h2 className="mb-1 text-sm font-semibold text-gray-900">Filter by Skill</h2>
                                                    <div className="mb-6 mt-2" >
                                                        <div className="mb-3 flex flex-row items-center boarder-1">
                                                            <div className="space-y-1">
                                                                {filterSkills(jobs).map((skill) => (
                                                                    <div className="flex items-center space-x-2 pl-2 py-1" key={skill}>
                                                                        <Checkbox className="w-4 h-4 border-black"
                                                                            checked={skill == filterBySkill}
                                                                            value={skill}
                                                                            id={skill}
                                                                            onCheckedChange={event => {
                                                                                setFilterBySkill(skill)
                                                                            }} />
                                                                        <label
                                                                            // htmlFor="type"
                                                                            id={skill}
                                                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                                            {skill}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <h2 className="mb-1 text-sm font-semibold text-gray-900">Country</h2>
                                                    <div className="mb-6 mt-2">
                                                        <div className="mb-3 flex flex-row items-center">
                                                            <div className="space-y-1 ">
                                                                {filterCountries(jobs).map((country) => (
                                                                    <div className="flex items-center space-x-2 pl-2 py-1" key={country}>
                                                                        <Checkbox className="w-4 h-4 border-black" checked={country == filterByCountry} value={country} id={country} onCheckedChange={event => {
                                                                            setFilterByCountry(country)
                                                                        }} />
                                                                        <label
                                                                            // htmlFor="country" 
                                                                            id={country}
                                                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                                            {country}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ScrollArea>
                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>     
                            {/* mobile filter  */}                   
                        </div>
                    </div>
                </div>
                {/* mobile filter  */}
                {filteredJobsByCountry?.map((job) => (
                    <div  key={job.id}>
                        <JobCard title={job.Job_Opening_Name} type={job.Job_Type} remote={job.Remote_Job} featured={job.Featured} country={job.Country} city={job.City} url={job.Url} id={job.id}/>
                    </div>
                ))
                }
            </div>

        </div>
    )
}
