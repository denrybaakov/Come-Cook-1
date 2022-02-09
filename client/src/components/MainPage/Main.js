import React from 'react';

import HeaderMain from './HeaderMain/HeaderMain';
import PovarPage from './PovarPage/PovarPage';
import BenefitsMain from './Benefits/BenefitsMain';
import ClientPage from './ClientPage/ClientPage';
import FooterPage from './Footer/FooterPage';
import PovarPreview from './PovarPreview/PovarPreview';

export default function Main() {
  return (
    <>
      <HeaderMain />
      <PovarPreview />
      <PovarPage />
      <ClientPage />
      <BenefitsMain />
      <FooterPage />
    </>
  );
}
