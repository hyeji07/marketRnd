import { httpCommunicator } from '@api/httpCommunicator';

const url = process.env.REACT_APP_API_URL;

export async function getGoodsItem(values: any) {
  return await httpCommunicator(
    `${url}/v1/goods/get_one_by_id`,
    'post',
    values,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
}
