import React from 'react'
import AdminLayout from '../../Hoc/AdminLayout';
function Dashboard(props) {
    console.log(props);
    return(
        <AdminLayout title="Dashboard">
            <div className="user_dashboard">
                this is your dashboard
            </div>
        </AdminLayout>
    )
}
export default Dashboard;