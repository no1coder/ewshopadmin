import request from "@/utils/request";


/**
 * @description: OSS token
 * @param params
 */
export function uploadToken() {
    return request(
        {
            url: '/api/auth/oss/token',
            method: 'GET',
        }
    );
}