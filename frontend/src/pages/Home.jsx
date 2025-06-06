import React from "react"
import hero_img from "../assets/home/hero_img.png"
import departments from "../data/department_loop.js"
import { ArrowRight, ArrowUpRight, FileText, CalendarFold} from 'lucide-react'
import sample_event_img from "../assets/home/sample_img_bg.jpg"
import { events, events_match, event_winners } from '../data/events.js'
import Event_Match from "../components/Event_Match"
import Event_Winner from "../components/Event_Winner"

const Home = () =>{
    return (
      <div className="pb-16">
        
        <div id="hero" className="bg-fill h-lvh w-full relative bg-center"
          style={{ backgroundImage: `url(${hero_img})` }} >
          <div className="bg-secondary/80 absolute right-0 left-0 top-0 bottom-0 w-full h-full -z-0"></div>
          <div className="flex flex-col items-center justify-center h-full gap-16 z-20">
            <div className="flex flex-col gap-3 items-center">
              <p className="font-bold text-8xl drop-shadow-md text-primary">WMSU SPORTS</p>
              <p className=" text-xl drop-shadow-md text-white">The Official WMSU Sports Event Website</p>
            </div>
            <button className="bg-primary font-medium text-secondary flex items-center justify-between gap-4 pl-6 pr-4 py-3 shadow-[0_2px_32px_0_rgba(254,174,1,0.60)] text-lg z-10 rounded">
              See Events 
              <ArrowRight />
            </button>
          </div>
        </div>
        
        {/* lists of wmsu department */}
        <div className="overflow-hidden mx-16 my-24">
            <div className="flex gap-6 animate-loopScroll w-fit pr-24">
                {[...departments, ...departments].map( (department, idx) => (
                  <div key={idx} className="flex items-center min-w-fit gap-1">
                      <img src={department.logo} alt="" className="size-14" />
                      <p className="text-xs text-center w-fit max-w-[180px] break-normal">
                        {department.department}
                        </p>
                  </div>
                ))}
            </div>
        </div>
        
        {/* Example Events */}
        <section className="mx-auto max-w-6xl my-16 flex flex-col gap-6">
            <div className="flex items-center justify-between bg-primary px-6 py-5 rounded-t-2xl">
              <p className="font-bold text-2xl flex items-center text-secondary gap-2">
                <CalendarFold />
                Events
                </p>
              <button className="px-4 py-2 bg-secondary text-primary rounded">View all events</button>
            </div>
            <section className="grid grid-cols-2 w-full space-x-6 space-y-3 ">
                {
                  events.map( event => (
                    events_match.map( (match, idx) => 
                      match.event_id == event.event_id ? 
                      <Event_Match key={idx} 
                      event_name={event.event_name} 
                      event_date={match.date} 
                      match_start_time={match.start_time} 
                      match_end_time={match.end_time}
                      sports_category={match.sports_category} 
                      team_a={match.team_a} 
                      team_b={match.team_b} 
                      team_a_logo={match.team_a_logo} 
                      team_b_logo={match.team_b_logo} /> 
                      : ''
                    )
                  )
                  )
                }
            </section>     
        </section>
       
        {/* Example Event Winners*/}
        <section className="mx-auto max-w-6xl my-20 flex flex-col  ">
            <div className="flex items-center justify-between py-5 border-b-4 border-primary">
              <p className="font-bold text-3xl flex items-center text-secondary gap-2">
                Event Winners
                </p>
              <button className="px-4 py-2 bg-secondary text-primary rounded">View all winners</button>
            </div>
            
            <section className="grid grid-cols-2 w-full space-x-6 space-y-3 bg-primary/5">
                {
                  events.map( event => (
                    event_winners.map( (winner, idx) => 
                      winner.event_id == event.event_id ? 
                      <Event_Winner key={idx} 
                      event_name={event.event_name} 
                      event_date={winner.date} 
                      match_start_time={winner.start_time} 
                      match_end_time={winner.end_time}
                      sports_category={winner.sports_category} 
                      team_a={winner.team_a} 
                      team_b={winner.team_b} 
                      team_a_logo={winner.team_a_logo} 
                      team_b_logo={winner.team_b_logo} 
                      winner={winner.winner}
                      /> 
                      : ''
                    )
                  )
                  )
                }
            </section>
        </section>

        <section className="flex flex-col mx-auto max-w-6xl gap-6 my-16">
          <div className="flex items-center justify-between bg-secondary px-6 py-5 rounded-t-2xl">
            <p className="font-medium text-2xl flex items-center text-primary gap-2">
              <FileText />
              Headlines
              </p>
            <button className="px-4 py-2 bg-primary text-secondary rounded">View all archives</button>
          </div>
          
          {/* Example Headline */}
          <div className="flex flex-col space-y-6">
                <section className="flex justify-between w-full h-72 rounded-2xl border border-zinc-200 overflow-hidden "> 
                    <div className="p-5 flex flex-col justify-center gap-6 w-[50%]">
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-secondary ">MASTS 2024 Friendship Games</p>
                        <p>WMSU finished in fifth place, delivering an impressive performance in both sport and socio-cultural categories.</p>
                        <p className="text-secondary font-medium mt-3">December 6, 2024</p>
                      </div>
                        <a href="" className="flex items-center font-semibold gap-2 bg-secondary text-primary w-fit py-2 px-4 rounded">View link <ArrowUpRight/> </a>
                    </div>
                    <img src={hero_img} alt="" srcset="" className=" object-cover object-center w-[50%]"/>
                </section>
                 <section className="flex justify-between w-full h-72 rounded-2xl border border-zinc-200 overflow-hidden "> 
                    <div className="p-5 flex flex-col justify-center gap-6 w-[50%]">
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-secondary ">WMSU PALARO 2024: The Opening Gambit</p>
                        <p>Today, November 4th, marks the start of the sports events under the theme "Stronger Together, Victorious Forever.</p>
                        <p className="text-secondary font-medium mt-3">November 4, 2024</p>
                      </div>
                        
                        <a href="" className="flex items-center font-semibold gap-2 bg-secondary text-primary w-fit py-2 px-4 rounded">View link <ArrowUpRight/> </a>
                    </div>
                    <img src={sample_event_img} alt="" srcset="" className=" object-cover object-center w-[50%]"/>
                </section>
          </div>
        </section>
    </div>
    )
}

export default Home