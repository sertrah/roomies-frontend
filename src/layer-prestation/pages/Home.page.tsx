import React, { useEffect, useState } from 'react';
import Movements from './Home/components/Movements';
import Bills from './Home/components/Bills';

function HomePage() {
    return (
        <main>
            <section>
                <Bills />
            </section>

            <section>
                <Movements />
            </section>
        </main>
    )
}

export default HomePage