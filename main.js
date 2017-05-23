// var picNum = 0;
// function qiu() {
//     picNum ++ ;
//     var target = $('#input');
//
//     // foo(target);
//     // target.focus();
//     var buffer = window.getSelection();
//     var nowNode = buffer.anchorNode;
//     var distance = buffer.anchorOffset;
//     console.dir(nowNode);
//     if (nowNode == null || nowNode.nodeType == 1) {
//         console.log('type = 1');
//         //直接插入图片
//         var img = $('<img src="./cat.png">');
//         target.append(img);
//         setPos_1(target[0]);
//     } else {
//         if (nowNode.length == distance) {
//             console.log('type = 2');
//             //直接插入图片
//             var img = $('<img src="./cat.png">');
//             target.append(img);
//             setPos_1(target[0]);
//         } else {
//             console.log('type = 3');
//             var range = buffer.getRangeAt(0),
//             var img = document.createElement('img');
//             img.src = './cat.png';
//             range.insertNode(img);
//             //jq方法。
//             nowNode.replaceWith(shadowDom);
//             setPos_2(target[0],distance,nowNode.textContent.length);
//         }
//     }
//     target.focus();
// }
//
// function setPos_1(edit) {
//     var range;
//     range = document.createRange();
//     range.selectNodeContents(edit);
//     range.collapse(true);
//     range.setEnd(edit, edit.childNodes.length);
//     range.setStart(edit, edit.childNodes.length);
//     sel = window.getSelection();
//     sel.removeAllRanges();
//     sel.addRange(range);
// }
//
// function setPos_2(edit,distance,length) {
//     var range;
//     console.log(distance);
//     range = document.createRange();
//     range.selectNodeContents(edit);
//     range.collapse(true);
//     range.setEnd(edit, picNum+1);
//     range.setStart(edit, picNum+1);
//     sel = window.getSelection();
//     sel.removeAllRanges();
//     console.log(edit,distance,length-distance-1);
//     sel.addRange(range);
// }

var lastEditRange = null;
function qiu() {
    var target = $('#input')[0];
    var img = document.createElement('img');
    img.src = './cat.png';
    target.focus();
    var selection = getSelection();
    var range = selection.getRangeAt(0);
    if (lastEditRange) {
        // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
        selection.removeAllRanges()
        selection.addRange(lastEditRange)
    }
    range.insertNode(img);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    lastEditRange = selection.getRangeAt(0);
}
