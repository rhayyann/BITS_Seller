import React from 'react'
import AdBanner from '../components/AdBanner/AdBanner'
import SuperSaleBanner from '../components/AdBanner/SuperSaleBanner'
import ServiceBanner from '../components/AdBanner/ServiceBanner'


const Home = () => {
    return (
        <div>
            <AdBanner/>
            <SuperSaleBanner/>
            <ServiceBanner/>
        </div>
    )
}

export default Home
