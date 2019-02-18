import { useState, useEffect, useContext, useRef } from 'react';
import usePersistantState from './customHook';
import useInterval from './useInterval';
import LocaleContext, { LocaleContextProvider } from '../context/LocaleContextHook';

export default {
  scope: {
    useState,
    useEffect,
    useContext,
    useRef,
    useInterval,
    usePersistantState,
    LocaleContext,
    LocaleContextProvider
  }
};
