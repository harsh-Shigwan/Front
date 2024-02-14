// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Bar,
// } from "recharts";
// import axios from "axios";

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const PatientGraph = () => {
//   const [patientData, setPatientData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8000/api/patient/api/patients/"
//         );
//         setPatientData(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const processDataForGraph = () => {
//     const monthlyPatientCount = {};

//     patientData.forEach((patient) => {
//       const monthNumber = parseInt(patient.DOB.split("-")[1], 10);
//       const monthName = monthNames[monthNumber - 1];

//       monthlyPatientCount[monthName] =
//         (monthlyPatientCount[monthName] || 0) + 1;
//     });

//     const graphData = Object.keys(monthlyPatientCount).map((monthName) => ({
//       name: monthName,
//       count: monthlyPatientCount[monthName],
//     }));

//     return graphData;
//   };

//   return (
//     <div className="card-chartbars1" style={styles.container}>
//       <h2 className="header">Number of Patients per Month</h2>
//       {patientData.length > 0 && (
//         <BarChart width={800} height={400} data={processDataForGraph()}>
//           <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
//           <XAxis dataKey="name" tick={{ fontSize: 12 }} />
//           <YAxis tick={{ fontSize: 12 }} />
//           <Tooltip cursor={{ fill: "transparent" }} />
//           <Legend align="right" verticalAlign="top" />
//           <Bar dataKey="count" fill="#FFEF5E" />
//         </BarChart>
//       )}
//     </div>
//   );
// };

// // Define styles
// const styles = {
//   container: {
//     width: "100%",
//     position: "relative",
//     borderRadius: "16px",
//     backgroundColor: "#fff",
//     boxShadow:
//       "0 0 1px rgba(12, 26, 75, 0.24), 0 3px 8px -1px rgba(50, 50, 71, 0.05)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     padding: "30px 20px 72px",
//     boxSizing: "border-box",
//     gap: "30px",
//   },
// };

// export default PatientGraph;
import React, { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import axios from "axios";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PatientGraph = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/patient/api/patients/"
        );
        setPatientData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  const processDataForGraph = () => {
    const monthlyPatientCount = {};

    patientData.forEach((patient) => {
      const monthNumber = parseInt(patient.DOB.split("-")[1], 10);
      const monthName = monthNames[monthNumber - 1];

      monthlyPatientCount[monthName] =
        (monthlyPatientCount[monthName] || 0) + 1;
    });

    const graphData = Object.keys(monthlyPatientCount).map((monthName) => ({
      name: monthName,
      count: monthlyPatientCount[monthName],
    }));

    return graphData;
  };

  return (
    <div className="card-chartbars1" style={styles.container}>
      <h2 className="header">Number of Patients per Month</h2>
      {patientData.length > 0 && (
        <BarChart width={800} height={400} data={processDataForGraph()} margin={{ right: 50 }}>
        {/*  <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />*/}
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend align="right" verticalAlign="top" />
          {/* Define three different Bar components with different colors */}
          <Bar
            dataKey="count"
            fill="#7895FF"
            barSize={10}
            shape={<RoundedBar2 />}
          />
          <Bar
            dataKey="count"
            fill="#FF92AE"
            barSize={10}
            shape={<RoundedBar1 />}
          />
          <Bar
            dataKey="count"
            fill="#FFEF5E"
            barSize={10}
            shape={<RoundedBar />}
          />
        </BarChart>
      )}
    </div>
  );
};

// Custom shape for rounded bars
const RoundedBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#FFEF5E"
        rx={10}
        ry={4}
      />
    </g>
  );
};

const RoundedBar1 = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#FF92AE"
        rx={10}
        ry={4}
      />
    </g>
  );
};
const RoundedBar2 = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#7895FF"
        rx={10}
        ry={4}
      />
    </g>
  );
};
// Define styles
const styles = {
  container: {
    width: "100%",
    position: "relative",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow:
      "0 0 1px rgba(12, 26, 75, 0.24), 0 3px 8px -1px rgba(50, 50, 71, 0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 20px 72px",
    boxSizing: "border-box",
    gap: "30px",
  },
};

export default PatientGraph;
