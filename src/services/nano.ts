import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonSheet } from 'nano-css/addon/sheet';

const nano = create();

addonRule(nano);
addonSheet(nano);

const { rule, sheet } = nano;

export { rule, sheet, nano };
