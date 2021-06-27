const createMark = () => {

    const MARK_COUNT = 20;
    let markList = [];

    for(let i = 1; i <= MARK_COUNT; i++)
    {
      const markbutton = {id:i, selected:false};
      markList.push(markbutton);
    }

    return markList;

}


const sayHello = () => {alert("Woi!!!")};



export {createMark, sayHello};