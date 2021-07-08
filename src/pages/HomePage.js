import React from 'react'

import Header from '../components/Header';
import CashBox from '../components/CashBox';
import MarkBox from '../components/MarkBox';
import SelectionBox from '../components/SelectionBox';
import CashModal from '../components/CashModal';
import BillModal from '../components/BillModal';
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
            <CashModal/>
            <BillModal/>
            <Footer/>
        </>
    )
}

export default HomePage
