import React, { useEffect, useState } from 'react';

function Prueba() {
    useEffect(() => {
        alert('FUNK');
    }, [])
    return (
        <div>HOLA</div>
    )
}

export default Prueba