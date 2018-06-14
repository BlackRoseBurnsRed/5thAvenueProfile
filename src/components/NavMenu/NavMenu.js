/**
 * Created by Zaxar-HP on 05.12.2017.
 */
import React from 'react'

import './NavMenu.css'

export class NavMenu extends React.Component {
    render() {
        return(
                <ul className="nav-menu">
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Наши проекты</li>
                    <li>Структура СК</li>
                    <li>Новости</li>
                    <li>FAQ</li>
                </ul>
        )
    }
}