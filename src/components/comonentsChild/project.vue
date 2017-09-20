/**
 * @author [Sa]
 * @email [xwl330596595@163.com]
 * @create date 2017-09-06 10:25:31
 * @modify date 2017-09-06 10:25:31
 * @desc [工作经历，显示图表]
*/
<template>
  <div class="project-container">
    <h1>project experience</h1>
    <!-- <h1>项目经验</h1> -->
    <ECharts :options="polar"></ECharts>
    <transition name="scale">
      <div v-show="mask.show" class="mask" @click="hideMask">
        <div class="detail">
          <h2>项目详情<span>：</span></h2>
          <p>名称：{{project.name}}</p>
          <p>周期：{{project.duration}}</p>
          <p>工具：{{project.tool}}</p>
          <p>介绍：
            <span v-for="item in mask.data">{{item}}</span>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import $ from 'n-zepto';
export default {
  props: ['work'],
  data () {
    // 散点图数据模板
    let data = this.work.project[0];
    let dataForMobile = this.work.project[1];
    return {
      // 散点图属性
      polar: {
        baseOption: {
          title: {
            text: '2014-至今项目与项目时长统计',
            textStyle: {
              color: '#393e46'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (param) {
              const _data = param.data;
              let _richHtml = '';
              _richHtml += '<p style="font-size: 0.875rem;font-family:\'微软雅黑\';">项目：' + _data[0] + '</p>';
              _richHtml += '<p style="font-size: 0.875rem;font-family:\'微软雅黑\';">周期：' + _data[3] + '</p>';
              return _richHtml;
            }
          },
          legend: {
            right: 10,
            data: ['.NET', 'WebAPP']
          },
          grid: {
            top: '20%',
            left: '95px'
          },
          xAxis: {
            name: '项目',
            nameTextStyle: {
              fontWeight: '600',
              fontFamliy: '微软雅黑'
            },
            data: ['锐锋生活网', '卓越OA', '鹏电讯充', '华润三九服务营销系统', '九牧创意APP', '云掌', '新日电动车'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              rotate: 45
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00adb5'
                    },
                    {
                      offset: 1,
                      color: '#eee'
                    }
                  ]
                }
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          yAxis: {
            name: '时长（月）',
            nameTextStyle: {
              fontWeight: '600',
              fontFamliy: '微软雅黑'
            },
            data: [29, 3, 4, 6, 11, '至今'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00adb5'
                    },
                    {
                      offset: 1,
                      color: '#eee'
                    }
                  ]
                }
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            scale: true
          },
          series: [
            {
              name: '.NET',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    const _data = param.data;
                    return _data[5];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 15,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 3
                }
              }
            },
            {
              name: 'WebAPP',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    const _data = param.data;
                    return _data[5];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 15,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 3
                }
              }
            }
          ]
        },
        /* 媒体查询 */
        media: [
          {
            query: {
              minWidth: 320,
              maxWidth: 768
            },
            option: {
              title: {
                text: '2014-至今',
                top: 20,
                left: 10,
                textStyle: {
                  fontSize: 14,
                  color: '#393e46'
                }
              },
              tooltip: {
                show: false
              },
              legend: {
                top: 20,
                data: ['PC', '移动端']
              },
              grid: {
                left: 45,
                top: 100,
                bottom: 150
              },
              xAxis: {
                nameGap: 5
              },
              yAxis: {
                nameGap: 5,
                nameTextStyle: {
                },
                data: [29, 3, 4, 6, 11, '至今'],
                axisLine: {
                  lineStyle: {
                    width: 1
                  }
                }
              },
              series: [
                {
                  name: 'PC',
                  data: dataForMobile[0],
                  symbolSize: function (data) {
                    return data[2];
                  },
                  label: {
                    emphasis: {
                      show: false
                    }
                  }
                },
                {
                  name: '移动端',
                  data: dataForMobile[1],
                  symbolSize: function (data) {
                    return data[2];
                  },
                  label: {
                    emphasis: {
                      show: false
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      project: {
        name: null,
        duration: null,
        tool: null
      },
      // 遮罩蒙版
      mask: {
        show: false,
        data: null,
        scale: {
          x: 0,
          y: 0
        }
      }
    };
  },
  methods: {
    hideMask () {
      this.mask.show = false;
    }
  },
  mounted () {
    const _chart = this.$children[0].chart;
    const self = this;
    _chart.on('click', function (param) {
      // 改变缩放原点
      let _x = param.event.event.clientX;
      let _y = param.event.event.clientY;
      $('.mask').css({
        transformOrigin: _x + 'px ' + _y + 'px'
      });
      // 获取数据
      self.project.name = param.data[0];
      self.project.duration = param.data[3];
      self.project.tool = param.data[6];
      let _seriesIndex = param.seriesIndex;
      let _dataIndex = param.dataIndex;
      self.mask.show = true;
      self.mask.data = self.work.projectData[_seriesIndex][_dataIndex];
      // console.log('当前数据项：', param.seriesIndex, _x, _y, param);
    });
  }
};
</script>
<style lang="less" scoped>
.project-container {
  height: inherit;
  &:before {
    content: '';
    background-image: url(http://ouptlygn0.bkt.clouddn.com/body-bg2-1.jpg);
    background-size: 100% 100%;
    -webkit-filter: blur(35px);
    filter: blur(15px);
    margin: -35px;
    position: absolute;
    z-index: -1;
    top: 35px;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .echarts {
    margin-top: 3.75rem;
  }
  .scale-enter {
    transform: scale(0);
  }
  .scale-enter-to {
    transform-origin: 954px 311xpx;
    animation: scale-in .25s ease-out;
  }
  .scale-leave-to{
    animation: scale-out .25s ease-out;
  }
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes scale-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: hsla(0, 0%, 0%, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -35px;
    .detail {
      h2 {
        margin-bottom: 1.25rem;
      }
      width: 70%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid #fff;
      box-sizing: border-box;
      box-shadow: 0 0 15px #fff;
      background-color: #eeeeee;
      p {
        width: 93%;
        margin: .3125rem auto;
        font-size: .875rem;
        display: flex;
        flex-flow: column wrap;
        &:last-child {
          padding-bottom: 3.75rem;
        }
        span {
          font-size: inherit;
          padding-left: 2.65rem;
          margin-bottom: .625rem;;
        }
      }
    }
  }
}
/* 移动端 */
/* iphone4 及以上 */
@media screen 
and (min-device-width: 320px) 
and (max-device-width: 750px) 
and (min-device-height: 480px) 
{
  .project-container {
    .echarts {
      width: inherit;
      height: inherit;
      margin: 0 auto;
    }
    .mask {
      .detail {
        h2 {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-bottom: .625rem;
          text-align: center;
          font-size: .875rem;
          width: 90%;
          span {
            display: none;
          }
        }
        p {
          width: 90%;
          font-size: .8125rem;
          &:last-child {
            padding-bottom: 1.25rem;
            span {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              &:nth-child(3),
              &:nth-child(3) + span {
                -webkit-line-clamp: 2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
