/* eslint-disable @typescript-eslint/naming-convention */
// 此文件用于导出所有以 getLang 函数方式引用的多语言包
import * as util from 'util';
import * as vscode from 'vscode';
const config = JSON.parse(process.env.VSCODE_NLS_CONFIG || '');
let locale = config['locale'] || 'en';
let defaultLang = {
    'md-img.hello': 'default hello',
    'md-img.localimage':'----local images total[%d]----',
    'md-img.netimage':'----net images total[%d]----',
    'md-img.errorimage':'----error message total[%d]----',
    'md-img.removeFolderHint': "local image path is diff, must be the same, move first!",
    'md-img.removeResult': '----removed images total[%d] to [%s]----\n%s'
    ,'md-img.moveHint': 'Choose the folder the images move to'
    ,'md-img.docAct': 'document not Actived!'
    ,'md-img.docDirty': 'Please save doc first!'
    ,'md-img.uptSucc': 'The image links[%d] in [%s] has been updated'
    ,'md-img.uptSucc2': 'Images[%d] have been changed,but not update content,because the setting of update link'
    ,'md-img.uptSucc3': 'No image link changed'
}
// 中文需要填写的
let zhcnLang = {
   'md-img.hello': '你好',
   'md-img.localimage':'----本地图片数[%d]----',
   'md-img.netimage':'----网络图片数[%d]----',
   'md-img.errorimage':'----错误消息共[%d]----',
   'md-img.removeFolderHint': "本地资源文件路径必须一样，可以先移动到一个目录下!",
   'md-img.removeResult': '----移动图片总共[%d] 到 [%s]----\n%s'
   ,'md-img.moveHint': '请选择图片移动的目标目录'
   ,'md-img.docAct': '文件未打开！'
   ,'md-img.docDirty': '请先保存文件！'
   ,'md-img.uptSucc': '已经更新图片链接[%d]个,在[%s]中'
   ,'md-img.uptSucc2': '图片已经改变[%d]个,因update link设置,不更新内容'
   ,'md-img.uptSucc3': '没有链接变化，无需更新'
}
// 语言包汇总
let lang = {
    'en': defaultLang,
    'zh-cn': zhcnLang
};
// 通过此方法获取信息
export function getLang(key: string, ...msg:any) {
    let local = lang[locale][key];
    if(msg!=null)
    {
        return util.format(local,...msg);
    }else{
        return local;
    }
    
}
(() => {
    let hasError = false;
    Object.keys(defaultLang).forEach(key => {
        if(zhcnLang[key]== null)
        {
            console.error(`lang[${key}]  lost!!`);
            hasError = true;
        }
    })
    if(hasError)
    {
        vscode.window.showErrorMessage('Language Package lose keys, please check in console')
    }
})()