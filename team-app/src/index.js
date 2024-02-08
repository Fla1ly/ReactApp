/* index.js */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, Routes, createBrowserRouter, useParams } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './Pages/about';
import MemberPage from './Pages/member';
import reportWebVitals from './reportWebVitals';

const teamMembers = [
  { id: 1, name: 'Dawid Musial', profilePicture: require('./Assets/Images/team/dawid_pfp.jpg'), bio: 'Dawid, our CEO, provides visionary leadership and strategic direction to our organization. With a background in software engineering, Dawid plays a key role in shaping the companys overall strategy and ensuring its success in a rapidly evolving industry. His passion for innovation and dedication to excellence inspire our team to reach new heights. Outside of the corporate realm, Dawid enjoys exploring cutting-edge technologies and contributing to the tech community.', email: 'dawid.musial@example.com', phone: '+1 (555) 123-4567', title: 'CEO', location: 'New York, USA' },
  { id: 2, name: 'Ahmet Gomez', profilePicture: require('./Assets/Images/team/Ahmet.png'), bio: 'Ahmet, our customer support specialist, is dedicated to ensuring a positive experience for our users. With excellent communication skills, Ahmet handles inquiries with efficiency and empathy.', email: 'ahmet.gomez@example.com', phone: '+1 (555) 678-3456', title: 'Customer Support Specialist', location: 'Istanbul, Turkey' },
  { id: 3, name: 'Krystian Evans', profilePicture: require('./Assets/Images/team/Krystian.png'), bio: 'Krystian, our data scientist, has a passion for uncovering meaningful insights from complex datasets. His analytical skills contribute to data-driven decision-making within our team.', email: 'krystian.evans@example.com', phone: '+1 (555) 765-4321', title: 'Data Scientist', location: 'Tokyo, Japan' },
  { id: 5, name: 'Marius Foster', profilePicture: require('./Assets/Images/team/Marius.png'), bio: 'Marius is our DevOps engineer, streamlining development processes with automation and continuous integration. His expertise ensures efficient and reliable software delivery.', email: 'marius.foster@example.com', phone: '+1 (555) 543-8765', title: 'DevOps Engineer', location: 'Toronto, Canada' },
  { id: 4, name: 'Viktor Davis', profilePicture: require('./Assets/Images/team/Viktor.png'), bio: 'Viktor, our financial analyst, excels in numbers and financial modeling, ensuring the financial health of our organization. Outside of work, Viktor enjoys staying updated on global economic trends.', email: 'aviktor.davis@example.com', phone: '+1 (555) 234-5678', title: 'Financial Analyst', location: 'Berlin, Germany' },
  { id: 6, name: 'Alexander Hughes', profilePicture: require('./Assets/Images/team/Alexander.png'), bio: 'Alexander, our graphic designer, transforms concepts into visually appealing designs. His creative flair contributes to the visual identity of our brand.', email: 'alexander.hughes@example.com', phone: '+1 (555) 456-7890', title: 'Graphic Designer', location: 'Paris, France' },
  { id: 7, name: 'Anthony Ingram', profilePicture: require('./Assets/Images/team/Anthony.png'), bio: 'Anthony, our HR coordinator, focuses on fostering a positive work culture and handles recruitment and employee engagement. Outside of work, Anthony enjoys organizing community events.', email: 'anthony.ingram@example.com', phone: '+1 (555) 987-6543', title: 'Human Resources Coordinator', location: 'Rio de Janeiro, Brazil' },
  { id: 8, name: 'Mike Newton', profilePicture: require('./Assets/Images/team/Mike.png'), bio: 'Mike, our tech-savvy IT support specialist, troubleshoots and resolves technical issues, ensuring our team operates seamlessly.', email: 'mike.newton@example.com', phone: '+1 (555) 678-3456', title: 'IT Support Specialist', location: 'Vancouver, Canada' },
  { id: 9, name: 'Vasco Quintero', profilePicture: require('./Assets/Images/team/Vasco.png'), bio: 'Vasco, our lead software engineer, plays a pivotal role in guiding the technical direction of our projects and ensuring their success.', email: 'vasco.quintero@example.com', phone: '+1 (555) 987-6543', title: 'Lead Software Engineer', location: 'Sao Paulo, Brazil' },
  { id: 10, name: 'Even Baker', profilePicture: require('./Assets/Images/team/Even.png'), bio: 'Even brings creativity to our marketing efforts, specializing in crafting engaging campaigns that resonate with our audience. Outside of work, Even enjoys exploring the latest trends in digital marketing.', email: 'even.baker@example.com', phone: '+1 (555) 987-6543', title: 'Marketing Specialist', location: 'London, UK' },
  { id: 11, name: 'Ubaid Patel', profilePicture: require('./Assets/Images/team/Ubaid.png'), bio: 'Ubaid, our results-driven product manager, oversees the development and launch of innovative products.', email: 'ubaid.patel@example.com', phone: '+1 (555) 456-7890', title: 'Product Manager', location: 'Mumbai, India' },
  { id: 12, name: 'Erlend King', profilePicture: require('./Assets/Images/team/Erlend.png'), bio: 'Erlend, our detail-oriented project manager, orchestrates successful project deliveries with organizational skills and effective communication.', email: 'erlend.king@example.com', phone: '+1 (555) 234-5678', title: 'Project Manager', location: 'Oslo, Norway' },
  { id: 13, name: 'Regels Lambert', profilePicture: require('./Assets/Images/team/Regels.png'), bio: 'Regels, our meticulous QA engineer, ensures the reliability and functionality of our software products.', email: 'regels.lambert@example.com', phone: '+1 (555) 765-4321', title: 'Quality Assurance Engineer', location: 'Brussels, Belgium' },
  { id: 14, name: 'Emil Jensen', profilePicture: require('./Assets/Images/team/Emil.png'), bio: 'Emil, our dynamic sales representative, excels in building relationships and exceeding sales targets. His persuasive communication skills contribute to the growth of our client base.', email: 'emil.jensen@example.com', phone: '+1 (555) 876-5432', title: 'Sales Representative', location: 'Stockholm, Sweden' },
  { id: 15, name: 'Eduardo Morrison', profilePicture: require('./Assets/Images/team/Eduardo.png'), bio: 'Eduardo, our social media manager, shapes our online presence and engagement with creativity and strategic planning.', phone: '+1 (555) 543-8765', title: 'Social Media Manager', location: 'Barcelona, Spain' },
  { id: 16, name: 'Levi Carter', profilePicture: require('./Assets/Images/team/Levi.png'), bio: 'Levi, our UX/UI designer, is dedicated to creating visually stunning and user-friendly interfaces. With an eye for aesthetics and a focus on user experience, Levi contributes to the seamless design of our products.', email: 'levi.carter@example.com', phone: '+1 (555) 876-5432', title: 'UX/UI Designer', location: 'Sydney, Australia' },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/member/:id",
    element: <MemberPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();