import React from 'react'

const  Footer =  () => {
  return (
    <div className=" bg-orange-500 py-10" >
        <div className=" container mx-auto flex flex-col md:flex-row justify-between" >
            <span className=" text-white font-bold tracking-tight text-3xl" >
                KDUFOOD
            </span>
            <span className=" text-white font-bold tracking-tight flex gap-4 " >
                <span>
                   Privacy Policy
                </span>

                <span>
                   Terms of Service
                </span>
            </span>
        </div>
      
    </div>
  )
}

export default Footer
