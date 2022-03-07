import Mock from 'mockjs'

function HomeTest(){
    const test=Mock.mock({
        "2022-01":114,
        "2022-02":514,
        "2022-03":1919,
        "2022-04":810
    })
    return {
        code: 20000,
        data: test
    }
}
Mock.mock('/Home/ChartData',HomeTest)
function no(data){  //FormData格式文件
    //console.log(data)

    var file=new Blob([data.body],{type:'jpg'})

    console.log(file)
    /*if(window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(file,file.name)
      }else{
          var a=document.createElement("a")
          a.href=URL.createObjectURL(file);
          a.download="123.jpg"
          console.log(a.download)
          document.body.appendChild(a)
          a.click()
          console.log("保存成功！")
      }*/
    return {
        code: 114,
    }
}
Mock.mock('/Datapush/FileData',no)
