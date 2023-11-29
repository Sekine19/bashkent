import React, { useState } from 'react'
import { MainMenu } from './menu/MainMenu'
import { DeliveryMenu } from './menu/DeliveryMenu'
import Layout from './Layout';

export const AppMenu = () => {
  const [menuStatus, setMenuStatus] = useState('main');
  const changeMenuStatus = (status) => {
    setMenuStatus(status)
  }
  return (
    <Layout>
      <div className='app-menu'>
        <div className="container">
          <div className="menu-buttons">
            <button onClick={() => changeMenuStatus('main')} className={menuStatus === 'main' ? 'active' : ''}>Restoran menyu</button>
            <button onClick={() => changeMenuStatus('delivery')} className={menuStatus === 'delivery' ? 'active' : ''}>Çatdırılma menyusu</button>
          </div>
          <div className="menu-content">
            <MainMenu menuStatus={menuStatus} />
            <DeliveryMenu menuStatus={menuStatus} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
