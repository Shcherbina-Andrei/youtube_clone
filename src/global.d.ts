declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const image: string;
  export = image;
}
