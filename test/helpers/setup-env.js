import 'undom/register';
import { config } from 'preact-render-spy';

config.createFragment = () => document.createElement('body');

// set document.getElementsByTagName to satisfy nano-css
document.getElementsByTagName = () => [];
