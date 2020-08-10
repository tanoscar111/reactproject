import React from 'react';
import ComponnentCha from '../ComponentCha'
import './name.css';
var  a="Le thanh tan";
var b=10;
console.log(a);
console.log(b);
function Name(props) {
    // có thể viết 1 funtion khác bình thường
     //function là 1 cái nhà máy hoạt động
    // function newFuntion(){
        console.log("Name",props)
    const getiemtocha=props.getiemtocha
    
    // }
    //return là kết quả trả về của nhà máy
    return (
        <div className="name">
            <ComponnentCha getiemtocha="GetitemCha" />
        </div>
    );
}

export default Name;
