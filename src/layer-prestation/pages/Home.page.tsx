import React, { useEffect, useState } from 'react';
import Movements from './Home/components/Movements';
import Bills from './Home/components/Bills';
import FloatingBtn from './Home/components/FloatingBtn';


function HomePage({ Astro }: any) {
    console.log('Astro', Astro)
    return (
        <main>
            <section>
                <Bills />
            </section>

            <section>
                <Movements />
            </section>
            <FloatingBtn Astro={Astro} />
        </main>
    )
}

export default HomePage