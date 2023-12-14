export const getAllTags = (arr) => {
    const duplicatedArr = arr
      .map((e) => {
        return [...e.tag_list];
      })
      .flat();
  
    return [...new Set(duplicatedArr)];
  };