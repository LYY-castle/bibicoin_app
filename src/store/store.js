const STORAGE_KEY = 'table-vuejs';
export default{
    // 获取数据的方法
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    // 保存数据的方法
    save(items){
        window.localStorage.getItem(STORAGE_KEY,JSON.stringify(items))
    }
}