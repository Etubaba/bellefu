import React from "react";
import { useEffect, useState } from "react";
import { useDropzone, Dropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { handleImagesUpdate, handleVideoUpdate } from "../../features/bellefuSlice";
import { toast } from "react-toastify";


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
//   marginBottom: 8,
//   marginRight: 8,
//   width: 350,
//   height: 260,
  padding: 4,
  boxSizing: "border-box",
};

const img = {
  width: "20vw",
  borderRadius: 7,
};

export default function GovId(props) {





  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  // const [vidfi, setVidfi] = useState("");






  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles((prevState) => [
        ...prevState,
        URL.createObjectURL(acceptedFiles[0]),
      ]);

      // see the file object image  dey end for back end which is files2 as arrays of files

      for (let i = 0; i < acceptedFiles.length; i++) {
        let loopedFile = acceptedFiles[i];

        if (files2.length >= 10) {
          toast.error("Image upload can not be more than 10", {
            position: "top-center",
          });
        } else {
          setFiles2((prevState) => [...prevState, loopedFile]);
        }
      }
      // setFiles2((prevState) => [...prevState, acceptedFiles]);
    },
  });






  // console.log(files2);
  const handleRemovetag = (tags) => {
    const newArr = files.filter((tag) => tag !== tags);
    const newArr2 = files2.filter((tag) => tag.name !== tags);
    setFiles(newArr);
    setFiles2(newArr2);
  };

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={index}>
      <div className="flex">
        <img src={file} className="rounded object-fill w-[45vw] md:w-[30vw] lg:w-[18vw]" />
        <MdClose
          onClick={() => handleRemovetag(file)}
          className="text-[28px] z-10 cursor-pointer bg-gray-100  hover:bg-gray-300 p-[2px] rounded-md m-[3px] absolute "
        />
      </div>
    </div>
  ));

  
  //  see where i dey dispatch the file object images to redux then from redux to publish page where i dey end everything
  


  return (
    <div>
      {files.length === 0 ? (
        <div
          {...getRootProps()}
          className="border-dashed w-full  space-y-4 border-4  my-10 flex flex-col border-gray-300 justify-center p-10  items-center hover:border-blue-400 "
        >
          <input {...getInputProps()} />
          <p>
            <BsCloudUpload className="text-6xl text-gray-600" />
          </p>

          <div className="space-y-3 flex flex-col items-center justify-center">
            <p className=" text-[12px] lg:text-base text-center">
              Click here or Drag & drop ID Image
            </p>

            <div>
              <p className=" text-[12px] lg:text-base">
                Max file size : <strong className="ml-[10px">5mb</strong>
              </p>
              <p className="mb-10 text-[12px] lg:text-base">
                Accept : jpeg/png/
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="border-dashed   space-y-4 border-4 lg:mx-10 lg:my-16 flex  border-gray-300 p-10   hover:border-blue-400 flex-wrap ">
            <div className="lg:m-5  flex">
              <aside>{thumbs}</aside>
            </div>
            {files.length<2?<div
              className="border-gray-300 p-6 relative top-[13px] h-[150px] w-[200px] lg:h-[230px] lg:w-[350px] rounded-md  border-dashed border-4 hover:border-blue-400 items-center flex justify-center  "
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <span>
                <AiOutlinePlus className="text-4xl text-gray-600" />
              </span>
            </div>:null}
          </div>




         
        </>
      )}
    </div>
  );
}
