import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart6 } from '../components/chart-6';
import { Chart4 } from '../components/chart-4';

export const Home = () => {
  const year = new Date().getFullYear
  return (
    <div className="home">
    <header style={{backgroundImage: `url(${headerBg})`}}/>
    <main>
      <section className="section1">
       <Chart1/>
       <Chart2/>
      </section>
      <section className="bordered section2">
        <Chart4/>
      </section>
      <section className="bordered section3">
      </section>
      <section className="bordered section4">
      <Chart6/>
      </section>
      <section className="bordered section5">
      <Chart1/>
      </section>
    </main>
    <footer>
        &copy; xxx 2020-
      </footer>
  </div>
  );
};
