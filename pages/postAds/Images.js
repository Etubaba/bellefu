import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {handleImagesUpdate} from "../../features/bellefuSlice";



const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 7,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 150,
  padding: 4,
  boxSizing: "border-box",
};

const img = {
  width: "20vw",
  borderRadius: 7,
};

export default function Images(props) {
  const router = useRouter();


  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles((prevState) => [
        ...prevState,
        URL.createObjectURL(acceptedFiles[0]),
      ]);
      setFiles2((prevState) => [...prevState, acceptedFiles]);
    },
  });

  const handleRemovetag = (tags) => {
    // tags.stopPropagation();
    const newArr = files.filter((tag) => tag !== tags);
    setFiles(newArr);
  };

  // console.log(files);
  console.log(files2);
  const thumbs = files.map((file, index) => (
    <div style={thumb} key={index}>
      <div className="flex">
        <img src={file} style={img} />
        <MdClose
          onClick={() => handleRemovetag(file)}
          className="text-[28px] z-10 cursor-pointer bg-gray-100  hover:bg-gray-300 p-[2px] rounded-md m-[3px] absolute "
        />
      </div>
    </div>
  ));

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    if( files2.length!==0){
          dispatch(handleImagesUpdate(files2));
          router.push('/postAds/Publish')
 
    }else{
      return;
    }
  }
  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   files.forEach(file => URL.revokeObjectURL(file.preview));
  // }, [files]);

  return (
    <div>
      {files.length === 0 ? (
        <div
          {...getRootProps()}
          className="border-dashed  space-y-4 border-4 mx-10 my-16 flex flex-col border-gray-300 justify-center p-10  items-center hover:border-blue-400 "
        >
          <input {...getInputProps()} />
          <p>
            <BsCloudUpload className="text-6xl text-gray-600" />
          </p>

          <div className="space-y-3 flex flex-col items-center justify-center">
            <p>Click here or Drag & drop images here </p>

            <div>
              <p>
                Max file size : <strong className="ml-4">5mb</strong>
              </p>
              <p className="mb-10">Accept : jpeg/png</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="border-dashed  space-y-4 border-4 mx-10 my-16 flex  border-gray-300 p-10   hover:border-blue-400 flex-wrap ">
            <div className="m-5  flex">
              <aside>{thumbs}</aside>
            </div>
            <div
              className="border-gray-300 p-6 relative top-[13px] h-[7vw] rounded-md m-5 border-dashed border-4 hover:border-blue-400 "
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <span>
                <AiOutlinePlus className="text-4xl text-gray-600" />
              </span>
            </div>
          </div>
          <div className="p-5 flex justify-between">
            <button
            onClick={handleBack}
              type="submit"
              class="flex justify-center items-center w-[15vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Back
            </button>
            <button
            disabled={files2.length===0?true:false}
              onClick={handleSubmit}
              type="submit"
              class="flex justify-center items-center w-[15vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}
Images.Layout = Layout;
