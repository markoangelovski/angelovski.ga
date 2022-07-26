/** Deserealises JSON parsed with refReplacer() method */
export const parseRefJSON = json => {
  let objToPath = new Map();
  let pathToObj = new Map();
  let o = JSON.parse(json);

  let traverse = (parent, field) => {
    let obj = parent;
    let path = "#REF:$";

    if (field !== undefined) {
      obj = parent[field];
      path =
        objToPath.get(parent) +
        (Array.isArray(parent) ? `[${field}]` : `${field ? "." + field : ""}`);
    }

    objToPath.set(obj, path);
    pathToObj.set(path, obj);

    let ref = pathToObj.get(obj);
    if (ref) parent[field] = ref;

    for (let f in obj) if (obj === Object(obj)) traverse(obj, f);
  };

  traverse(o);
  return o;
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export const TrimStructure = (obj, depth = 0) => {
  if (!obj) return {};
  const keys = Object.keys(obj);

  // Prevent infinite loop due to circular reference
  // Reduce bundle size by ommiting unused elements
  const DEPTH_LIMIT = 10;

  if (depth > DEPTH_LIMIT) {
    return {};
  }

  if (keys.length == 0) return null;
  if (keys.length == 1 && obj.sys) return {};

  if (obj.fields) {
    // Append __typename and id property to components
    const componentId = obj.sys?.contentType?.sys.id;
    if (componentId) {
      Object.assign(obj.fields, {
        __typename: capitalize(componentId),
        componentId: obj.sys.id
      });
    }
    return TrimStructure(obj.fields, depth + 1);
  }

  const newObject = {};

  keys.forEach(key => {
    const entry = obj[key] === undefined ? {} : obj[key];
    const contentTypeId = entry.sys?.contentType?.sys.id;

    if (Array.isArray(entry) && typeof entry[0] !== "object") {
      // Case when entry is multichoice in Contentful
      newObject[key] = entry;
    } else if (Array.isArray(entry)) {
      newObject[key + "Collection"] = {
        items: entry.map(el => {
          if (el.sys?.type === "Asset") {
            // Case when there is an array of assets
            const mockAsset = Object.assign(
              {},
              ...(function _flatten(o) {
                return [].concat(
                  ...Object.keys(o).map(k =>
                    typeof o[k] === "object" ? _flatten(o[k]) : { [k]: o[k] }
                  )
                );
              })(TrimStructure(el.fields, depth + 1))
            );
            return mockAsset;
          } else {
            return TrimStructure(el, depth + 1);
          }
        })
      };
    } else if (entry.fields) {
      // it has fields - process
      if (entry.sys.type !== "Asset") {
        newObject[key] = TrimStructure(entry.fields, depth + 1);
        const componentId = entry.sys?.contentType?.sys?.id;
        if (componentId) {
          newObject[key]["component"] = entry.sys.contentType.sys.id;
          newObject[key]["__typename"] = capitalize(componentId);
        }
      } else {
        // Remove "fields" property and flatten
        newObject[key] = Object.assign(
          {},
          ...(function _flatten(o) {
            return [].concat(
              ...Object.keys(o).map(k =>
                typeof o[k] === "object" ? _flatten(o[k]) : { [k]: o[k] }
              )
            );
          })(TrimStructure(entry.fields, depth + 1))
        );
        newObject[key]["src"] = newObject[key]["url"];
      }
    } else if (entry.sys)
      // it has sys and no fields - probably depth limit
      newObject[key] = {};
    else newObject[key] = entry;
  });

  return newObject;
};

/** Escapes circural reference. Should be passed as a parameter to the JSON.stringify() method */
export const refReplacer = () => {
  let m = new Map(),
    v = new Map(),
    init = null;

  return function (field, value) {
    let p = m.get(this) + (Array.isArray(this) ? `[${field}]` : "." + field);
    let isComplex = value === Object(value);

    if (isComplex) m.set(value, p);

    let pp = v.get(value) || "";
    let path = p.replace(/undefined\.\.?/, "");
    let val = pp ? `#REF:${pp[0] == "[" ? "$" : "$."}${pp}` : value;

    !init ? (init = value) : val === init ? (val = "#REF:$") : 0;
    if (!pp && isComplex) v.set(value, path);

    return val;
  };
};
