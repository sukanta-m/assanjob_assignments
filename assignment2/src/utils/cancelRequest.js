import axios from "axios";

const { CancelToken } = axios
const axiosTokens = {};

export default (type) => {
  axiosTokens[type] = axiosTokens[type] || [];
  if (axiosTokens[type].length) {
    axiosTokens[type][0].cancel('Operation cancelled by user')
  }
  axiosTokens[type][0] = CancelToken.source()
  return { cancelToken: axiosTokens[type][0].token };
}