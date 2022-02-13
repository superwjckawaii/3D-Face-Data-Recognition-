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