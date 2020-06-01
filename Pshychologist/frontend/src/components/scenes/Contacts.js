import React from 'react'

function Contacts() {
  return (
    <div>
      <div >
        <h4>Адрес:</h4>
        <ul>
          <li class="address">
            <p>
              <i class="icon-map-marker"></i>м. Шоссе Энтузиастов, Шоссе Энтузиастов 31с38 <br /> (Торговый центр 31, 1 минута от метро) <br />   Время работы 10:00 - 20:00  <br /> <br /> <br /> м. Славянский Бульвар, Можайское шоссе 30 <br /> (вход со двора, где на козырьке написано "МУЗМАГ") <br />  Время работы 11:00 - 22:00</p>
          </li>
        </ul>
        <h4>Телефон:</h4>
        <a href='#' class="icon-phone"></a> 8 (999) 842-05-45
                <ul>
          <li class="phone%">
            <p>
              <i class="icon-phone"></i><span>8 (964)</span> 566-10-00</p>
          </li>
        </ul>
        <h4>По вопросу опта:</h4>
        <ul>
          <li class="phone%">
            <p>
              <i class="icon-phone"></i>8 (952) 243-8424</p>
          </li>
        </ul>
        <h4>E-mail</h4>
        <ul>
          <li class="mail">
            <p>
              <i class="icon-envelope"></i>
              <a style={{ fontsize: 14 }} href="mailto:privet@kupitegitaru.ru" onclick="ga('send', 'event', 'post_l', 'Click'); yaCounter34067245.reachGoal('post_l'); return true;">privet@kupitegitaru.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts