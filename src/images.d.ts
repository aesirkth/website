// These are types for imported media files

module "*.svg" {
  declare const url: string;
  export default url;
}

module "*.gif" {
  declare const url: string;
  export default url;
}

module "*.jpg" {
  declare const data: { path: string; width: number; height: number };
  export default data;
}

module "*.png" {
  declare const data: { path: string; width: number; height: number };
  export default data;
}
