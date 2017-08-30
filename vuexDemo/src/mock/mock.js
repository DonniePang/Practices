import Mock from 'mockjs';

export default {
    mock: () => {
        return Mock.mock('/api.json', 'get', {
            "status": "ok",
            "userName": "Donnie"
        })
    }
}