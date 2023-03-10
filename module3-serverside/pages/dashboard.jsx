import React from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [dashboardData, setDashboardData] = React.useState(null);

  React.useEffect(()=> {
    async function fetchDashboardData() {
      try {
        const res = await fetch("http://localhost:4000/dashboard");
        
        if (!res.ok) {
          throw new Error("Bad Fetch Response");
        }
        const data = await res.json();
        setDashboardData(data);
        setIsLoading(false);
      }
      catch (err) {
        throw new Error(err);
      }
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <h2>Posts - {dashboardData.posts}</h2>
        <h2>Likes - {dashboardData.likes}</h2>
        <h2>Followers - {dashboardData.followers}</h2>
        <h2>Following - {dashboardData.following}</h2>
      </div>
    </>
  )
}

export default Dashboard;
