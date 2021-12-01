/* 

*/
const testData = [
  {
    parentId: '0',
    id: '1'
  }, 
  {
    parentId: '1',
    id: '2'
  }, 
  {
    parentId: '2',
    id: '3'
  }, 
  {
    parentId: '0',
    id: '4'
  }

]
const handleMenuData = (menuData) => {
  let source = [];
  const menuIdMap = {};
  const relativeMap = {};
  for (let i = 0; i < menuData.length; i += 1) {
    const item = menuData[i];
    menuIdMap[item.id] = item;
    if (relativeMap[item.parentId] === undefined) {
      relativeMap[item.parentId] = [item.id];
    } else {
      relativeMap[item.parentId].push(item.id);
    }
  }

  source = dp("0");

  function dp(id) {
    const childs = relativeMap[id];
    const res = [];

    for (let i = 0; i < childs.length; i += 1) {
      const itemId = childs[i];
      const parent = menuIdMap[itemId];
      if (relativeMap[itemId]) {
        parent.children = dp(itemId);
        res.push(parent);
      } else {
        res.push(parent);
      }
    }

    return res;
  }

  return source;
}

console.log("sss", handleMenuData(testData))