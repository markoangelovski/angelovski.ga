
import dynamic from "next/dynamic";

export const componentsMap: Record<string, any> = {
    BuiltWithImg: dynamic(() => import(/* webpackChunkName: "components" */'../../components/BuiltWithImg/BuiltWithImg')),
    EmbeddedDiagram: dynamic(() => import(/* webpackChunkName: "components" */'../../components/EmbeddedDiagram/EmbeddedDiagram')),
    Header: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Header/Header')),
    ImageWithModal: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ImageWithModal/ImageWithModal')),
    InternalLink: dynamic(() => import(/* webpackChunkName: "components" */'../../components/InternalLink/InternalLink')),
    Layout: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Layout/Layout')),
    Meta: dynamic(() => import(/* webpackChunkName: "components" */'../../components/Meta/Meta')),
    ProjectDetail: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ProjectDetail/ProjectDetail')),
    ProjectSummary: dynamic(() => import(/* webpackChunkName: "components" */'../../components/ProjectSummary/ProjectSummary')),
}
