import { create } from 'nano-css';
import { addon as addonGlobal } from 'nano-css/addon/global';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonSheet } from 'nano-css/addon/sheet';

const nano = create();

addonGlobal(nano);
addonRule(nano);
addonSheet(nano);

const { global, rule, sheet } = nano;

export {
  global,
  rule,
  sheet,
  nano,
};
