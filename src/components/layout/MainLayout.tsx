import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/adminRoute";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const items: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
    },
    {
      key: "User Management",
      label: "User Management",
      children: [
        {
          key: "create-admin",
          label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
        },
        {
          key: "create-faculty",
          label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
        },
        {
          key: "create-user",
          label: <NavLink to={"/admin/create-user"}>Create user</NavLink>,
        }
      ],
    },
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" style={{color:"white", height:"4rem", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <h1>PH UNI</h1>
            </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
