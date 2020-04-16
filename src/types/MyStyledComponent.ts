import {FunctionComponent} from 'react';
// eslint-disable-next-line no-restricted-imports
import {DefaultTheme, ThemeProps} from 'styled-components';
import {ClassNameOnly} from './ClassNameOnly';

export type MyStyledComponent<P = {}> = FunctionComponent<ClassNameOnly & ThemeProps<DefaultTheme> & P>;
