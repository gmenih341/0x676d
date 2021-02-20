import {FunctionComponent} from 'react';
// eslint-disable-next-line no-restricted-imports
import {ThemeProps} from 'styled-components';
import {ClassNameOnly} from './ClassNameOnly';
import {DefaultTheme} from '../theme';

export type MyStyledComponent<P = {}> = FunctionComponent<ClassNameOnly & ThemeProps<DefaultTheme> & P>;
