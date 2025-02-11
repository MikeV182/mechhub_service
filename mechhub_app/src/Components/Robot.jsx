import React from 'react'
import robot_svg from '../Assets/main_page_robot.svg'
import '../Styles/Robot.css'


export default function Robot() {
  return (
    <div className='robot container'>
        <img src={robot_svg} alt="" className='robot-ico'/>
        <div className='robot-text'>
            <h1>
                Факультет Мехатроники
                и Искусственного
                Интеллекта
            </h1>
            <p>
                Воспользуйся своей университетской почтой, чтобы
                получить доступ к базе знаний
            </p>
            <button className='btn'>ВОЙТИ</button>
        </div>
    </div>
  );
}
