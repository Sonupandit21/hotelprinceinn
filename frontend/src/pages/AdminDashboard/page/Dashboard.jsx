import React from "react";
import StatCard from "../../AdminDashboard/StatCard";
import PaymentsChart from "../../AdminDashboard/charts/PaymentsChart";
import ProfitChart from "../../AdminDashboard/charts/ProfitChart";

const Dashboard = () => {
  return (
    <div className="">
     <StatCard/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PaymentsChart />
        <ProfitChart />
      </div>
    </div>
  );
};

export default Dashboard;