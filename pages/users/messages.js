import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { FaEye } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { BsCheck2All } from 'react-icons/bs'
import { MdDeleteForever, MdSend } from 'react-icons/md'
import { FcVideoCall } from 'react-icons/fc'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { apiData } from "../../constant";
import { toast } from "react-toastify";
import axios from "axios";
import Dropzone from "react-dropzone";
import moment from "moment";







const messages = () => {
  const [read, setRead] = useState(false)
  const [message, setMessage] = useState('')
  const [file, setFile] = useState()
  const [preview, setPreview] = useState()
  const [contact, setContact] = useState([])
  const [chat, setChat] = useState([])



  const senderId = useSelector(state => state.bellefu?.profileDetails?.id)
  const receiverId = 639


  const handleMessage = () => {


    const formData = new FormData();
    formData.append('messageTo', receiverId)
    formData.append('messageFrom', senderId)
    formData.append('image', file !== undefined ? file : '')
    formData.append('message', message)
    axios({
      method: 'POST',
      url: `${apiData}send/messages`,
      data: formData,
      headers: {
        'Content-Type': "multipart/form-data",
      }

    })
      .then(res => {
        console.log(res.data)
        // if (res.data.status) {
        //   toast.success('Your message has been sent successfully.', { position: 'top-right' })



      }
      )

  }


  // useEffect(() => {
  //   const getMessages = async () => {

  //     await axios.get(`${apiData}get/user/messages/${senderId}`)
  //       .then(res => setContact(res.data.data))
  //   }

  //   const getChat = async () => {

  //     await axios.get(`${apiData}single/contact/${senderId}/${receiverId}`)
  //       .then(res => setChat(res.data.data))
  //   }


  //   getChat()

  //   getMessages()

  // }, [])

  console.log(contact)
  return (
    // the message header
    <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2 ">
      <div className="flex items-center justify-between space-x-96 text-center p-2">
        <div className="text-xl ">Messages</div>

        <div className="flex justify-evenly">
          <div className="bg-bellefuBackground text-bellefuOrange rounded m-2 px-2 p-1">
            All
          </div>
          <div className="bg-bellefuBackground rounded px-2 m-2 p-1">New</div>
          <div className="bg-bellefuBackground rounded px-2 m-2 p-1">
            Mark as read
          </div>
        </div>
      </div>
      <hr />

      {/* message contents 1 */}
      {!read && (
        <div>
          <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
            <div className="flex">
              <img
                src="https://www.linkpicture.com/q/gk.jpeg"
                className="w-24 h-24 mt-4 mr-4 rounded-full"
                alt="Bellefu"
              />
              <div>
                <span className='flex mb-1 justify-between space-x-6'><strong>Egi Godknows</strong> <span className='bg-bellefuGreen text-center h-6 w-6 rounded-full text-white '>2</span></span>

                <p className="text-[#3F3F3F] mb-3 text-base">
                  {" "}
                  New notifications from Bellefu, Aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos...
                </p>

                <p className="text-[#9799AB] text-sm">2 days ago</p>
              </div>
            </div>
            <span className="flex justify-end">

              <button
                onClick={() => setRead(true)}
                className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
              >
                <FaEye className="mr-2 text-xl" /> Reply
              </button>


              <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                {" "}
                <MdDeleteForever className="mr-2 text-xl" />
                Delete
              </button>
            </span>
          </div>
        </div>)}

      {/* Open message to reply */}

      {read && (
        <div className='w-[93%] rounded-lg m-10 border h-auto '>



          <div className='flex justify-between space-x-40 items-center bg-[#F9FDF5] px-2 p-1'>
            <div className='flex m-5 items-center'>
              <img
                src="https://www.linkpicture.com/q/gk.jpeg"
                alt='error'
                className="w-12 h-12 rounded-full mr-4 "
              />
              <strong>Egi Godknows</strong>
            </div>
            <div className='flex justify-around m-5 '>
              <div className='rounded-lg flex border px-3 mr-3 p-1'><IoMdCall className='text-xl mr-2' /> Call</div>
              <div className='rounded-lg flex border px-3 p-1 mr-10'><FcVideoCall className='text-2xl mr-2' /> Video call</div>
              <div onClick={() => setRead(false)}><MdOutlineCancel className='text-3xl text-bellefuOrange ' /></div>

            </div>
          </div>

          <hr />

          <div className='h-96 p-5 bg-[#F9FDF5] '>

            <ul className='space-y-2'>
              <li className="flex justify-start">
                <div className="after:content-[''] after:absolute after:right-[100%] after:top-[0] after:border-l-gray-100  relative max-w-xl mb-4 px-8 py-4 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">
                    aptent taciti sociosqu ad litora torquent
                    per conubia nostra
                  </span>

                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl mb-4 px-8 py-4 text-gray-100 bg-bellefuGreen rounded shadow">
                  <span className="block">
                    aptent taciti sociosqu ad litora torquent
                    per conubia nostra
                  </span>

                </div>

              </li>
              <div className='flex justify-end relative text-[#9799AB] top-[-3vh] '><BsCheck2All className=' text-2xl mr-3' />Sent</div>
              <li className="flex justify-end">
                <div className="relative max-w-xl mb-4 px-8 py-4 text-gray-100 bg-bellefuGreen rounded shadow">
                  <span className="block">
                    aptent taciti sociosqu ad litora torquent
                    per conubia nostra
                  </span>

                </div>
              </li>
              <div className='flex justify-end relative text-[#9799AB] top-[-3vh] '><FaEye className=' text-xl mr-3' />Seen</div>
            </ul>

          </div>

          <div className="flex items-center justify-between p-3 border-t border-gray-300">

            <Dropzone
              onDrop={(acceptedFiles) => {
                for (let i = 0; i < acceptedFiles.length; i++) {
                  let loopedfile = acceptedFiles[i];
                  setFile(loopedfile);
                }
                setPreview(URL.createObjectURL(acceptedFiles[0]))
              }
              }

            >
              {({ getRootProps, getInputProps }) => (
                <botton
                  // onClick={handleFile}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <AiOutlinePaperClip className='w-6 h-6 text-3xl text-gray-500 hover:text-gray-300' />
                </botton>
              )}
            </Dropzone>
            <input type="text" placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message" required />
            <button
              disabled={message.length === 0 ? true : false}
              onClick={handleMessage}
              className={message.length === 0 ? 'justify-center flex  items-center px-3 py-3 h-10 w-10 bg-[#E0E0E0] rounded-full' : 'justify-center flex hover:bg-gray-200 items-center px-3 py-3 h-10 w-10 bg-bellefuBackground rounded-full'}>
              <MdSend className={message.length === 0 ? 'text-[#A6A6A6] w-5 h-5 text-3xl ' : ' w-5 h-5 text-3xl  text-gray-500'} />
            </button>

          </div>



        </div>)}






      <div>
        <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
          <div className="flex">
            <img
              src="https://www.linkpicture.com/q/WhatsApp-Image-2022-03-24-at-10.46.33-AM.jpeg"
              className="w-24 h-24 mt-4 mr-4 rounded-full"
              alt="Bellefu"
            />
            <div>
              <span className='flex mb-1 justify-between space-x-6'><strong>Miles Ryker</strong> <span className='bg-bellefuGreen text-center h-6 w-6 rounded-full text-white '>3</span></span>

              <p className="text-[#3F3F3F] mb-3 text-base">
                {" "}
                New notifications from Bellefu, Aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos...
              </p>

              <p className="text-[#9799AB] text-sm">2 days ago</p>
            </div>
          </div>
          <span className="flex justify-end">

            <button
              onClick={() => setRead(true)}
              className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
            >
              <FaEye className="mr-2 text-xl" /> Reply
            </button>



            <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
              {" "}
              <MdDeleteForever className="mr-2 text-xl" />
              Delete
            </button>
          </span>
        </div>
      </div>

    </div>

  )
};

messages.Layout = Layout;
export default messages;
