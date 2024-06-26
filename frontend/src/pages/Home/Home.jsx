import React, {useState} from 'react';
import './Home.css'
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import {FoodDisplay} from "../../components/FoodDisplay/FoodDisplay.jsx";

function Home(props) {

    const [category, setCategory] = useState('All');
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />

        </div>
    );
}

export default Home;