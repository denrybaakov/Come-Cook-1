import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatClient from '../Chat/ChatClient';
import { useDispatch } from 'react-redux';
import { updateOrder, updateOrderCurrentClient } from '../../redux/actions/ordersAction';

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

const ModalEdit = ({ id, index, date, address, title, text, numOfPeople, price }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState({ date, address, title, text, numOfPeople, price })

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(updateOrder({id, ...input}))
    dispatch(updateOrderCurrentClient({id, ...input}))
    setOpen(false)
  }


  return (
    <div>
      <button className="btn-order" onClick={handleOpen}>Редактировать</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className='title'>Изменить заказ</h3>
          <div className="modalEdit">
            <input type="text" className="input-profile setting__input" name="date" value={input.date} onChange={inputHandler} />
            <input type="text" className="input-profile setting__input" name="address" value={input.address} onChange={inputHandler}/>
            <input type="text" className="input-profile setting__input" name="title" value={input.title} onChange={inputHandler}/>
            <input type="text" className="input-profile setting__input" name="text" value={input.text} onChange={inputHandler}/>
            <input type="text" className="input-profile setting__input" name="numOfPeople" value={input.numOfPeople} onChange={inputHandler}/>
            <input type="text" className="input-profile setting__input" name="price" value={input.price} onChange={inputHandler}/>
            <button className="btn-secondary setting__btn" onClick={() => editHandler(id)}>Изменить</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEdit
