import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPath } from "../../routes/adminRoute";
import { studentPath } from "../../routes/stduent.route";

const {  Sider } = Layout;

const Sidebar = () => {
  const userRole = {
    Admin: "admin",
    Faculty: "faculty",
    Student: "student"
  };
  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRole.Admin :   
      sidebarItems = sidebarItemGenerator(adminPath, userRole.Admin);
      break;
    case userRole.Student :
        sidebarItems = sidebarItemGenerator(studentPath, userRole.Student);
        break;
    case userRole.Faculty:
      sidebarItems = sidebarItemGenerator(studentPath,  userRole.Faculty);
      break;
    default:
      break;
  }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" style={{color:"white", height:"4rem", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <h1>PH UNI</h1>
            </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    );
};

export default Sidebar;