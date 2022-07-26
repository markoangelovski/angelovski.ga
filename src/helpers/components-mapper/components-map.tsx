
import dynamic from "next/dynamic";

export const componentsMap: Record<string, any> = {
    Header: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Header/Header')),
    Layout: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Layout/Layout')),
    Meta: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Meta/Meta')),
}
