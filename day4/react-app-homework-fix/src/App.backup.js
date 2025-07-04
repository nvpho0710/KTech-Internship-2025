/**
 * Components
 */
 import ChartBar from './Homeworks/Session01/ChartBar'
 import Skill from './Homeworks/Session01/Skill'
 import SocialBlock from './Homeworks/Session01/SocialCard';
 import ChartColumn from './Homeworks/Session01/ChartColumn';
 import Person from './Homeworks/Session01/Person';
 import Category from './Homeworks/Session01/Category';
 import ProductsPromotion from './Homeworks/Session01/ProductsPromotion';
 /**
  * fontawesome
  */
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { fas } from '@fortawesome/free-solid-svg-icons'
 import { far } from '@fortawesome/free-regular-svg-icons'
 import { fab } from '@fortawesome/free-brands-svg-icons'
 
 import './App.css';
 /* Thêm thư viện fontawesome */
 library.add(fas,far, fab);
 
 function App() {
   
   const bios1 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B+'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'MCA'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
   ];
 
   const bios2 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'O+'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Scotch'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Texas'},
   ];
   const bios3 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'AB'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Slyline'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'New York'},
   ];
   const bios4 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B-'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Havart'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
   ];
 
   const contact1 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#E54D4C', type: 'Email', content: 'partion@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#4AC25E', type: 'Phone', content: '+84988777666'},
   
   ];
   const contact2 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#2DB8CD', type: 'Email', content: 'jamesmith@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#619CEC', type: 'Phone', content: '+84988333888'},
   
   ];
   const contact3 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#F78153', type: 'Email', content: 'tomhank@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FCD518', type: 'Phone', content: '+84988111000'},
   
   ];
   const contact4 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#CB79E7', type: 'Email', content: 'stalinx@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FE60E8', type: 'Phone', content: '+84988555999'},
   
   ];
 
   
   return (
     <div className="App" >
       <h1 className='h1'>Homework Session1</h1>
       <div className="section">
         <div className="section__title">ChartBar1 - Component</div>
         <div className="section__body">
           <ChartBar labelText="Banwidth" labelBg="#E54D4C" percentBg="#F75354" percent={20} />
           <ChartBar labelText="Storage" labelBg="#2DB8CD" percentBg="#31C8DD" percent={45} />
           <ChartBar labelText="Users" labelBg="#4AC25E" percentBg="#51D567" percent={70} />
           <ChartBar labelText="Visittor" labelBg="#E9C318" percentBg="#FCD518" percent={50} />
           <ChartBar labelText="Emails" labelBg="#BB70D5" percentBg="#CB79E7" percent={45} />
           <ChartBar labelText="Basic" labelBg="#EB59D6" percentBg="#FE60E8" percent={80} />
           <ChartBar labelText="Others" labelBg="#5890DA" percentBg="#619CEC" percent={37} />
           </div>
       </div>
       
       <div className="section">
         <div className="section__title">Skills - Component</div>
         <div className="section__body">
         <Skill icon="fa-brands fa-html5" name="Html" bg="#51D567" percent={60} />
         <Skill icon="fa-brands fa-css3" name="Css"  bg="#F75354" percent={50} />
         <Skill icon="fa-brands fa-php" name="PHP"  bg="#31C8DD" percent={30} />
         <Skill icon="fa-brands fa-node" name="Nodejs" bg="#FCD518" percent={70} />
         <Skill icon="fa-brands fa-react" name="ReactJs"  bg="#CB79E7" percent={40} />
         </div>
       </div>
       
       <div className="section">
         <div className="section__title">SocialBlock - Component</div>
         <div className="section__body">
           <div className="socialCard__wraper">
           <SocialBlock iconName="fa-brands fa-facebook" text="Facebook" unit="Likes" color="#619CEC" total={500000} />
           <SocialBlock iconName="fa-brands fa-twitter" text="Tiwtter" unit="Tweets" color="#31C8DD" total={40000} />
           <SocialBlock iconName="fa-brands fa-google" text="Google +" unit="Plus " color="#F78153" total={460000} />
           <SocialBlock iconName="fa-brands fa-pinterest" text="Pintrest" unit="Pins" color="#F75354" total={34000} />
 
           </div>
           </div>
       </div>
 
       <div className="section">
         <div className="section__title">ChartColumn - Component</div>
         <div className="section__body">
           <div className="blockChart__wraper">
             <ChartColumn text="Today Vistor" total={24599} unit='' percentstages={[20, 45, 30, 80, 35]}/>
             <ChartColumn text="Yesterday Vistor" total={15699} unit='' percentstages={[50, 45, 30, 90, 75]}/>
             <ChartColumn text="Total Download" total={124599} unit='' percentstages={[30, 23, 50, 80, 25]}/>
             <ChartColumn text="Current Income" total={54599} unit='' percentstages={[88, 45, 20, 60, 65]}/>
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Person - Component</div>
         <div className="section__body">
           <div className="blockPerson__wraper">
             <Person avatar='/avatars/ayo-ogunseinde-1.jpg' name='Robot Partison' alt='Robot Partison' job='Developing' biosArr= {bios1} contactArr = {contact1} />
             <Person avatar='/avatars/ayo-ogunseinde-2.jpg' name='Jame Smith' alt='Jame Smith' job='Designer' biosArr= {bios2} contactArr = {contact2} />
             <Person avatar='/avatars/ayo-ogunseinde-3.jpg' name='Tom Hanks' alt='Tom Hanks' job='Designer' biosArr= {bios3} contactArr = {contact3} />
             <Person avatar='/avatars/ayo-ogunseinde-4.jpg' name='Silvester Stalin' alt='Silvester Stalin' job='Tesing' biosArr= {bios4} contactArr = {contact4} />
            
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Category - Component</div>
         <div className="section__body">
           <div className="blockCategory__wraper">
             <Category price={25} promo_price={0} attrsArr={["XS", "M", "XXL"]} name='EoDem Modo Typi' thumb='/block-ui-6-images/1.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={50} promo_price={0} attrsArr={["S", "M"]} name='Stequitur Mutaionem' thumb='/block-ui-6-images/2.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={15} promo_price={0} attrsArr={["L", "XL"]} name='Consuetudim Lectorum' thumb='/block-ui-6-images/3.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={75} promo_price={25} attrsArr={["S", "XXL"]} name='Parum Claram' thumb='/block-ui-6-images/4.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Promotion Products - Component</div>
         <div className="section__body">
           <div className="blockCategory">
             <ProductsPromotion />
           </div>
         </div>
       </div>
 
     </div>
   );
 }
 
 export default App;
