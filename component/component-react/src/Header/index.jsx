import React from 'react';

import './header.css';
 
function Header(props) {// props laf  nguyên liệu để truyền vào
    
    // có thể viết 1 funtion khác bình thường
     //function là 1 cái nhà máy hoạt động
    // function newFuntion(){
        //state là biến của funtion component
        const name=props.name;
        const adrees=props.adrees
    // }
    //return là kết quả trả về của nhà máy
    return (
        <div className="header">
            heaer
            {name}-{adrees};
        </div>
    );
}

export default Header;
