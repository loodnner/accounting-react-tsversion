import React, { useEffect } from "react"
import { useRef } from "react"
import china from '../geo/china.json'
import * as echarts from 'echarts'
import { createEchartsOptions } from "../shared/create-echarts-options"


export const Chart6 = ()=>{
    const divRef = useRef(null)
    const colors = {
        '青海省': '#BB31F7', 
        '甘肃省': '#15B8FD', 
        '四川省': '#06E1EE'
    }
    
    useEffect(()=>{
        var myChart = echarts.init(divRef.current);
        echarts.registerMap('CN',china)
        var options = {
            xAxis: {show: false},
            yAxis: {show: false},
            series:[
                {
                    type:'map',
                    map:'CN',
                    data:[
                        {
                            name:'甘肃省',
                            value:1
                        }
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle:{
                        areaColor: '#010D3D',
                        color: colors['甘肃省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                          },
                    }
                },
                {
                    type: 'map',
                    map: 'CN', // 自定义扩展图表类型
                    data: [
                      {name: '四川省', value: 100},
                    ],
                    itemStyle: {
                      areaColor: '#010D3D',
                      color: colors['四川省'],
                      borderColor: 'yellow',
                      emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                      },
                    }
                  },
                  {
                    type: 'map',
                    map: 'CN', // 自定义扩展图表类型
                    data: [
                      {name: '青海省', value: 100},
                    ],
                    itemStyle: {
                      areaColor: '#010D3D',
                      color: colors['青海省'],
                      borderColor: '#01A7F7',
                      emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                      },
                    }
                  },
            ]
        }
        myChart.setOption(createEchartsOptions(options));
    },[])

    return (
        <div  className="bordered area">
          <h2>籍贯分布</h2>
          <div className="wrapper">
          <div ref={divRef} className='chart'/>
            <div className="legend bordered">
            <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
            <span className="icon" style={{background: colors['四川省']}}/>四川籍
            <span className="icon" style={{background: colors['青海省']}}/>青海籍
            </div>
          </div>
        </div>
    )

}