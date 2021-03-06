export const str = `
.skin *{box-sizing: border-box; margin:0;
    padding:0;}
.skin *::before, .skin *::after{box-sizing: border-box;}

.skin{
    background:#ffe600;
    min-height: 50vh;
    position: relative;
}
.nose{
    border:10px solid #000;
    border-color:#000 transparent transparent;
    border-bottom: none;
    width:10px;
    height: 10px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;

}

@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 0.3s infinite linear;
}


.yuanhu {
    position:absolute;
    width: 20px;
    height: 8px;
    top: -17px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background-color:#000;
}

.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before{
    content:"";
    display: block;
    border:3px solid #000;
    width:30px;
    height:30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left:4px;
    top:2px;
}

.eye.left{
    transform: translateX(-100px);
}

.eye.right{
    transform: translateX(100px);
}

.mouth{
    width:200px;
    height:200px;
    position: absolute;
    left:50%;
    top:170px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;

}   
.mouth .up .lip{
    border:3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.left{
    transform: rotate(-15deg) translateX(-53px);
    border-radius: 0 0 0 50px;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before{
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position:absolute;
    background-color: #ffe600;
    bottom: 0;
}

.mouth .up .lip.right::before{   
    left: -6px;
}
.mouth .up .lip.left::before{
    right: -6px;
}

.mouth .down{
    height: 185px;
    position: absolute;
    top:5px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1{
    border:3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    width:200px;
    height:300px;
    background: #ff485f;
    position:absolute;
    bottom:-150px;
    left:50%;
    margin-left: -100px;
    border-radius: 100px;
}

/* ????????????????????? */
.face{
    position: absolute;
    left:50%;
    border:3px solid black;
    width: 88px;
    height: 88px;
    top:200px;
    margin-left: -44px;
    z-index: 3;
}

.face > img{
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left{
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
}

.face.left >img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right{
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
}
`;