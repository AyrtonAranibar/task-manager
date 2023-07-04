import React from "react";
function useLocalStorage( itemName , newValue ){

  const [item, setItem] = React.useState(newValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
      const localStorageItem = localStorage.getItem(itemName);
      let TODOS_V1 = {};
      if (!localStorageItem){
        const todosString = JSON.stringify(newValue);
        TODOS_V1 = localStorage.setItem(itemName, todosString );
      }else{
        TODOS_V1 = JSON.parse(localStorage.getItem(itemName));
      }
      // throw new Error('Whoops!')
      setItem(TODOS_V1);
      setLoading(false);
    }catch(error){
      setError(true);
      console.error(error);
      setLoading(false);
    }
    
    },3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveItem = ( newValue )=>{
    const newString = JSON.stringify( newValue );
    localStorage.setItem(itemName, newString);
    setItem(newValue);
  }
  return {item, saveItem, loading, error};
}

export { useLocalStorage };