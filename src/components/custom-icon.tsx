import {createIconSet} from '@react-native-vector-icons/common';

const glyphMap = {
  home: 0xe88a,
  search: 0xe8b6,
  low_priority: 0xe16d,
  more_vert: 0xe5d4,
  more_horiz: 0xe5d3,
  settings: 0xe8b8,
  arrow_back: 0xe5c4,
  notifications: 0xe7f4,
  task_alt: 0xe2e6,
  schedule: 0xe8b5,
  trending_up: 0xe8e5,
  show_chart: 0xe6e1,
  attach_money: 0xe227,
  style: 0xe41d,
  toll: 0xe8e0,
  settings_power: 0xe8c6,
  translate: 0xe8e2,
  g_translate: 0xe927,
  close: 0xe5cd,
  chevron_left: 0xe5cb,
  chevron_right: 0xe5cc,
  keyboard_arrow_up: 0xe316,
  keyboard_arrow_down: 0xe313,
  add: 0xe145,
  check: 0xe5ca,
  lock: 0xe897,
  email_alternate: 0xe0e6,
};

const IconRegular = createIconSet(glyphMap, {
  postScriptName: 'Material Symbols Rounded Regular',
  fontFileName: 'ms.ttf',
});

const IconFill = createIconSet(glyphMap, {
  postScriptName: 'Material Symbols Rounded Filled',
  fontFileName: 'ms_fill.ttf',
});

type Props = {
  fill?: boolean;
  name: keyof typeof glyphMap;
  size: number;
  color: string;
};

export const Icon = ({fill = false, name, size, color}: Props) => {
  return fill ? (
    <IconFill name={name} size={size} color={color} />
  ) : (
    <IconRegular name={name} size={size} color={color} />
  );
};
