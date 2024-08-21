import { TRoute, TUserPath } from "../type";


export const routesGenerators = (item: TUserPath[])=>{
   const routes = item.reduce((acc: TRoute[], item)=>{
        if(item.path && item.element){
            acc.push({
                path: item.path,
                element: item.element
            })
        }
        if(item.children){
            item.children.forEach((child)=>{
                acc.push({
                    path: child.path!,
                    element: child.element,
                })
            })
        }
        return acc
    },[]);

    return routes
}