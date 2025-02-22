import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text'>Explore our menu and find your favourite dish</p>
            <div className='explore-menu-list hide-scrollbar'>
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} className='explore-menu-list-item'>
                                <img src={item.menu_image} alt='menu' />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
