import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { IoIosArrowForward } from 'react-icons/io'
import styles from './About.module.css'
import { Box, Tabs, Tab,Typography } from '@mui/material'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     <Container fluid className={styles.bg_banner}>
           <Container fluid className={styles.bg}>
             <div className={styles.breadcump}>
                 <div className={styles.title_breadcump}>GAMES</div>
                 <div className={styles.acb}>Cloux
                   <span><IoIosArrowForward/></span>
                  <span className={styles.name_header}>About</span>
                  </div>
               </div>
           </Container>


         </Container>
           <Container fluid className={styles.bg_color}>
             <div className="container">
               <h4 className={styles.title_about}>The Intern Program</h4>
                           <div className="row align-items-center">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src="../../about-img/Frame 3.jpg" alt="" className={styles.img_1} />
                </div>
                <div className="col-12 col-md-6 p-5">
                  <h4 className={styles.title_banner1}>WHO WE HIRE</h4>
                  <div className={styles.content_banner1}>Intern opportunities are diverse, ranging in level and discipline. Past internships have included:</div>
                  <div>
                    <ul className={styles.ul}>
                      <li className={styles.list}>Game Programming</li>
                      <li className={styles.list}>Online Development</li>
                      <li className={styles.list}>Game Design</li>
                      <li className={styles.list}>3D Art & Animation</li>
                      <li className={styles.list}>Production</li>
                      <li className={styles.list}>Finance</li>
                      <li className={styles.list}>Marketing</li>
               
                    </ul>
                  </div>
                </div>
                           </div>
             </div>
           </Container>

           <Container fluid className={styles.bg_color}>
             <div className="container">
               
              <div className="row align-items-center">
                <div className="col-12 col-md-6 p-5">
                  <h4 className={styles.title_banner1}>When You Succeed, We Succeed</h4>
                  <div className={styles.content_banner1}>
                      Our vision is to create the next generation of Epic talent. Exciting new opportunities will be open to those who have mastered the skills and technology that power gaming and interactive 3D content!</div>
                  {/* <div>
                    <ul className={styles.ul}>
                      <li className={styles.list}>Game Programming</li>
                      <li className={styles.list}>Online Development</li>
                      <li className={styles.list}>Game Design</li>
                      <li className={styles.list}>3D Art & Animation</li>
                      <li className={styles.list}>Production</li>
                      <li className={styles.list}>Finance</li>
                      <li className={styles.list}>Marketing</li>
               
                    </ul>
                  </div> */}
                  <div className={styles.content_banner1}>
                    We wish to enable success for emerging talent by demystifying the critical talent pipelines and skills our teams look for and provide realistic pathways into Epic through early career opportunities
                    </div>

                    <div className={styles.content_banner1}>
                    
                      Anyone can benefit from the free tools that are available to help hone their skills and build immersive new worlds. Be a part of the next generation at Epic and get started with learning resources today through 
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src="../../about-img/Frame 4.jpg" alt="" className={styles.img_1} />
                </div>
                </div>
             </div>
           </Container>

           <Container fluid className={styles.bg_color_1}>
                
                  <div >
                    <div className={styles.title_ex}>What Excites Us</div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div className={styles.content_ex}>Successful Epic interns not only have the core competencies required for their discipline, but also show curiosity and passion for interactive entertainment and 3D engine technology. Those who go beyond the classroom through proactive learning, participating in community activities, and/or spending time on personal projects that inspire them, flourish during their time with us. We love to see candidates that challenge themselves in new ways to aid their own growth and development. </div>
                    </div>
                    <div className='d-flex  align-items-center justify-content-center p-3'><button className={styles.button_ex}>View Early Career Guide</button></div>
                  </div>
                

           </Container>
    </>
  )
}

export default About