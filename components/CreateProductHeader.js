import { useState } from "react";
import Link from "next/link";

const CreateProductHeader = () => {
  const [clearHeader, setClearHeader] = useState(false)


  if (clearHeader) return null;

  return (
    <div className="flex items-center justify-between p-6">
      <div>
        <p className="text-2xl uppercase">notice:</p>
        <p className="text-lg">You're required to complete your profile before you can post products. <Link href="#"><a>Click here to continue</a></Link> or ignore if you have already.</p>
      </div>
      <div className="text-xl" onClick={() => {setClearHeader(true)}}>&times;</div>
    </div>
  )
}

export default CreateProductHeader;