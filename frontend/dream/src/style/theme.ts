import {DefaultTheme} from "styled-components";

export const sunsetTheme: DefaultTheme = {
  textColor: "#FFFFFF",
  backgroundImageUrl : `${process.env.PUBLIC_URL}/image/background-image/sunset-background.jpg`
};

export const nightTheme: DefaultTheme = {
  textColor: "#FFFFFF",
  backgroundImageUrl : `${process.env.PUBLIC_URL}/image/background-image/night-background.jpg`
};

export const dayTheme: DefaultTheme = {
  textColor: "#374151",
  backgroundImageUrl : `${process.env.PUBLIC_URL}/image/background-image/day-background.jpg`
};

export const theme = {
  sunsetTheme,
  nightTheme,
  dayTheme,
};