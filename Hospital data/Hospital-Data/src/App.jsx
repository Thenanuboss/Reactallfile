import React from 'react'
import Officedata from './Components/Officedata'

function App() {

let OfficeData  =  [
    {
      name: "UrbanSage Corporate Office",
      address: "123 Business Park, Ahmedabad, Gujarat, India",
      phone: "+91 9825598222",
      email: "info@urbansage.com",
      website: "https://www.urbansage.com",
      departments: ["Sales", "Marketing", "HR", "IT Support"],
      workingHours: "Monday to Friday: 9 AM - 6 PM, Saturday: 10 AM - 2 PM"
    },
    {
      name: "NextGen Solutions",
      address: "456 Tech Avenue, Bengaluru, Karnataka, India",
      phone: "+91 9845123456",
      email: "contact@nextgensolutions.com",
      website: "https://www.nextgensolutions.com",
      departments: ["Development", "QA", "HR", "Finance"],
      workingHours: "Monday to Friday: 10 AM - 7 PM"
    },
    {
      name: "Visionary Ventures",
      address: "789 Innovation Street, Pune, Maharashtra, India",
      phone: "+91 9876543210",
      email: "hello@visionaryventures.in",
      website: "https://www.visionaryventures.in",
      departments: ["Sales", "Marketing", "Product", "Support"],
      workingHours: "Monday to Saturday: 9 AM - 5 PM"
    },
    {
      name: "Skyline Enterprises",
      address: "101 Corporate Tower, Mumbai, Maharashtra, India",
      phone: "+91 9988776655",
      email: "info@skylineenterprises.com",
      website: "https://www.skylineenterprises.com",
      departments: ["Operations", "HR", "Sales", "Legal"],
      workingHours: "Monday to Friday: 8 AM - 4 PM"
    },
    {
      name: "Pinnacle Solutions",
      address: "202 Business Hub, Chennai, Tamil Nadu, India",
      phone: "+91 9090909090",
      email: "support@pinnaclesolutions.co",
      website: "https://www.pinnaclesolutions.co",
      departments: ["Engineering", "QA", "Design", "HR"],
      workingHours: "Monday to Saturday: 10 AM - 6 PM"
    },
    {
      name: "Elevate Technologies",
      address: "303 IT Park, Hyderabad, Telangana, India",
      phone: "+91 8765432109",
      email: "info@elevatetech.in",
      website: "https://www.elevatetech.in",
      departments: ["Development", "Support", "HR", "Finance"],
      workingHours: "Monday to Friday: 9 AM - 5 PM"
    },
    {
      name: "InnovateHub",
      address: "404 Startup Lane, Gurugram, Haryana, India",
      phone: "+91 9654321987",
      email: "hello@innovatehub.com",
      website: "https://www.innovatehub.com",
      departments: ["Product", "Marketing", "Design", "HR"],
      workingHours: "Monday to Friday: 10 AM - 7 PM"
    },
    {
      name: "Synergy Solutions",
      address: "505 Enterprise Zone, Kolkata, West Bengal, India",
      phone: "+91 9988771122",
      email: "contact@synergysolutions.com",
      website: "https://www.synergysolutions.com",
      departments: ["Sales", "Support", "Operations", "HR"],
      workingHours: "Monday to Saturday: 9 AM - 5 PM"
    },
    {
      name: "Nexus Corp",
      address: "606 Business Square, Jaipur, Rajasthan, India",
      phone: "+91 8877665544",
      email: "info@nexuscorp.in",
      website: "https://www.nexuscorp.in",
      departments: ["Engineering", "QA", "HR", "Legal"],
      workingHours: "Monday to Friday: 9 AM - 6 PM"
    },
    {
      name: "Vertex Solutions",
      address: "707 Innovation Hub, Indore, Madhya Pradesh, India",
      phone: "+91 7766554433",
      email: "support@vertexsolutions.com",
      website: "https://www.vertexsolutions.com",
      departments: ["Development", "Support", "Sales", "HR"],
      workingHours: "Monday to Friday: 8 AM - 4 PM"
    }
  ]
  

  return (
    <div>
      <Officedata OfficeData1 ={OfficeData} />
    </div>
  )
}

export default App

  

