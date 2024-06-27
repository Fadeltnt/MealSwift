import React from 'react';
import { menu_list } from "../../assets/assets.js"; // Assurez-vous que ce chemin est correct
import './ExploreMenu.css';

const ExploreMenu =({category,setCategory}) => {
    return (
        <div className="explore-menu" id={'explore-menu'}>
            <h1>Choose from a Diverse Menu</h1>
            <p className={'explore-menu-text'}>At MealSwift, we offer a wide variety of delicious options to satisfy every craving. From mouth-watering appetizers to hearty main courses and delectable desserts, our diverse menu ensures there’s something for everyone.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={'explore-menu-list-item'}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p> {/* Affiche le nom du menu */}
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;