import React from "react";

export const scanDuration = 500;
export const dataLossRateUnit = 2000; // 5 second
export const dataLossRateUpdateRatio = 5; //  ratio of loss rate and update loss rate

// Constants used for graphs. Time is in milliseconds
export const TIME_BETWEEN_POINTS = 5;
export const TIME_PER_GRAPH = 3000;
export const POINTS_PER_GRAPH = 1200; // changed from 600
export const ECG_GRAPH_MAX_VALUE = 4200000; // 20000; // some max > 2^14
export const RAW_ECG_GRAPH_MAX_VALUE = 8400000; // 17000000; // some max > 2^23 --Used to be 33000 for 2-byte ECG
export const BLOCK_SIZE = 40;

//END of Devtool Constants.......................

// Font Families
export const FONT_FAMILY_LATO = {
  thin: "lato-thin",
  thinItalic: "lato-thin-italic",
  light: "lato-light",
  lightItalic: "lato-light-italic",
  regular: "lato-regular",
  regularItalic: "lato-regular-italic",
  bold: "lato-bold",
  boldItalic: "lato-bold-italic",
  black: "lato-black",
  blackItalic: "lato-black-italic"
};

// THEMES
const fonts = {
  fontFamilyName: "lato",
  fontFamily: FONT_FAMILY_LATO,
  sizes: {
    xxsmall: "10px",
    xxsmallXSmall: "11px",
    xsmall: "12px",
    xsmallSmall: "13px",
    small: "14px",
    smallMedium: "15px",
    medium: "16px",
    mediumLarge: "17px",
    large: "18px",
    largeXLarge: "20px",
    xlarge: "21px",
    xlargeXXLarge: "22px",
    xxlarge: "23px"
  }
};

const gutters = {
  xxxsmall: "2px",
  xxsmall: "5px",
  xsmall: "10px",
  small: "15px",
  medium: "20px",
  large: "25px",
  xlarge: "30px",
  xxlarge: "35px",
  xxxlarge: "40px",
  xxxxlarge: "45px"
};

const zIndexs = {
  feedbackMessages: 100
};

export const THEMES = {
  light: {
    colors: {
      // general
      main: "#FFFFFF",
      secondary: "#05192C",
      secondaryNormal: "#414040",
      error: "#FF4B41",
      warning: "#FFB247",
      lightest: "#FFFFFF",
      darkest: "#000000",
      loadingGreyColor: "#C4C4C4",
      success: "#3EC452",
      grey: "#BDBDBD",
      lightGrey: "#F7F7F7",
      darkGrey: "#696F75",
      darkBlue: "#033761",
      lightBlue: "#185FA5",
      // icon
      icon: "#696F75",
      eyeicon: "#004C96",

      // link
      linkColor: "#696F75",
      signinLink: "#004C96",
      // label
      labelColor: "#BDBDBD",

      // button
      buttonBgDisabledColor: "#88ADD1",
      buttonBgColor: "#185fa5",
      buttonBgDarkerColor: "#185fa5",

      // inputs
      inputBg: "#F8F8F8",
      inputBorder: "#979797",
      inputPlaceholder: "#444C53",

      // tooltipColor
      tooltipColor: "#e3e3e3",

      // modal
      modalBgColor: "rgba(196, 196, 196, 0.6)",

      // Progress bar
      blankProgressBarColor: "rgba(0,0,0,0.1)",

      // Screen loader
      screenLoaderBgColor: "rgba(0,0,0,0.4)",

      // switch
      switchOnColor: "rgba(69,194,88,1)",
      switchOffColor: "rgba(213,88,84,1)",

      // Battery
      batteryLightGrey: "rgba(0,0,0,0.1)",
      batteryGreen: "rgba(0,255,0,1)",
      batteryYellow: "#FFB247",
      batteryRed: "#FF4B41"
    },
    fonts,
    gutters,
    sizes: {
      // icon
      icon: 24,
      iconSmall: 18,

      // input
      inputBorderRadius: "10px",
      inputSingleWidth: "40px",
      inputHeight: "45px",

      // checkbox
      checkboxHeight: "20px",
      checkboxWidth: "20px",

      // button
      buttonHeight: "45px",

      // buttonLink
      buttonLinkHeight: "60px",

      // datepicker
      datePickerHeight: "200px",
      datePickerWidth: "300px",

      // profilePic
      profilePicHeight: "100px",
      profilePicWidth: "100px",

      // progressBar
      progressBarHeight: "12px",
      progressBarWidth: "120px",
      progressBarBorderRadius: "6px",

      // GarmentPodStatusBar
      GarmentPodStatusBarHeight: "120px",

      // Battery
      batteryWidth: "60px"
    },
    zIndexs
  },
  dark: {
    colors: {
      main: "#05192C",
      secondary: "#E5E5E5 ",
      secondaryNormal: "#E5E5E5 "
    },
    fonts,
    gutters,
    zIndexs
  }
};

/* Position that toasts appear from the bottom of the screen */
export const TOAST_BOTTOM = -30;
/* Duration toasts appear for in ms */
export const TOAST_DURATION = 3500;
/* Default toast options (API only) */
export const TOAST_DEFAULTS = Object.freeze({
  duration: TOAST_DURATION,
  position: TOAST_BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0
});

// SCREEN MARGIN
export const SCREEN_MARGIN_HORIZONTAL = "45px";
export const SCREEN_MARGIN_HORIZONTAL_INT = parseInt(
  SCREEN_MARGIN_HORIZONTAL.replace("px", ""),
  10
);

export const CAPTIAL_LETTER_CHECK_REGEX = /[A-Z]/;
export const DIGIT_CHECK_REGEX = /[0-9]/;
export const SPECIAL_CHECK_REGEX = /[!@#$%^&*,._\`~]/;
// export const NAME_CHECK_REGEX = /^(\S+\s?)+$/
export const NO_SPACE_REGEX = /^\S+$/;
