
import dynamic from "next/dynamic";

export const componentsMap: Record<string, any> = {
    BuiltWithImg: dynamic(() => import(/* webpackChunkName: "components" */'../../components/BuiltWithImg/BuiltWithImg')),
    CustomBtnLink: dynamic(() => import(/* webpackChunkName: "components" */'../../components/CustomBtnLink/CustomBtnLink')),
    EmbeddedDiagram: dynamic(() => import(/* webpackChunkName: "components" */'../../components/EmbeddedDiagram/EmbeddedDiagram')),
    Header: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Header/Header')),
    ImageWithModal: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ImageWithModal/ImageWithModal')),
    Layout: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Layout/Layout')),
    Meta: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Meta/Meta')),
    ProjectDetail: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ProjectDetail/ProjectDetail')),
    ProjectSummary: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ProjectSummary/ProjectSummary')),
}
