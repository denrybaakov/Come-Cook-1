import axios from 'axios'
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { checkUser } from '../../../redux/actions/userAC'
import avatar from '../img/avatar.png'
import { userLogout } from "../../../redux/actions/userAC"
import ClientIndexPage from "../ClientContent/ClientIndexPage"
import ClientMainOrder from "./ClientMainOrder"
import ClientSearch from "./ClientSearch"
import ClientMessage from "./ClientMessage"
import ClientSettings from "./ClientSetting"
import ModalAvatar from '../../Modal/Modal'
import ModalAvatarClient from '../../Modal/ModalAvatarClient'


const ClientIndex = () => {
  const [linkPage, setLinkPage] = useState(false)
  const { name, email } = useSelector(state => state.user)

  const changeLink = e => {
    e.preventDefault()
    const { link } = e.target.dataset
    switch (link) {
      case 'index':
        return setLinkPage(<ClientIndexPage />)
      case 'search':
        return setLinkPage(<ClientSearch />)
      case 'message':
        return setLinkPage(<ClientMessage />)
      case 'settings':
        return setLinkPage(<ClientSettings />)
      case 'mainOrder':
        return setLinkPage(<ClientMainOrder />)
      default:
        return false
    }
  }


  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const client = useSelector(state => state.user)
  const dispatch = useDispatch()


  // const submitHandler = async e => {
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append('file', file)

  //   try {
  //     const res = await axios.post('/uploadClient', formData, {
  //       headers: {
  //         'Content-type': 'multipart/form-data'
  //       }
  //     })

  //     dispatch(checkUser())
  //     const { fileName, filePath } = res.data


  //     setUploadedFile({ fileName, filePath })
  //   } catch (error) {
  //     if (error.response.status === 500) {
  //       console.log("problem with server");
  //     } else {
  //       console.log(error.response.data.msg);
  //     }
  //   }

  // }
  // const changeHandler = e => {
  //   setFile(e.target.files[0])
  //   setFilename(e.target.files[0].name)
  // }

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userLogout())
  }

  const pathAvatar = `http://localhost:3001${client.avatar}`

  console.log(client);
  return (

    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-30 profile__col-30">

            <div className="profile__avatar">
              <img src={client.avatar ? pathAvatar : avatar} alt="cv" className="profile__img2" />
              {/* <ModalAvatar /> */}
              <ModalAvatarClient />
            </div>

            {/* <form onSubmit={submitHandler} >
              <div>
                <input type="file" onChange={changeHandler} />
                <label htmlFor='customFile'>
                </label>
              </div>
              <input type="submit" value="Upload" className='btn' />
            </form> */}

            <div className="profile__text">
              <span className="profile__name">{name}</span>
              <span>{email}</span>
              <span>Статус : Клиент</span>
            </div>

            <nav className="profile__nav">
              <a href="!#" data-link="index" onClick={changeLink}>Главная</a>
              <a href="!#" data-link="mainOrder" onClick={changeLink}>Заказы</a>
              <a href="!#" data-link="search" onClick={changeLink}>Поиск</a>
              <a href="!#" data-link="message" onClick={changeLink}>Сообщения</a>
              <a href="!#" data-link="settings" onClick={changeLink}>Настройки</a>
              <a href="!#" onClick={logoutHandler}>Выход</a>
            </nav>
          </div>

          {linkPage ? linkPage : <ClientIndexPage />}
        </div>
      </div>
    </section>
  )
}

export default ClientIndex
