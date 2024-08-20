import {  ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { NavLink } from "react-router-dom";

type TRoute = {
    path: string,
    element: ReactNode
} 

type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?: TSidebarItem[],
}

const adminPath  = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create User",
                path: "create-user",
                element: <CreateStudent></CreateStudent>
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty></CreateFaculty>
            }
        ]
    }
];

export const adminRoutes = adminPath.reduce((acc: TRoute[], item)=>{
    if(item.path && item.element){
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if(item.children){
        item.children.forEach((child)=>{
            acc.push({
                path: child.path,
                element: child.element,
            })
        })
    }
    return acc
},[]);


export const adminSidebarItems = adminPath.reduce((acc: TSidebarItem[] ,item)=>{
    if(item.path && item.name){
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item?.name}</NavLink>
        })
    }
    if(item.children){
        acc.push({
            key: item.name,
            label:  item.name,
            children: item?.children?.map(child=>({
                key: child?.name,
                label:<NavLink to={`/admin/${child.path}`}>{child?.name}</NavLink>
            }))
        })
    }
    return acc
},[]);

console.log(adminSidebarItems)


