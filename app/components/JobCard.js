import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { DotFilledIcon, DotIcon, ExternalLinkIcon, PinBottomIcon } from '@radix-ui/react-icons'
import { MapPin } from 'lucide-react'
import React from 'react'

export default function JobCard(props) {
  return (
    <Card className={cn("p-4 hover:border-primary", props.featured ? "border-yellow-500" : "")}>
        <div>
        <a href={'/jobs/' + props.id}>{props.title}</a>
        </div>
        <div className='flex justify-between items-center pt-2'>
              <div className='flex gap-1 items-center'>
                {props.type ?
                <Badge className="bg-blue-500 text-white hover:bg-blue-500">{props.type}</Badge>
                
                :
                null
                }
                  {props.remote === true ? <Badge className="bg-yellow-500 text-white hover:bg-yellow-500">Remote</Badge> : null}
                  
                { props.remote === true ?
                      null
                        :
                        <div className='flex items-center'>
                          <div className='hidden md:flex'><DotFilledIcon/></div>
                          <div className='flex gap-2 items-center justify-center text-sm' >
                              <MapPin strokeWidth={1} className='w-5 h-5'/>
                              <span className='hidden md:flex'>{props.city},</span> {props.country}
                          </div>
                        </div>
                }
            </div>
            <div>
                <Button className="gap-2 items-center" asChild>
                    <a href={props.url}>
                    Apply<ExternalLinkIcon/>
                    </a>
                </Button>
            </div>

        </div>
    </Card>
  )
}
