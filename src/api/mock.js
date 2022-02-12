import Mock from 'mockjs'

function HomeTest(){
    const test=Mock.mock({
        "野兽":1145141919810
    })
    return {
        code: 20000,
        data: {
            text: test
        }
    }
}
Mock.mock('/Home/ChartData',HomeTest)