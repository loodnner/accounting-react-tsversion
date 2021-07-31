import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
import axios from "axios";

type User = {
  id: string;
  name: string;
  age: number;
  sex: string;
};

export const Chart1 = () => {
  const divRef = useRef(null); 
  const [users, setUsers] = useState<User[]>([]);
  const [oldUsers, setOldUsers] = useState<User[]>([]);
  const [state, setState] = useState<"success" | "failed" | "loading">(
    "loading"
  );
  useEffect(() => {
    axios.get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists").then(
      (response) => {
        setState("success");
        const users = response.data
        setOldUsers(users.filter(user=>user.age>=80))
      },
      (error) => {
        setState("failed");
      }
    );
  }, []);

  useEffect(() => {
    console.log(oldUsers);
    if (!oldUsers.length) {
      return;
    }
    // console.log(divRef.current,state)
    var myChart = echarts.init(divRef.current);
    // 私有配置项
    var option = {
      xAxis: {
        data: oldUsers.map((user) => user.id),
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            }
          },
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
      },
      series: [
        {
          type: "bar",
          data: oldUsers.map((user) => user.age),
        },
      ],
    };
    //私有+公共配置项合并运行
    myChart.setOption(createEchartsOptions(option));
  }, [oldUsers]);

  if (state === "success") {
    return (
      <div className="bordered areaData">
        <h2>指标统计</h2>
        <div ref={divRef} className="chart">
        </div>
      </div>
    );
  } else if (state === "failed") {
    return <div>数据请求失败</div>;
  } else if (state === "loading") {
    return <div>数据加载中</div>;
  }
};
