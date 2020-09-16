interface NavFlatItem {
  [key : string] : any
  primary: {
    [key : string] : any
    level: string
  }
}

type NavFlat = NavFlatItem[]

interface NestedNavItem {
  id: string
  data: NavFlatItem,
  children: NestedNavItem[] | null
}

export type NavNested = NestedNavItem[]

interface Dictionary{
  [key:string]: string
}

function searchItemById(targetId: string, tree: any) {
  let foundedItem = null;
  tree.forEach((item: any): any => {
    if (item.id === targetId) {
      foundedItem = item;
    } else if (item.children.length > 0) {
      foundedItem = searchItemById(targetId, item.children);
    }
  });
  return foundedItem;
}

function flatNavToNestedNavConverter(navFlatItems: NavFlat): NavNested {
  const tree: NavNested = [];
  const levelsIds: Dictionary = {};

  navFlatItems.forEach((navFlatItem, idx) => {
    // eslint-disable-next-line no-param-reassign
    navFlatItem.id = idx;
  });

  navFlatItems.forEach((navFlatItem) => {
    const levelKey = `level_${navFlatItem.primary.level}`;
    levelsIds[levelKey] = navFlatItem.id;
    if (navFlatItem.primary.level === '1') {
      tree.push({
        id: navFlatItem.id,
        data: navFlatItem,
        children: [],
      });
    } else {
      const parentlevelKey = `level_${parseInt(navFlatItem.primary.level, 16) - 1}`;
      const parentId = levelsIds[parentlevelKey];

      const targetItem = searchItemById(parentId, tree);
      if (targetItem) {
        // @ts-ignore
        targetItem.children.push(
          {
            id: navFlatItem.id,
            data: navFlatItem,
            children: [],
          }
        );
      }
    }
  });
  return tree;
}

export default flatNavToNestedNavConverter;
