import { lazy } from 'react';

export const EarthCanvas    = lazy(() => import('./Earth'));
export const BallCanvas     = lazy(() => import('./Ball'));
export const ComputersCanvas = lazy(() => import('./Computers'));
export const StarsCanvas    = lazy(() => import('./Stars'));