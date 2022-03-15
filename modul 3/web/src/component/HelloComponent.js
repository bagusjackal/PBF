// Agar function arrow HelloComponent bisa berjalan di react maka tambahan react

import React from "react";
import './HelloComponent.css';

const HelloComponent = () => {
    return <p className="text-p"> Nama saya adalah Farid Bagus Setiawan</p>
}

// Agar component ini dapat dipakai dimana saja
export default HelloComponent;