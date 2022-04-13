import React, { useEffect, useState, useRef } from "react";
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
  const [fname, setFname] = useState(null)
  const [lname, setLname] = useState(null)
  const [dp, setDp] = useState(null)
  const [receiverId, setReceiverId] = useState(null)




  const theRef = useRef()





  const senderId = useSelector(state => state.bellefu?.profileDetails?.id)

  const test = 639


  const handleMessage = () => {


    const formData = new FormData();
    formData.append('messageTo', receiverId)
    formData.append('messageFrom', test)
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
        if (res.data.status) {
          setMessage('')
          setFile('')
        }
      })


  }


  useEffect(() => {
    const getMessages = async () => {

      await axios.get(`${apiData}get/user/messages/${test}`)
        .then(res => setContact(res.data.data))
    }

    getMessages()

  }, [])



  useEffect(() => {

    const getChat = async () => {
      // senderId/receiverId
      await axios.get(`${apiData}single/contact/${test}/${receiverId}`)
        .then(res => setChat(res.data.data))
    }

    getChat()
  }, [message, receiverId])






  const handleToBottom = () => {
    theRef.current?.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })

  }




  if (read) {


    handleToBottom()
  }

  // useEffect(() => {




  //   // window.scrollTo({
  //   //   top: document.body.scrollHeight,
  //   //   left: 0,
  //   //   behavior: 'smooth'
  //   // });

  // }, [read])


  console.log('wetin de the ref', theRef)

  function isToday(dateParameter) {
    const today = new Date();

    return (dateParameter.getDate() == today.getDate()
      && dateParameter.getMonth() == today.getMonth() &&
      dateParameter.getFullYear() == today.getFullYear())
  }



  return (
    // the message header
    <div className="w-full  md:ml-4  md:mt-3 lg:ml-6 rounded-lg lg:mt-5 bg-bellefuWhite h-auto md:w-auto lg:w-auto pb-2 ">
      <div className="flex items-center justify-between space-x-96 text-center p-2">
        <div className="text-xl ">Messages</div>

      </div>
      <hr />

      {/* message contents 1 */}
      {!read && (
        <div>
          {contact?.map((item, index) => (

            <div
              onClick={() => {
                setFname(item.first_name)
                setLname(item.last_name)
                setDp(item.avatar)
                setRead(true)
                setReceiverId(item.id)
              }}
              key={index} className=" w-full lg:w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
              <div className="flex">
                <img
                  src="https://bellefu.inmotionhub.xyz/get/user/images/useravatar.jpg"
                  // src={`https://bellefu.inmotionhub.xyz/get/user/images/${item.avatar}`}
                  className="w-20 h-20 mt-2 mr-10 rounded-full"
                  alt="Bellefu"
                />
                <div className='w-full mt-3'>
                  <span className='flex w-full  mb-1 justify-between space-x-30'>
                    <strong className='flex-1'>{item.first_name} {item.last_name}</strong>
                    {item.unread > 0 ? <span className='bg-bellefuGreen  text-center h-6 w-6 rounded-full justify-end text-white '>{item.unread}</span> : null}
                  </span>

                  <p className="text-[#3F3F3F] mb-3 text-base">
                    {item.message.body}
                  </p>

                  <p className="text-[#9799AB] text-sm">{moment(item.message.chattime).startOf('day').fromNow()}</p>
                </div>
              </div>

            </div>

          ))}

        </div>

      )}

      {/* Open message to reply */}

      {read && (
        <div className='w-[93%] rounded-lg m-10 border h-auto '>
          <div className='sticky z-30 top-0'>
            <div className='flex justify-between space-x-40 items-center bg-[#F9FDF5] px-2 p-1'>
              <div className='flex m-5 items-center'>
                <img
                  src="https://bellefu.inmotionhub.xyz/get/user/images/useravatar.jpg"
                  // src={`https://bellefu.inmotionhub.xyz/get/user/images/${dp}`}
                  alt='error'
                  className="w-12 h-12 rounded-full mr-4 "
                />
                <span className='flex space-x-2'>
                  <strong>{fname}</strong>
                  <strong>{lname}</strong>
                </span>
              </div>
              <div className='flex justify-around m-5 '>
                <div className='rounded-lg flex border px-3 mr-3 p-1'><IoMdCall className='text-xl mr-2' /> Call</div>
                <div className='rounded-lg flex border space-x-2 px-4 p-1 mr-10'><FcVideoCall className='text-2xl mr-2' /> Video <span>call</span></div>
                <div onClick={() => setRead(false)}><MdOutlineCancel className='text-3xl text-bellefuOrange ' /></div>

              </div>

            </div>
            <hr />
          </div>

          <div ref={theRef} className='h-80 p-5 overflow-y-scroll    bg-[#F9FDF5] '>

            <ul className='space-y-2'>
              {chat?.map((item, index) => (
                <div key={index} className='block'>
                  <li className={item.from_id !== test ? 'flex justify-start' : "flex justify-end"} >
                    <div className={item.from_id !== test ? "after:content-[''] after:absolute after:right-[100%] after:top-[0] after:border-l-gray-100  relative max-w-xl mb-4 px-8 py-4 text-gray-700 bg-gray-100 rounded shadow"
                      : "relative max-w-xl mb-4 px-8 py-4 text-gray-100 bg-bellefuGreen rounded shadow"}>
                      <div className='block'>
                        <span className="block">
                          {item.body}
                        </span>


                      </div>

                    </div>

                  </li>
                  <span className={item.from_id !== test ? 'flex justify-start text-xs text-gray-400 mt-[-16px]' : 'text-gray-400 flex mt-[-16px] justify-end text-xs'}>

                    <span> {

                      isToday(new Date(item.created_at))

                        ? moment(item.created_at).format('LT') : moment(item.created_at).format('ll')}</span>
                    <span> {item.from_id === test && item.seen ? <div className=' text-[#9799AB] text-xs '><FaEye className=' text-xm mt-1 ml-1' /></div> : null}</span>
                  </span>
                  {/* <div ref={theRef} ></div> */}
                </div>
              ))}

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








    </div>

  )
};

messages.Layout = Layout;
export default messages;
