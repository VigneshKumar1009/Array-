let array=[];
function addvalue(item)
{
    array.push(item);
    console.log(`Added: ${item}`);

}
function editvalue(index,newitem)
{
    if(index>=0 && index< array.length)
    {
        array[index]=newitem;
        console.log(`Edited: ${newitem}`);

    }
    else
    {
        console.log(["invalid index"]);
    }
    
}
function deletevalue(index)
{
    if(index>=0 && index< array.length)
    {
          let deletedvalue = array.splice(index, 1)[0];

         console.log(`Deleted: ${deletedvalue}`);

    }
    else
    {
        console.log("invalid index");
    }

}
function showvalue()
{
    console.log("Data in the array:");
    for (let index = 0; index < array.length; index++) {
      item = array[index];
      console.log(`${index + 1}. ${item}`);
    }
}
addvalue("Item 1");
addvalue("Item 2");
addvalue("Item 3");

// Editing data in the array
editvalue(1, "Edited Item 2");

// Deleting data from the array
deletevalue(0);

// Showing all data in the array
showvalue();
