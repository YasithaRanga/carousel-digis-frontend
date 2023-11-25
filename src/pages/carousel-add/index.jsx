import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CarouselAdd = () => {
  const navigate = useNavigate()

  const [url, setUrl] = useState()
  const [title, setTitle] = useState()
  const [subTitle, setSubTitle] = useState()
  const [message, setMessage] = useState()
  const [status, setStatus] = useState("success")


  const submitForm = async (e) => {
    e.preventDefault()

    const payload = {
      image: url,
      title: title,
      subTitle: subTitle,
    }

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/carousel`, payload).then(res => {res.data.response.insertedId ? (setMessage("Data added successfully"), setStatus("success")) : (setMessage("Data adding failed"), setStatus("error"))})
  }



  return(
    <div className="container bg-slate-600 max-w-none h-screen p-4">
      <h1 className="text-white text-2xl mb-4">Add Image to Database</h1>
      <form className="flex flex-col max-w-2xl gap-4 bg-slate-300 p-10 rounded-lg" onSubmit={(e) => submitForm(e)}>
        {message ? <p className={`${status === "success" ? 'text-green-700' : 'text-red-600'}`}>{message}</p> : ''}
        <input type="text" placeholder="Enter the Image URL" required className='p-4 rounded-lg' onChange={(e) => setUrl(e.target.value)}/>
        <input type="text" placeholder="Enter Title" required className='p-4 rounded-lg' onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Enter Subtitle" required className='p-4 rounded-lg' onChange={(e) => setSubTitle(e.target.value)}/>
        <button type="submit" className="bg-blue-500 p-4 rounded-lg text-white font-bold hover:opacity-90">Add</button>
        <button type="cancel" className="bg-red-500 p-4 rounded-lg text-white font-bold hover:opacity-90" onClick={() => navigate('/')}>Back to Home</button>
      </form>
    </div>
  )
}

export default CarouselAdd
