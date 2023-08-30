import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { uploadUrl = '' } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  window.console.log('upload avator');
  window.console.log(params);
  return false;
  // return defHttp.uploadFile<UploadApiResult>(
  //   {
  //     url: uploadUrl,
  //     onUploadProgress,
  //   },
  //   params,
  // );
}
