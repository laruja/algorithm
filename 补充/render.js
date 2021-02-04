/**
var tmpl = `
  name is {obj.a}
  age is {obj.b.c}
  address is {obj.c.d}
  phone is {obj2.a}
`;

var data = {
  obj: {
    a: 1,
    b: {c:  {d:2}},
    c: false
  }
}

根据上面给出的数据写出一个函数 render 返回的结果为：
"
  name is 1              // 基本类型返回，，没有找到就返回字符串
  age is {"d":2}         // 对象类型直接JSON.stringify处理
  address is obj.c.d     // 没有找到就直接拼接字符串
  phone is obj2.a
"

function render(tmpl,data){
  // TODO...
}

*/
function render1(tmpl, data) {
    // 匹配{}内换行以外任意字符出现零次或多次 重复零次或一次
    // 等效 \{.*\}
    return tmpl.replace(/\{(.*?)\}/g, (match, group) => {
        console.log('match: ', match);
        console.log('group: ', group);
        let keys = group.split('.');
        let temp = data, flag = true;
        for (let key of keys) {
            temp = temp[key];
            if (temp === undefined) {
                flag = false;
                break;
            }
        }
        return JSON.stringify(flag && temp !== undefined ? temp : group)
    });
}