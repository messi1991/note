/* 
menuTree:
[
  {
    children: [
      {
        id: ''
      }
    ],
    id: ''
    ...
  }
]
menuList:
['']
*/

const AuthTreeFilter = (menuTree = [], menuList = []) => (
  menuList.filter((el) => {
    const fn = (arr = []) => (
      arr.some((item) => {
          if (item.id === el && !item?.children?.length) {
            return true;
          }
          if (item?.children?.length) {
            return fn(item.children);
          }
          return false;
        })
    )
    return fn(menuTree);
  })
);