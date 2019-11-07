import { J19ErrorEvent } from "@jsextend19/j19-event"
export class I18n{
    /**
     * 设置的本地化语言
     * @property _l10n
     * @type {String}
     * @default null
     * @private
     */
    _l10nKey = ""

    /**
     * 本地化语言的信息
     * @property _l10nValue
     * @type {Object}
     * @default null
     * @private
     */
    _l10nValue = null
    /**
     * 可以使用的I18n集合
     * @property _availableI18nMap
     * @type {Map}
     * @default null
     * @private
     */
    _availableI18nMap = null

    /**
     * 构造函数
     * @param {String} language
     */
    constructor(){
        this._availableI18nMap = new Map()
    }

    /**
     * 添加国际化语言
     * @method addLanguage
     * @param {Array|Object} value 
     * @returns {null}
     */
    addLanguage(value){
        if(Object.prototype.toString.call(value) == "[object Array]"){
            for(let item in value){
                this._availableI18nMap.set(item,value[item])
            }
        }else if( Object.prototype.toString.call(value) == "[object Object]"){
            for(let item of value){
                for(let key in item){
                    this._availableI18nMap.set(key,value[item][key])
                } 
            }
        }else{
            throw new J19ErrorEvent("Invalid internationalized language","无效的国际化语言")
        }
    }

    /**
     * 设置本地化语言
     * @method setLanguage
     * @param {*} key 
     * @returns {null}
     */
    setLanguage(key){
        if(this._availableI18nMap.has(key)){
            this._l10nKey = key
            this._l10nValue = this._availableI18nMap.get(key)
        }else{
            throw new J19ErrorEvent("An internationalized language that does not exist","不存在的国际化语言")
        }
    }
    /**
     * 获取本地化语言指定类型的属性
     * @method getl10nProp
     * @param {String} prop 
     * @param {String} type 
     * @returns {String}
     */
    getl10nProp(prop,type){
        if(this._l10nValue[type][prop]){
            return this._l10nValue[type][prop]
        }else{
            throw new J19ErrorEvent("Cannot get the value of property" + prop,"无法获取属性" + prop+ "对应的值" )
        }
    }
}