'use client'
import { useRouter } from "next/navigation";


const Backbutton = () => {
    const router = useRouter();

  return (
    <span
       onClick={()=> router.back()} 
       className="back-button bg-theme">
        <span className="icon-angle-left"></span> <span> Back</span>
      </span>
  )
}

export default Backbutton