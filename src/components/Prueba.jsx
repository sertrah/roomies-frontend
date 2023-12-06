import React, { useEffect, useState } from 'react';
import { demoRepository } from '../layer-infrastructure/BackRequest/repositories/demo.repository';

function Prueba() {
    useEffect(() => {
        demoRepository.getById(2).then((a) => {
            debugger;
        });
    }, [])
    return (
        <div>HOLA</div>
    )
}

export default Prueba