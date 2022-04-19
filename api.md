## JI18n文档

```
/**
* 构造函数
* @method JI18n(isSerialize, prefix="lang")
* @param {Boolean} isSerialize 是否序列化 false
* @param {String} prefix  序列化key值前缀 lang
*/
```

```
/**
* 是否已经加载国际化语言 当且仅当isSerialize有效 用来刷新页面后减少语言类型的请求
* @method isloadedLang
* @returns {Boolen}
*/
```

```
/**
* 添加国际化语言
* @methods addI18n
* @param {Array|Object} value
* addI18n({langkey: langvalue})
*/
```

```
/**
* 获取国际化语言类型
* @methods getI18n
* @returns {Array}
*/
```

```
/**
* 设置本地化语言
* @param {String} key 
* @methods setL10n
* @returns {null}
*/
```

```
/**
* 获取本地化语言类型
* @methods getL10n
* @returns {String}
*/
```

```
/**
* 获取本地化语言中的特定字段
* @param {String} prop 
* @methods getField
* @returns {String}
*/
```





