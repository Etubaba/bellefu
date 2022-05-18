import { useState } from "react";
import Link from "next/link";

const CreateProductHeader = () => {
  const [clearHeader, setClearHeader] = useState(false)


  if (clearHeader) return null;

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex space-x-4">
        <p className="text-sm uppercase text-bellefuOrange">notice:</p>
        <p className="text-sm">You're required to complete your profile before you can post products. <Link href="#"><a className="text-bellefuOrange hover:underline">Click here to continue</a></Link> or ignore if you have already.</p>
      </div>
      <div className="text-2xl hover:cursor-pointer" onClick={() => {setClearHeader(true)}}>&times;</div>
    </div>
  )
}

export default CreateProductHeader;