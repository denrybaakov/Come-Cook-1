import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatClient from '../Chat/ChatClient';

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

  return (
    <div>
      <button className="btn-order" onClick={handleOpen}>Редактировать2</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className='title'>Изменить заказ</h3>
          <div className="modalEdit">
            <input type="text" className="input-profile setting__input" name="date" value={date} />
            <input type="text" className="input-profile setting__input" name="address" value={address} />
            <input type="text" className="input-profile setting__input" name="title" value={title} />
            <input type="text" className="input-profile setting__input" name="text" value={text} />
            <input type="text" className="input-profile setting__input" name="numOfPeople" value={numOfPeople} />
            <input type="text" className="input-profile setting__input" name="price" value={price} />
            <button className="btn-secondary setting__btn">Изменить</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEdit
