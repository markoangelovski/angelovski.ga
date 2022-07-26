export const removeMultipleSlashes = (string: string) => {
  return string.replace(/\/{2,}/g, "/");
};

export const buildSlug = (slugParts?: string | string[]) => {
  const parts = !Array.isArray(slugParts) ? slugParts?.split("/") : slugParts;
  return parts ? removeMultipleSlashes(`/${parts.join("/")}`) : "/";
};
