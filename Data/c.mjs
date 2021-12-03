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

console.time("one");
const handleMenuData = (menuData) => {
  let source = [];
  const menuIdMap = {};
  const relativeMap = {};
  for (let i = 0; i < menuData.length; i += 1) {
    const item = menuData[i];
    menuIdMap[item.id] = {
      ...item
    };
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
console.log("sss", handleMenuData(testData.slice()))
console.timeEnd("one");

console.time("two");
const list_to_tree = (list) => {
  var map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
console.log("sss1", list_to_tree(testData))
console.timeEnd("two");