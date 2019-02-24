import 'undom/register';
import { config } from 'preact-render-spy';

config.createFragment = () => document.createElement('body');
