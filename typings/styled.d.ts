// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    app: {
      padding: number;
    };

    boxShadow: string;

    colors: {
      appBackground: string;
      main: string;
      secondary: string;
      mainBackground: string;
      secondaryBackground: string;
      error: string;
      inactive: string;
      palette: {
        white: string;
        black: string;
      };
      text: {
        main: string;
        secondary: string;
        white: string;
      };
    };

    font: {
      size: {
        smallest: string;
        small: string;
        normal: string;
      };
    };

    header: {
      height: number;
    };
  }
}
