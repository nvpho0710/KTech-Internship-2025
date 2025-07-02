import Button5, { NikeLogo } from './components/Button5/index5';
import Button4 from './components/Button4/index4';


import './App.css';
import Button from './components/Button';
import Button2 from './components/Button2';
import { FaApple, FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowForwardOutline, IoSearchOutline, IoFilterOutline } from 'react-icons/io5';
import { MdOutlineTune } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';

import Button3 from './components/Button3/index3';
import { FaCamera, FaPhone } from 'react-icons/fa';

function App() {

  return (
    <>
      <div style={{ background: '#dde4e8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Button group 1 */}
        <div style={{ background: '#dde4e8', padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 380 }}>
          <Button label="Get started" rightIcon={<IoArrowForwardOutline />} />
          <Button label="Continue with Apple" leftIcon={<FaApple />} />
          <Button label="Continue with Google" leftIcon={<FcGoogle />} type="outline" />
          <Button label="Continue with Facebook" leftIcon={<FaFacebookF />} type="outline" />
        </div>

        <hr style={{ width: 380, margin: '40px 0', border: 'none', borderTop: '2px solid #c2c8cc' }} />

        {/* Textfield group 2 */}
        <div style={{ background: '#dde4e8', padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 380 }}>
          <Button2 leftIcon={<IoSearchOutline />} />
          <Button2 leftIcon={<IoSearchOutline />} placeholder="Search" />
          <Button2 leftIcon={<IoSearchOutline />} value="Textfield" bold />
          <Button2 leftIcon={<IoSearchOutline />} placeholder="Search in the web" rightIcon={<IoFilterOutline />} />
          <Button2 leftIcon={<IoSearchOutline />} placeholder="Search crypto" rightIcon={<MdOutlineTune />} />
          <Button2 leftIcon={<></>} placeholder="Phone number" rightIcon={<FaPhoneAlt />} color="green" />
          <Button2 leftIcon={<IoSearchOutline />} placeholder="Search in the web" rightIcon={<BsEmojiSmile />} color="yellow" />
        </div>

        <hr style={{ width: 380, margin: '40px 0', border: 'none', borderTop: '2px solid #c2c8cc' }} />
        {/* Button3 group - Profile cards */}
        <div style={{ marginBottom: 32 }}>
          <Button3
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            name="Yolanda"
            subtitle="Web Development"
            rightIcon={<FaCamera />}
          />
          <Button3
            avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256"
            name="María"
            rightIcon={<FaPhone />}
          />
        </div>

        <hr style={{ width: 380, margin: '40px 0', border: 'none', borderTop: '2px solid #c2c8cc' }} />

        {/* Button4 group - Colorful profile/team cards */}
        <div style={{ marginBottom: 32 }}>
          <Button4
            avatars={["https://randomuser.me/api/portraits/women/44.jpg"]}
            title="Miriam Jimenez"
            color="cyan"
          />
          <Button4
            avatars={[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/33.jpg",
              "https://randomuser.me/api/portraits/men/34.jpg"
            ]}
            title="Teams"
            subtitle="Two currently"
            color="purple"
          />
          <Button4
            avatars={[
              "https://randomuser.me/api/portraits/men/35.jpg",
              "https://randomuser.me/api/portraits/women/45.jpg"
            ]}
            title="New Teams"
            color="yellow"
          />
        </div>

        <hr style={{ width: 380, margin: '40px 0', border: 'none', borderTop: '2px solid #c2c8cc' }} />

        {/* Button5 group - Notification and transaction cards */}
        <div style={{ marginBottom: 32 }}>
          <Button5
            logo={<NikeLogo />}
            title="Nike store"
            subtitle="6 months of promotions"
            amount="-27.50"
            time="11:00AM"
          />
          <Button5
            notificationText="All your notifications are well turned on"
            notificationCount={3}
          />
        </div>

        <hr style={{ width: 380, margin: '40px 0', border: 'none', borderTop: '2px solid #c2c8cc' }} />

      </div>
    </>
  )
}

export default App
