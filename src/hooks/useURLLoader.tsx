import { useState, useEffect } from "react"
import axios from "axios"

/**
 *
 * @param url 外面传来的url
 * @param deps 对哪些state进行监听渲染
 */
const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then((res) => {
      setData(res.data)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps) //透传监视参数，一旦传过来的值发生变化，就重新effect
  return [data, loading]
}
export default useURLLoader
