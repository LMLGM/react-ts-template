import request from '../utils/request';

export const getIp: () => Promise<{ origin: string }> = () => {
    return request({
        url: '/ip',
        method: 'GET',
    })
}