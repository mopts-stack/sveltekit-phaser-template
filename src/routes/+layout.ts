import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

// you can move it to the layouts with game in it only
export const ssr = false;
