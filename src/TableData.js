import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const TableData = () => {
  const [leads, setLeads] = useState([]);
  const url =
    "https://app.blinkcrm.in/api/whatsapp?api_key=19a5c89fb2ef43c1969d00e4554ab99e";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        setLeads(response.data.leads);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);

   const onMobileNumberClick = (phone, message) => {
    var message =
      "Good Morning!\r\nHope you are doing well, We are connected with you over linkedin, I am *Shyam Mohan K, Founder \u0026 CEO at RazorOps, Inc.*  I like to Introduce RazorOps - The Simplest Container Native SaaS CI/CD platform! 🚀 \r\n\r\nWe recently helped an AI/ML, edTech, FinTech and Gaming companies to scale infra and CICD process to ship code changes fast. I want to see if there is any opportunity where you can use RazorOps DevOps Solution to automation CI/CD process.\r\n \r\n*Schedule a meeting*, In case if you like to know more or Start a *FREE POC https://bit.ly/3YEEtQy*  \r\n\r\nThanks \u0026 regards,\r\nShyam Mohan K (Founder \u0026 CEO)\r\n";
     var url =
       "https://api.whatsapp.com/send?phone=" +
       phone +
       "&text=" +
       encodeURIComponent(message); // Change "message" to "Hi"
     window.open(url, "_blank");
   };



  return (
    <table border="1">
      <tr>
        <th>Name </th>
        <th> Mobile Number</th>
        
      </tr>
      {leads.map((lead) => {
        const { id, name, phone} = lead;
        return (
          <tr>
            <td> {name}</td>
            <td
              style={{ cursor: "pointer" }}
              onClick={() => {
                onMobileNumberClick(phone);
              }}
            >
              {phone}
            </td>
          </tr>
        );
      })}
    </table>
  );
};
export default TableData;