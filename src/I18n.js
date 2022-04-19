/**
 * Class JI18n.
 */
export class JI18n {
    /**
     * 设置的本地化语言
     * @property _l10nKey
     * @type String
     * @private
     */
    _l10nKey = ""

    /**
     * 本地化语言的信息
     * @type Object
     * @property _l10nValue
     * @private
     */
    _l10nValue = null

    /**
     * 可以使用的I18n集合
     * @type Map
     * @property _availableI18nMap
     * @private
     */
    _availableI18nMap = null

    /**
     * 是否序列化[加入sessionStorage]
     * @type Boolean
     * @property _isSerialize
     * @private
     */
    _isSerialize = false

    /**
     * 序列化key值前缀
     * @type String
     * @property _prefixSerialize 
     * @private
     */
    _prefixSerialize = "lang"

    /**
     * 构造函数
     * @param {Boolean} isSerialize 是否序列化
     * @param {String} prefix  序列化key值前缀
     */
    constructor(isSerialize, prefix) {
        this._isSerialize = isSerialize ?? this._isSerialize
        this._prefixSerialize = prefix ?? this._prefixSerialize
        this._availableI18nMap = new Map();
        if (this.isloadedLang()) { 
            this.deserializeL10n();
        }
    }

    /**
     * 是否已经加载国际化语言
     * @returns {Boolen}
     */
    isloadedLang() {
        return this.getI18n().length && this._isSerialize
    }

    /**
     * 序列化国际化语言
     * @param {String} key 序列化key
     * @param {Object} value 序列化value
     * @private
     */
    serializeI18n(key, value) {
        if (this._isSerialize) {
            window.sessionStorage.setItem(this._prefixSerialize + "_" + key, JSON.stringify(value))
        }
    }

    /**
     * 序列化本地化语言类型
     * @param {String} language 本地化语言类型
     * @private
     */
    serializeL10n(language) {
        if (this._isSerialize) {
            window.sessionStorage.setItem(this._prefixSerialize + "_L10n", language)
        }
    }

    /**
     * 反序列化国际化语言
     * @private
     */
    deserializeI18n() {
        const langKeys = this.getI18n();
        langKeys.forEach(el => {
            this._availableI18nMap.set(el, JSON.parse(window.sessionStorage.getItem(this._prefixSerialize + "_" + el)))
        })
        this._l10nValue = this._availableI18nMap.get(this._l10nKey)
    }

    /**
     * 反序列化本地化语言
     * @private
     */
    deserializeL10n() {
        if (this._isSerialize) {
            this._l10nKey = window.sessionStorage.getItem(this._prefixSerialize + "_L10n") ?? this._l10nKey;
        }
        if (this._l10nKey) {
            this.deserializeI18n();
        }
    }

    /**
     * 添加国际化语言
     * @param {Array|Object} value 
     */
    addI18n(value) {
        if (Object.prototype.toString.call(value) == "[object Object]") {
            for (let item in value) {
                this._availableI18nMap.set(item, value[item])
                this.serializeI18n(item, value[item]);
            }
        } else if (Object.prototype.toString.call(value) == "[object Array]") {
            for (let item of value) {
                for (let key in item) {
                    this._availableI18nMap.set(key, value[item][key])
                    this.serializeI18n(key, value);
                }
            }
        } else {
            throw new Error("Invalid internationalized language")
        }
    }

    /**
     * 获取国际化语言类型
     * @returns {Array}
     */
    getI18n() {
        return Object.keys(window.sessionStorage).filter(el => el.indexOf(this._prefixSerialize) > -1 && el.indexOf("_L10n") === -1).map(el => el.slice(this._prefixSerialize.length + 1));
    }

    /**
     * 设置本地化语言
     * @param {String} key 
     * @returns {null}
     */
    setL10n(key) {
        if (this._availableI18nMap.has(key)) {
            this._l10nKey = key
            this._l10nValue = this._availableI18nMap.get(key)
            this.serializeL10n(key)
        } else {
            throw new Error("An internationalized language that does not exist")
        }
    }

    /**
     * 获取本地化语言类型
     * @returns {String}
     */
    getL10n() {
        return this._l10nKey
    }

    /**
     * 获取本地化语言中的特定字段
     * @param {String} prop 
     * @returns {String}
     */
    getField(prop) {
        try {
            const props = prop.split(".")
            let currKey = props.shift(), currValue = undefined;
            while (currKey) {
                currValue = currValue ? currValue[currKey] : this._l10nValue[currKey]
                currKey = props.shift()
            }
            return currValue
        } catch {
            throw new Error("Cannot get the value of property" + prop)
        }
    }
}