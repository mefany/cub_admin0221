import { components } from "./components";
import { primary, themeColors } from "./themeColors";
import { typography } from "./typography";
const THEMES = {
  DEFAULT: "DEFAULT",
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const themesOptions = {
  [THEMES.DEFAULT]: {
    typography,
    breakpoints,
    components: { ...components },
    palette: {
      primary: { ...primary, light: primary[100] },
      ...themeColors,
    },
  },
};

const themeOptions = () => {
  return themesOptions[THEMES.DEFAULT];
};

export default themeOptions;
