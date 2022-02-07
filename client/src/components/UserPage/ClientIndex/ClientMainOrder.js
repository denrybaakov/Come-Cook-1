
import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import ClientNewOrder from './ClientNewOrder';
import ClientOrder from './ClientOrder';
import ClientCompletedOrders from './ClientCompletedOrders';

const blue = {
  50: '#E1EDD7', // 
  100: '#C2E0FF',
  200: '#9CB189', //
  300: '#E5E5E5',
  400: '#9CB189',
  500: '#7E906E', // haki
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  ${'' /* width: 100%; */}
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 500px;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[500]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const ClientMainOrder = () => {
  return (
    <div className="col-70 profile__col-70">
      <h2 className="">Заказы</h2>
      <TabsUnstyled defaultValue={1} className="profile__tab">
        <TabsList>
          <Tab>Создать заказ</Tab>
          <Tab>Мои заказы</Tab>
          <Tab>Завершенные заказы</Tab>
        </TabsList>
        <TabPanel value={0}>
          <ClientNewOrder />
        </TabPanel>
        <TabPanel value={1}>
          <ClientOrder />
        </TabPanel>
        <TabPanel value={2}>
          <ClientCompletedOrders />
        </TabPanel>
      </TabsUnstyled>
    </div>
  );
}

export default ClientMainOrder
