// window.addEventListener('load', function() {
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     focus.addEventListener('mouseenter', function() {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//     })
//     focus.addEventListener('mouseleave', function() {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//     })
//     // 动态生成li
//     var ul = focus.querySelector('ul');
//     var lis = document.querySelectorAll('.focus ul li');
//     var ol = document.querySelector('.circle');
//     var focusWidth = focus.offsetWidth;
//     // console.log(lis[0]);
//     for(var i = 0; i < lis.length; i++) {
//         var li = document.createElement('li');
//         li.setAttribute('index', i);
//         ol.appendChild(li);
//         li.addEventListener('click', function () {
//             for(var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             this.className = 'current';
//             // 小圆圈点击事件切换图片
//             // console.log(focusWidth);
//             var index = this.getAttribute('index');
//             num = index;
//             circle = index;
//             animate(ul, -index * focusWidth);
//         })
//     }
//     ol.children[0].className = 'current';

//     // 右侧按钮点击事件
//     var firstp = lis[0].cloneNode(true);
//     ul.appendChild(firstp);
//     var num = 0;
//     var circle = 0;
//     arrow_r.addEventListener('click', function() {
//         if(num == lis.length) {                    
//             ul.style.left = 0;
//             num = 0;
//         }
//         num++;
//         animate(ul, -num * focusWidth);
//         // 小圆圈跟着变化
//         circle++;
//         if(circle == ol.children.length) {
//             circle = 0;
//         };
//         for(var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         ol.children[circle].className = 'current';
//     })    
// })
window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');

    // 切换小箭头显示与隐藏事件
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // 小li点击切换图片事件
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
    for(var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            
            // 每次点击圆圈前先清空所有的圆圈css属性

            for(var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';             
            }
            this.className ='current';
            var index = this.getAttribute('index');
            animate(ul, -focusWidth * index);
           
            // 解决点击箭头和小圆圈之后动画顺序混乱的bug
            num = index;
            circle = index;   
        })
    }
    ol.children[0].className = 'current';
    // 右侧按钮点击事件
    var firstli = ul.children[0].cloneNode(true);
    ul.appendChild(firstli);
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener('click', function() {
        if(num == ul.children.length - 1) {
            num = 0;
            ul.style.left = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        // 按钮点击的同时圆圈跟着变化
        circle++;
        if(circle == ul.children.length - 1) {
            circle = 0;
        }
        console.log(ul.children.length);
        
        for(var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })
    // 左侧按钮点击事件
    arrow_l.addEventListener('click', function() {
        if(num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth;
        }
        num--;
        animate(ul, -num * focusWidth);
        // 圆圈跟着变化
        if(circle == 0) {
            circle = ol.children.length;
        }
        circle--;
        console.log(ul.children.length);
        
        for(var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })

})