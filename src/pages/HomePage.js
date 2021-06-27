import React from 'react'

import Header from '../components/Header';
import CashBox from '../components/CashBox';
import MarkBox from '../components/MarkBox';
import SelectionBox from '../components/SelectionBox';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <CashBox/>
                <MarkBox/>
                <SelectionBox/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage
