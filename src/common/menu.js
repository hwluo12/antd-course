const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: "HelloWorld",
    icon: "dashboard",
    path: "helloworld"
  },
  {
    name: "PuzzleCards",
    icon: "dashboard",
    path: "puzzlecards"
  },
  {
    name: "List",
    icon: "dashboard",
    path: "list"
  },
  {
    name: "Dashboard",
    icon: "dashboard",
    path: "dashboard",
    children: [
      {
        name: "分析页",
        path: "analysis"
      },
      {
        name: "监控页",
        path: "monitor"
      },
      {
        name: "工作台",
        path: "workplace",
        hideInBreadcrumb: true,
        hideInMenu: true
      }
    ]
  }
];

function formatter(data, parentPath = "/", parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
