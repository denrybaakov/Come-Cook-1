import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatClient from '../Chat/ChatClient';
import { checkUser } from '../../redux/actions/userAC';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalAvatarClient = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})
  const dispatch = useDispatch()

  const povar = useSelector(state => state.user)

  const submitHandler = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)


    try {
      const res = await axios.post('/uploadClient', formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })

      dispatch(checkUser())
      const { fileName, filePath } = res.data

      setUploadedFile({ fileName, filePath })
    } catch (error) {
      if (error.response.status === 500) {
        console.log("problem with server");
      } else {
        console.log(error.response.data.msg);
      }
    }
    handleClose()
  }

  const changeHandler = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  return (
    <div>
      <button className="btn-order modal__show" onClick={handleOpen}>Изменить картинку</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalAvatar"
      >
        <Box sx={style}>
          <h2>Изменить аватар</h2>
          <input className="file" type="file" onChange={changeHandler} />
          <button type="submit" value="Upload" className='btn-secondary' onClick={submitHandler} >Применить</button>

          {/* <ChatClient /> */}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAvatarClient
