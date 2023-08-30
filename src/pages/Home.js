import React from 'react';
import CTA from '../components/Home/CTA';
import HeroSection from '../components/Home/HeroSection';
import AddYourSchool from '../components/Home/AddYourSchool';
import Newsletter from '../components/Home/Newsletter';

function Home() {
    return (
        <div>
            <HeroSection />
            <div className="bg-gray-50 mt-32">
                <CTA
                    title="How HOSA empowers future health professionals"
                    description="Health Occupation Students of America (HOSA) is a national student organization for those interested in pursuing a career in the healthcare industry. HOSA provides opportunities for students to develop leadership skills, network with healthcare professionals, and participate in competitive events."
                    button="Learn More About HOSA"
                    image="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    link="https://hosa.org/"
                    target
                    right
                />
                <CTA
                    title="How the Heartland region takes HOSA to the next level"
                    description="We set our region apart by not only promoting active participation and leadership in competitive events/conferences, but also taking extra steps to make sure our members are qualified winners. By providing the necessary resources and industry professionals, we prepare our members for victory in HOSA."
                    button="Learn More About Heartland"
                    image="https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    link="/about"
                    left
                />
            </div>
            <Newsletter />
            <AddYourSchool />
        </div>
    );
}

export default Home;
