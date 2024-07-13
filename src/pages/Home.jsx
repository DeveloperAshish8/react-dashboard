import React from "react";
import KPIBox from "../components/KPIBox";

const Home = () => {
  // Dummy data for KPIs
  const totalUsers = 1000;
  const totalPosts = 2000;
  const activeUsers = 150;
  const recentPosts = 300;

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-6 flex-wrap mt-6">
        <KPIBox heading="Total Users:" data={totalUsers} profit="+10" />
        <KPIBox heading="Total Posts:" data={totalPosts} profit="-6" />
        <KPIBox heading="Users (24h):" data={activeUsers} profit="+34" />
        <KPIBox heading="Posts (24h):" data={recentPosts} profit="+21" />
      </div>
    </div>
  );
};

export default Home;
