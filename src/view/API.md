## 后端HTPP请求处理函数
```
urlpatterns=[
    url(r'^test$', ServerApp.views.test,),
    url(r'^Datapush$', ServerApp.views.Datapush,),
    url(r'^getVisit$', ServerApp.views.getVisit,),
    url(r'^imageResult$', ServerApp.views.imageResult,),
    url(r'^excuteFile$', ServerApp.views.excuteFile,),
    url(r'^charData$', ServerApp.views.charData,),
    url(r'^getHistoryData$', ServerApp.views.getHistoryData,),
    url(r'^getOriImg$', ServerApp.views.OriImageResult,),
    url(r'^getReImg$', ServerApp.views.ReImageResult,),
    url(r'^getHistoryChartData$', ServerApp.views.getHistoryChartData,),
    url(r'^getObj$', ServerApp.views.getObj,),
    url(r'^pushMtl$', ServerApp.views.pushMtl,),
    url(r'^FindFile$', ServerApp.views.FindFile,),
    url(r'^DeleteFile$', ServerApp.views.DeleteFile,),
    url(r'^isUser$', ServerApp.views.isUser,),
]
```
## 后端函数介绍
***
### test() [GET]
- 记录用户访问网站信息
- 成功登录时向后端发送用户信息
***
### Datapush() [POST]
- 上传模型文件
- 文件信息格式为FormData
- 存储在服务端本地saved文件夹
***
### getVisit() [GET]
- 获取网站访问流量数据
- 
***
### imageResult() [GET]
***
### excuteFile() [GET]
***
### charData() [GET]
***
### getHistoryData() [GET]
***
### getOriImg() [GET]
***
### getReImg() [GET]
***
### getHistoryChartData() [GET]
***
### getObj() [GET]
***
### pushMtl() [GET]
***
### FindFile() [GET]
***
### DeleteFile() [GET]
***
### isUser() [GET]
***
[联系邮箱](www.baidu.com)