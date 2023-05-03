import { readdirSync, writeFile, existsSync } from 'fs';
import * as path from 'path';

// Relative to location of this file
const COMPONENTS_FOLDER_PATH = '../../components';

// Relative to location of this file
const COMPONENTS_MAP_FILE_LOCATION = path.join(__dirname,'./components-map.tsx');

// Relative to location of "components-map.tsx" file
const COMPONENTS_FOLDER_RELATIVE_PATH = '../../components';

// Indendation size in created "component-map" file
const TAB_SIZE = 4;

const CHUNK_NAME = 'components';

/** Returns name of all components within "components" folder */
const getDirectories = (source: string) =>
   readdirSync(source, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

/** Check if folder contains React component*/
const isComponentFolder = (componentName: string) => {
   // Name of file within component folder which contains component export
   // This varies between projects
   // Example: Header/index.ts, Header/Header.index.ts
   const COMPONENT_INDEX_FILE_NAME = `${componentName}.tsx`;

   const componentFilePath = path.join(__dirname, COMPONENTS_FOLDER_PATH, componentName, COMPONENT_INDEX_FILE_NAME)
   return existsSync(componentFilePath);
}

const components = getDirectories(path.join(__dirname, COMPONENTS_FOLDER_PATH)).filter(c => isComponentFolder(c));

const createImport = (component: string) => `${''.padStart(TAB_SIZE, ' ') + component}: dynamic(() => import(/* webpackChunkName: "${CHUNK_NAME}" */'${COMPONENTS_FOLDER_RELATIVE_PATH}/${component}/${component}')),`;

const componentImports = components.map(c => createImport(c)).join('\r\n');

const mapTemplate = `
import dynamic from "next/dynamic";

export const componentsMap: Record<string, any> = {
${componentImports}
}
`

writeFile(COMPONENTS_MAP_FILE_LOCATION, mapTemplate, () => console.log('Components map sucessfully updated.'));
console.log('COMPONENTS FOUND:', components);
