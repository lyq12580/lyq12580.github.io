(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(n,e,o){"use strict";o.r(e);var t=o(0),a=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("经典的Foo和getName题目")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function Foo(){\n    getName = function(){\n        console.log(1);\n    };\n    return this;\n} \n\nFoo.getName = function(){\n    console.log(2);\n}\n\nFoo.prototype.getName = function(){\n    console.log(3);\n}\n\nvar getName = function(){\n    console.log(4);\n}\n\nfunction getName(){\n    console.log(5);\n    }\n\n    //输出以下的输出结果\n\n//函数Foo的静态方法\nFoo.getName();//2\n\n//function getName有提前声明的规则，声明后被var getName= 。。覆盖，则getName为4\ngetName();//4\n\n//Foo()的return this为window，window.getName 在Foo里面被覆盖，则输出1\nFoo().getName();//1\n\n//同上，因调用了Foo();window的getName被覆盖\ngetName();//1\n\n//依然只是调用了Foo对象上的getName,又因为Foo.getNname，所以相当于\n/**\n *  function a(){console.log(2)};\n *  new a();\n * **/\nnew Foo.getName();//2\n\n//先执行了new Foo()；返回一个对象，这个对象的getName为prototype上的getName,相当于(new Foo()).getName();\nnew Foo().getName();//3\n\n//\nnew new Foo().getName();//3\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);