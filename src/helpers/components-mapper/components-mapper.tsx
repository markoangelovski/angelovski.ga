import { componentsMap } from "./components-map";

import { Component } from "types/page.types";

const getDynamicComponent = (component: string) => {
  const dynamicComponent = componentsMap[component];

  if (!dynamicComponent) {
    throw new Error(
      `Component "${component}" could not be found in componentsMap object. Make sure you've executed "generate-components-map" script after creating a new component.`
    );
  }
  return dynamicComponent;
};

const ComponentsMapper: React.FC<Component> = (props: Component) => {
  const { data, component } = props;

  const componentName = component[0].toUpperCase() + component.slice(1);
  const Component: React.ComponentType<any> =
    getDynamicComponent(componentName);

  return Component ? <Component {...data} /> : null;
};

export const ContentfulComponents = (props: {
  componentsProps: Component[];
}) => {
  const { componentsProps } = props;

  return (
    <>
      {Object.values(componentsProps).map((props, index) => (
        <ComponentsMapper
          component={props.component || ""}
          data={props}
          key={index}
        />
      ))}
    </>
  );
};
