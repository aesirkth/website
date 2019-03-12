module "*.css" {
  declare const module: {
    [name: string]: string;
  };

  export default module;
}
