import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";

const Dashboard = () => {

    return (
        <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Sells Dashboard</h1>
  
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Success Percentage (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">All Sells</h5>
              <DonutChart />
            </div>
          </div>
  
          <div className="py-3">
            <h2 className="text-primary">All Sells</h2>
  
          </div>
  
          <DataTable />
        </div>
        <Footer />
      </>
    );
  };
  
  export default Dashboard;