/**
 * Components
 */
 import ChartBar from './Homeworks/Session01/ChartBar'
 import Skill from './Homeworks/Session01/Skill'
 import SocialBlock from './Homeworks/Session01/SocialCard';
 import ChartColumn from './Homeworks/Session01/ChartColumn';
 import Person from './Homeworks/Session01/Person';
 import Category from './Homeworks/Session01/Category';
 import ProductsPromotion from './Homeworks/Session01/ProductsPromotion';
 /**
  * fontawesome
  */
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { fas } from '@fortawesome/free-solid-svg-icons'
 import { far } from '@fortawesome/free-regular-svg-icons'
 import { fab } from '@fortawesome/free-brands-svg-icons'
 
 import './App.css';
 /* Thêm thư viện fontawesome */
 library.add(fas,far, fab);
 
 function App() {
   
   const bios1 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B+'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'MCA'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
   ];
 
   const bios2 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'O+'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Scotch'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Texas'},
   ];
   const bios3 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'AB'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Slyline'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'New York'},
   ];
   const bios4 = [
     {id: 1, icon: 'fa-regular fa-calendar', text: 'BOD', value: '23/05/2014'},
     {id: 2, icon: 'fa-regular fa-heart', text: 'BG', value: 'B-'},
     {id: 3, icon: 'fa-regular fa-newspaper', text: 'EDU', value: 'Havart'},
     {id: 4, icon: 'fa-regular fa-map', text: 'RES', value: 'Chiago'},
   ];
 
   const contact1 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#E54D4C', type: 'Email', content: 'partion@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#4AC25E', type: 'Phone', content: '+84988777666'},
   
   ];
   const contact2 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#2DB8CD', type: 'Email', content: 'jamesmith@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#619CEC', type: 'Phone', content: '+84988333888'},
   
   ];
   const contact3 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#F78153', type: 'Email', content: 'tomhank@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FCD518', type: 'Phone', content: '+84988111000'},
   
   ];
   const contact4 = [
     {id: 1, icon: 'fa-regular fa-envelope', bgColor: '#CB79E7', type: 'Email', content: 'stalinx@gmail.com'},
     {id: 2, icon: 'fa-regular fa-address-card', bgColor: '#FE60E8', type: 'Phone', content: '+84988555999'},
   
   ];
 
   
   return (
     <div className="App" >
       <h1 className='h1'>Homework Session1</h1>
       <div className="section">
         <div className="section__title">ChartBar1 - Component</div>
         <div className="section__body">
           <ChartBar labelText="Banwidth" labelBg="#E54D4C" percentBg="#F75354" percent={20} />
           <ChartBar labelText="Storage" labelBg="#2DB8CD" percentBg="#31C8DD" percent={45} />
           <ChartBar labelText="Users" labelBg="#4AC25E" percentBg="#51D567" percent={70} />
           <ChartBar labelText="Visittor" labelBg="#E9C318" percentBg="#FCD518" percent={50} />
           <ChartBar labelText="Emails" labelBg="#BB70D5" percentBg="#CB79E7" percent={45} />
           <ChartBar labelText="Basic" labelBg="#EB59D6" percentBg="#FE60E8" percent={80} />
           <ChartBar labelText="Others" labelBg="#5890DA" percentBg="#619CEC" percent={37} />
           </div>
       </div>
       
       <div className="section">
         <div className="section__title">Skills - Component</div>
         <div className="section__body">
         <Skill icon="fa-brands fa-html5" name="Html" bg="#51D567" percent={60} />
         <Skill icon="fa-brands fa-css3" name="Css"  bg="#F75354" percent={50} />
         <Skill icon="fa-brands fa-php" name="PHP"  bg="#31C8DD" percent={30} />
         <Skill icon="fa-brands fa-node" name="Nodejs" bg="#FCD518" percent={70} />
         <Skill icon="fa-brands fa-react" name="ReactJs"  bg="#CB79E7" percent={40} />
         </div>
       </div>
       
       <div className="section">
         <div className="section__title">SocialBlock - Component</div>
         <div className="section__body">
           <div className="socialCard__wraper">
           <SocialBlock iconName="fa-brands fa-facebook" text="Facebook" unit="Likes" color="#619CEC" total={500000} />
           <SocialBlock iconName="fa-brands fa-twitter" text="Tiwtter" unit="Tweets" color="#31C8DD" total={40000} />
           <SocialBlock iconName="fa-brands fa-google" text="Google +" unit="Plus " color="#F78153" total={460000} />
           <SocialBlock iconName="fa-brands fa-pinterest" text="Pintrest" unit="Pins" color="#F75354" total={34000} />
 
           </div>
           </div>
       </div>
 
       <div className="section">
         <div className="section__title">ChartColumn - Component</div>
         <div className="section__body">
           <div className="blockChart__wraper">
             <ChartColumn text="Today Vistor" total={24599} unit='' percentstages={[20, 45, 30, 80, 35]}/>
             <ChartColumn text="Yesterday Vistor" total={15699} unit='' percentstages={[50, 45, 30, 90, 75]}/>
             <ChartColumn text="Total Download" total={124599} unit='' percentstages={[30, 23, 50, 80, 25]}/>
             <ChartColumn text="Current Income" total={54599} unit='' percentstages={[88, 45, 20, 60, 65]}/>
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Person - Component</div>
         <div className="section__body">
           <div className="blockPerson__wraper">
             <Person avatar='/avatars/ayo-ogunseinde-1.jpg' name='Robot Partison' alt='Robot Partison' job='Developing' biosArr= {bios1} contactArr = {contact1} />
             <Person avatar='/avatars/ayo-ogunseinde-2.jpg' name='Jame Smith' alt='Jame Smith' job='Designer' biosArr= {bios2} contactArr = {contact2} />
             <Person avatar='/avatars/ayo-ogunseinde-3.jpg' name='Tom Hanks' alt='Tom Hanks' job='Designer' biosArr= {bios3} contactArr = {contact3} />
             <Person avatar='/avatars/ayo-ogunseinde-4.jpg' name='Silvester Stalin' alt='Silvester Stalin' job='Tesing' biosArr= {bios4} contactArr = {contact4} />
            
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Category - Component</div>
         <div className="section__body">
           <div className="blockCategory__wraper">
             <Category price={25} promo_price={0} attrsArr={["XS", "M", "XXL"]} name='EoDem Modo Typi' thumb='/block-ui-6-images/1.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={50} promo_price={0} attrsArr={["S", "M"]} name='Stequitur Mutaionem' thumb='/block-ui-6-images/2.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={15} promo_price={0} attrsArr={["L", "XL"]} name='Consuetudim Lectorum' thumb='/block-ui-6-images/3.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
             <Category price={75} promo_price={25} attrsArr={["S", "XXL"]} name='Parum Claram' thumb='/block-ui-6-images/4.jpg' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
           </div>
         </div>
       </div>
 
       <div className="section">
         <div className="section__title">Promotion Products - Component</div>
         <div className="section__body">
           <div className="blockCategory">
             <ProductsPromotion />
           </div>
         </div>
       </div>
 
     </div>
   );
 }
 
 export default App;
  