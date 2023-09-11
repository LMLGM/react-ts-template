import { useState } from "react";
import { Button } from "antd";
import { getIp } from "../../services/index";
export default function Home() {
  const [ip, setIp] = useState('')
  const getData = async () => {
    const res = await getIp();
    setIp(res?.origin || '')
  }
  return (
    <div>
      <Button type="primary" onClick={getData}>请求</Button>
      <div>我的ip：{ip}</div>
    </div>
  )
}