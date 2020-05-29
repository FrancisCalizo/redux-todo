import { LOG_ME_IN, LOG_ME_OUT } from './types';

export const logMeIn = () => {
  return {
    type: LOG_ME_IN,
  };
};

export const logMeOut = () => {
  return {
    type: LOG_ME_OUT,
  };
};
