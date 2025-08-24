import React from 'react'
import pieChart from '../../assets/pieChart.png';
import barChart from '../../assets/barChart.svg';

const HowItWorks = () => {
    return (
        <div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <p className="mb-6">
                    Discover how Food to Future connects restaurants with NGOs to donate food and help families enroll their children in school programs.
                </p>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Step-by-Step Process</h3>
                    <ul className="list-disc pl-6">
                        <li>Restaurants register with Food to Future.</li>
                        <li>NGOs receive notifications for available food donations.</li>
                        <li>Transport is arranged for food pickup and delivery.</li>
                        <li>Families enroll children in associated school programs.</li>
                    </ul>
                </section>
                <div className='text-2xl'>InfoGraphics</div>
                <section className="grid grid-cols-2 gap-6 mb-8">
                    
                    <ul className='flex gap-30'>
                        <img src={pieChart} alt="logo" className="h-50 w-150 opacity-100" />
                        <img src={barChart} alt="logo" className="h-50 w-250 opacity-100" />
                    </ul>

                </section>

                <section className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded shadow">
                        <h4 className="font-semibold">Restaurant Partner</h4>
                        <p className="text-sm mt-2">“Partnering with Food to Future has allowed us to contribute to a sustainable future while supporting local communities.”</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h4 className="font-semibold">Recipient Family</h4>
                        <p className="text-sm mt-2">“Thanks to the donations, my children are now receiving quality education and meals.”</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HowItWorks
