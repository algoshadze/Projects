import React from 'react';
import Navbar from '../menu/Navbar'
import SocLinks from '../SocLinks/SocLinks'
import Header from '../header/Header'
import { makeStyles } from '@material-ui/core/styles';
import Diploms from '../Diploms/Diploms'
function AboutMe() {

  const useStyles = makeStyles({
    root: {
        alignitems: 'center',
        justifycontent: 'center',
        width:900, 
        margin: 'auto',
        marginTop:50,
      
    },
});
const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="u441">
        <div id="u432">
          <p><span>Дата рождения</span><span>: 24 ноября 1976</span></p>
        </div>
      </div>
      <div id="u441">
        <div id="u432">
          <p><span>Место рождения</span><span>: Нижний Новгород, Россия</span></p>
        </div>
      </div>
      <div id="u441">
        <div id="u432">
          <p><span>Стаж</span><span>: 21 год</span></p>
        </div>
      </div>
      <div id="u441">
        <div id="u432">
          <p><span>Специализация</span><span>: психология, психиатрия, неврология </span></p>
        </div>
      </div>
      <div id="u441">
        <div id="u432">
          <p><span>Обо мне:</span></p>
        </div>
      </div>
      <div id="u439" className={classes.root}>
        <div id="u440" >
          <p><span>
            Практикующий психолог в области семейного и индивидуального психологического консультирования с 1999 г.,
            процессуальный психотерапевт, кандидат психологических наук.
          </span></p>
          <p><span>
            Я работаю в практической психологии с 1999 года.
            При этом мне важно учиться и развиваться самой и обогащать свои профессиональные знания и умения.
            Ведь хотя мы все похожи, все-таки каждый из нас уникален, со своим внутренним миром, своей историей.
            А значит и методы работы каждому будут подходить свои.
          </span></p>
          <p><span>
            Я очень уважаю людей, которые стремятся развиваться, разбираться в себе, узнавать что-то новое,
            наполнять свою жизнь. Людей, которые не боятся увидеть и признать, что нужно что-то изменить в себе, в своей жизни,
            в отношениях, и обратиться за помощью к психологу с конкретными вопросами за краткосрочной психологической помощью,
            или для более глубокой и длительной работы. В любом случае важно, чтобы каждый уходил со своими обретениями:
            нашел свои источники сил и желаний, открыл новые (а иногда и хорошо забытые старые) качества самого себя,
            научился своим способам решения задач и достижения целей и многому другому.
          </span></p>
        </div>
      </div>

      <div id="u441">
        <div id="u432">
          <p><span>Профессиональное образование:</span></p>
        </div>
      </div>


      <div id="u439">
        <div id="u440">
          <p><span><br /></span></p><p><span>●&nbsp; &nbsp;&nbsp;
            1994-2000 гг. - Университет Российской академии образования,
            психолого-педагогический факультет. Специальность – «психолог-консультант,преподаватель психологии».
            </span></p><p><span><br /></span></p><p><span>●&nbsp; &nbsp;&nbsp;
        1998-1999 гг.&nbsp; УРАО. Психолого-педагогический факультет, лаборатория прикладной психологии.
        Курсы теоретических и практических занятий по теме: «Семья и ребенок: работа с посттравмвтическими
            стрессовыми состояниями»</span></p><p><span><br /></span></p><p><span>●&nbsp; &nbsp;&nbsp;
        2000 г. Государственная академия инноваций. Курсы повышения квалификации:
            «Системный подход и процессуальные техники в индивидуальном консультировании».</span></p><p><span><br />
          </span></p><p><span>●&nbsp; &nbsp;&nbsp; 2002г. Государственная академия инноваций.&nbsp;
          Центр практической психологии «Катарсис». Кафедра практической психологии и менеджмента.
          «Тренинг психокоррекционной профилактики наркозависимости для подросткового и старшего подросткового возраста».
            </span></p><p><span><br /></span></p><p><span>●&nbsp; &nbsp;&nbsp;
            2004 – Российская медицинская академия последипломного образования МЗ РФ </span></p><p><span><br />
          </span></p><p><span>●&nbsp; &nbsp;&nbsp; &quot;
            Медицинская психология в детской и подростковой психиатрии&quot;</span></p><p><span><br /></span></p><p><span>●
        &nbsp; &nbsp;&nbsp;
        2007 – закончила аспирантуру в психологическом институте РАО РФ&nbsp; - Кандидат психологических наук.
            </span></p><p><span><br /></span></p><p><span>●&nbsp; &nbsp;&nbsp;
        2009-2011 г. Московский Институт Процессуальной терапии Консультирования.
            Курс «Основы процессуальной терапии»</span></p><p><span><br /></span></p><p>
            <span>●&nbsp; &nbsp;&nbsp; 2011- 2014 г. Международная программа &quot;
            Интегральная соматическая терапия&quot;. Курс&nbsp; Др. Раджа Сельвам.</span></p><p><span><br />
          </span></p><p><span>●&nbsp; &nbsp;&nbsp; 2012-2013 г.
          Программа по работе с травмами развития, шоковыми травмами и хроническими
            телесными симптомами (МИПИТ, Елена Романченко).</span></p><p><span><br /></span></p>
        </div>
      </div>

      <div id="u441">
        <div id="u432">
            Дипломы и Сертификаты:
        </div>
      </div>
      <Diploms/>
    </div>


  );
}

export default AboutMe;
