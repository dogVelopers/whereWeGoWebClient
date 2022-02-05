import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      bgColor: string;
      textColor: string;
      textWhiteColor: string;
      brandColor: string;
      footerBgColor: string;
      footerTextColor: string;
    };
    padding: {
      layoutPadding: string;
    };
    shadow: {
      default: string;
    };
  }
}
