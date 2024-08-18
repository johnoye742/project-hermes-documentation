'use client'

import { useToast } from "./use-toast"

export default function Code({ code }) {
  const { toast } = useToast()
  return (
    <div className="w-full relative p-5 bg-slate-800 text-white rounded-lg">
      <p>{code}</p>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-solid-rounded/css/uicons-solid-rounded.css'/>
      <div className="top-5 absolute right-5 cursor-pointer">
         <i class="fi fi-sr-copy" onClick={() => {
           navigator.clipboard.writeText(code)
           toast({
             title: "Copied Successfully",
             description: "Successfully copied to clipboard"
           })
         }}></i>       
      </div>
    </div>
  )
}


