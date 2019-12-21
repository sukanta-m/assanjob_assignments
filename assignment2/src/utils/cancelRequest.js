import axios from "axios";

const { CancelToken } = axios
const axiosTokenArr = [];
export default () => {
  if (axiosTokenArr.length) {
    axiosTokenArr[0].cancel('Operation cancelled by user')
  }
  axiosTokenArr[0] = CancelToken.source()
  return { cancelToken: axiosTokenArr[0].token };
}