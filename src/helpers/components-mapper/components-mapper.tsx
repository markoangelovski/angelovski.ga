// import React from 'react';
// import getConfig from 'next/config';

// import { SeoHead } from 'types/contentful.types';
// import { Component } from 'types/page.types';
// import { IProcessEnvVariables } from 'types/envVariables.types';
// import { componentsMap } from './components-map';

// const { publicRuntimeConfig } = getConfig();
// const config: IProcessEnvVariables = publicRuntimeConfig;

// const getDynamicComponent = (component: string) => {
//     const dynamicComponent = componentsMap[component];

//     if(!dynamicComponent) {
//         throw new Error(
//             `Component "${component}" could not be found in componentsMap object. Make sure you've executed "generate-components-map" script after creating a new component.`
//         )
//     }
//     return dynamicComponent;
// }

// const ComponentsMapper: React.FC<Component> = (props: Component) => {
//     const { data, currentPageUrl, pageType, component, pageId } = props;

//     const componentName =component[0].toUpperCase() + component.slice(1)
//     const Component: React.ComponentType<any> = getDynamicComponent(componentName);

//     return Component
//         ? <Component {...data} currentPageUrl={currentPageUrl} pageType={pageType} pageId={pageId} />
//         : null;
// };

// export const ContentfulComponents = (props: { componentsProps: Component[], pageInfo: SeoHead; pageId: string }) => {
//     const { componentsProps, pageInfo, pageId } = props;
//     const currentPageUrl = `https://${config.domainName}${pageInfo.url}`;

//     return (
//         <>
//             {Object.values(componentsProps).map((props, index) =>
//                 <ComponentsMapper data={props} component={props.component || ''} currentPageUrl={currentPageUrl} pageType={pageInfo.pageType} key={index} pageId={pageId} />
//             )}
//         </>
//     );
// };

const Misc = () => {
  return null;
};

export default Misc;
