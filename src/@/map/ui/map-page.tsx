import { useStore } from 'effector-react';
import React, { Suspense, lazy } from 'react';

import styled from 'styled-components';

import { Layout, Main } from '~/ui';

import { $isOpenHistoryModal } from '@/history-modal/model';
import { HistoryModal } from '@/history-modal/ui';
import { Popup } from '@/popup/ui';
import { Sidebar } from '@/sidebar/ui';

//import { Footer } from './footer';
//import { Header } from './header';
//import { Map } from './map';
//import { Underlay } from './underlay';

const Footer = lazy(() => import('./footer'));
const Header = lazy(() => import('./header'));
const Map = lazy(() => import('./map'));
const Underlay = lazy(() => import('./underlay'));

const PopupContainer = styled.div`
  display: none;
`;

const MapPage = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Underlay>
        <Map />
      </Underlay>
      <Header />
      <Main>
        <Sidebar />
        <PopupContainer>
          <Popup />
        </PopupContainer>
        {useStore($isOpenHistoryModal) && <HistoryModal />}
      </Main>
      <Footer />
    </Suspense>
  </Layout>
);

export default MapPage;
