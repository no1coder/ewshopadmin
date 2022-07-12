import request from "@/utils/request";


/**
 * @description: 轮播图
 * @param params
 */
export function slides(params: any) {
    return request(
        {
            url: '/api/admin/slides',
            method: 'GET',
            params,
        }
    );
}
/**
 * @description: 轮播图
 * @param params
 */
export function addSlides(data: any) {
    return request(
        {
            url: '/api/admin/slides',
            method: 'POST',
            data,
        }
    );
}