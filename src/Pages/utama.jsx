import React from 'react';
import {Switch,Route,Routes} from 'react-router-dom';

//pages
import Agenda from './agenda';
import Keranjang from './keranjang';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Agenda />} />
        <Route exact path="/keranjang" element= {<Keranjang />} />
    </Routes>
)

export default Utama;