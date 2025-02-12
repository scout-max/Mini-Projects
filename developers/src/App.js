import './App.css';
import UserDetails from './components/users';


const Details = [
  {
    "uniqueno": 1,
    "name": "Sundar Pichai",
    "role": "Full Stack (Frontend, Backend, Cloud)",
    "current_position": "CEO, Google & Alphabet (Ex-Software Engineer)",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 2,
    "name": "Tanay Pratap",
    "role": "Frontend (React, Next.js, Web3)",
    "current_position": "Founder, Invact Metaversity (Ex-Senior Engineer at Microsoft)",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 3,
    "name": "Kiran Kumar",
    "role": "Frontend (JavaScript, React, Angular)",
    "current_position": "Senior Frontend Developer at Paytm",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 4,
    "name": "Irfan Baqui",
    "role": "Database & Cloud (MongoDB, AWS, SQL)",
    "current_position": "Developer Advocate at MongoDB",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 5,
    "name": "Varun Mayya",
    "role": "Full Stack (Web3, Blockchain, AI)",
    "current_position": "CEO, Avalon Labs",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 6,
    "name": "Ritesh Agarwal",
    "role": "Backend & Databases (SQL, NoSQL, Cloud)",
    "current_position": "Founder & CEO, OYO Rooms",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 7,
    "name": "Haris Khan",
    "role": "UI/UX & Frontend (CSS, Tailwind, React)",
    "current_position": "UI/UX Engineer at Razorpay",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 8,
    "name": "Rupesh Mishra",
    "role": "Backend (Django, Node.js, Ruby on Rails)",
    "current_position": "Backend Engineer at Swiggy",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 9,
    "name": "Vivek Raval",
    "role": "DevOps & Databases (MySQL, PostgreSQL, AWS, Azure)",
    "current_position": "DevOps Architect at Tata Consultancy Services (TCS)",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  },
  {
    "uniqueno": 10,
    "name": "Gaurav Sen",
    "role": "System Design & Backend (Scalability, Microservices)",
    "current_position": "Founder, InterviewReady (Ex-Software Engineer at Google)",
    "dp": "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?ga=GA1.1.969920365.1725947994&semt=ais_hybrid"
  }
]




function App() {
  return (
    <> 
    <div className='card-app pt-5'>
      <h1 className='text-center mb-5'>Industry Leaders in Web Development</h1>

    {Details.map((eachItem) => (
      <UserDetails newDetails={eachItem}/>

    ))}
    </div>
    





    </>
  );
}

export default App;
