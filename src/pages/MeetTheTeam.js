import React from 'react';
import TeamMemberCard from '../components/MeetTheTeam/TeamMemberCard';
import rishabh from '../assets/images/portraits/rishabh.jpeg';
import sajni from '../assets/images/portraits/sajni.png';
import sydney from '../assets/images/portraits/sydney.png';
import arman from '../assets/images/portraits/arman.png';
import farangist from '../assets/images/portraits/farangist.png';
import ananth from '../assets/images/portraits/ananth.png';
import tanvi from '../assets/images/portraits/tanvi.png';
import sarvesh from '../assets/images/portraits/sarvesh.png';

function MeetTheTeam() {
    return (
        <div className="w-10/12 flex flex-col items-center mx-auto">
            <p className="text-purple-400 mt-4 font-semibold text-[12px]">
                MEET THE TEAM
            </p>
            <div className="mt-12">
                <TeamMemberCard
                    fullName="Elizabeth Hileman"
                    title="Regional Advisor"
                    image={rishabh}
                    instagramLink="https://www.instagram.com/rishabhk.exe/"
                    description="Hello Heartland HOSA! I am so excited to serve as your regional President for the 2022-2023 year. Nothing makes me more excited about HOSA than meeting you, hearing your stories, your dreams, and your goals. Please reach out to me if you ever have any questions."
                />
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <TeamMemberCard
                    fullName="Rishabh Kanodia"
                    title="President"
                    image={rishabh}
                    instagramLink="https://www.instagram.com/rishabhk.exe/"
                    description="Hello Heartland HOSA! I am so excited to serve as your regional President for the 2022-2023 year. Nothing makes me more excited about HOSA than meeting you, hearing your stories, your dreams, and your goals. Please reach out to me if you ever have any questions."
                />
                <TeamMemberCard
                    fullName="Sajni Shah"
                    title="Vice President"
                    image={sajni}
                    instagramLink="https://www.instagram.com/sajni_shah12/"
                    description="I am so excited to be back on the regional board for my second year as your Vice President! My greatest priority will be to continue providing networking opportunities and encouraging you to obtain hands-on experience in skills that will aid your future."
                />
                <TeamMemberCard
                    fullName="Sydney Crenshaw"
                    title="President-Elect"
                    image={sydney}
                    instagramLink="https://www.instagram.com/penshaw02/"
                    description="Hello, Heartland! I'll be serving as your President-Elect for 2022-2023. I'm a junior in the IB program at Land O’ Lakes High School. When not drowning in homework, I enjoy playing soccer, reading, and attempting to learn to sew. Some of my passions are activism, medicine, and music!"
                />
                <TeamMemberCard
                    fullName="Arman Kumaraswamy"
                    title="Vice President-Elect"
                    image={arman}
                    instagramLink="https://www.instagram.com/armank.24/"
                    description="Hi everyone, I'll be serving as your Vice President-Elect for 2022-2023. I'm passionate about combining the medical and healthcare fields with computer science and artificial intelligence, and care deeply about making HOSA a better opportunity for all of us!"
                />
                <TeamMemberCard
                    fullName="Farangist Ismatulla"
                    title="Parliamentarian"
                    image={farangist}
                    instagramLink="https://www.instagram.com/foogie_04/"
                    description="Hello everyone, it is my honor to serve as the 2022-2023 parliamentarian! I am a senior at Neocity academy. In my high school I am the proud founder of the Asian Student Alliance club, as well as a Bio-Lab Technician. Outside of school, I work part time as a Certified Nurse Assistant (CNA)."
                />
                <TeamMemberCard
                    fullName="Ananth Kutuva"
                    title="Secretary"
                    image={ananth}
                    instagramLink="https://www.instagram.com/ananth_kutuva/"
                    description="Hi, I am a junior this year in the IB program at Land O' Lakes High School. I am your Secretary for the Heartland Region in 2022-23. My interests include mountain biking and robotics and I truly enjoy being a part of the HOSA chapter at my school! I will be involved to ensure that Heartland runs smoothly and successfully."
                />
                <TeamMemberCard
                    fullName="Tanvi Handoo"
                    title="Historian"
                    image={tanvi}
                    instagramLink="https://www.instagram.com/tanvxih/"
                    description="Hi everyone! I will be serving (figuratively and literally :) as your Historian this year. I am a junior at Land O' Lakes and am in the IB programme. I love reading, listening to music, taking walks in nature, and taking photos of my friends. I am extremely passionate about raising awareness and fighting for equality."
                />
                <TeamMemberCard
                    fullName="Sarvesh Gade"
                    title="Reporter"
                    image={sarvesh}
                    instagramLink="https://www.instagram.com/sarvesh.gade123/"
                    description="Hey! I am a senior at Land O' Lakes High School and I am your reporter. In my free time, I love biking, reading, and listening to music (I recently started a vinyl collection!). I joined HOSA in my freshman year, and since then, I've had a blast doing events like Medical Innovation and Pharmacology."
                />
            </div>
        </div>
    );
}

export default MeetTheTeam;
