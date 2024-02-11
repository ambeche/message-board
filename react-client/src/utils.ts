import { isAxiosError } from 'axios';
import { AppTheme } from './types/stateTypes';

export const dateFormatter = (datetime: string) => {
  const givenDate = new Date(datetime);

  // Time in 24-hour format with minutes and seconds
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const time = givenDate.toLocaleTimeString(undefined, timeOptions);

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: '2-digit',
  };
  const date = givenDate.toLocaleDateString(undefined, dateOptions);

  return { time, date };
};

// Parses and log server error.
export const serverErrorHandler = (unKnownError: unknown) => {
  if (isAxiosError(unKnownError)) {
    console.log(unKnownError);
  }
};

export const toggledTheme = (theme: AppTheme) =>
  theme === AppTheme.system
    ? ''
    : theme === AppTheme.dark
    ? 'dark-theme'
    : 'light-theme';
