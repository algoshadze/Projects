import React from 'react'

import PhoneIcon from './phone.ico'

function Contacts() {
  return (
    <div>
      <div >
        <h4>Адрес:</h4>

            <p>
              <i class="icon-map-marker"></i>м. Славянский Бульвар, Можайское шоссе 30 <br /> (вход со двора, где на козырьке написано "МУЗМАГ") <br />  Время работы 11:00 - 22:00</p>

        <h4>Телефон:</h4>

        <a><img src={PhoneIcon} class="icon-phone"/> 8 (999) 842-05-45</a><br/>
        <a><img src={PhoneIcon} class="icon-phone"/> 8 (964) 566-10-00 </a>
        <h4>Звонить с 11 до 20</h4>

        <h4>E-mail</h4>

            <p>
              <i class="icon-envelope"></i>
              <a style={{ fontsize: 14 }} href="mailto:privet@kupitegitaru.ru" onclick="ga('send', 'event', 'post_l', 'Click'); yaCounter34067245.reachGoal('post_l'); return true;">privet@kupitegitaru.ru</a>
            </p>
  
      </div>
    </div>
  )
}

export default Contacts
