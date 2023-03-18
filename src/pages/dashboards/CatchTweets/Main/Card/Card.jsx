import React from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  return (
    <AnimateSharedLayout>
        <ExpandedCard param={props} />  
    </AnimateSharedLayout>
  );
};

// Expanded Card
function ExpandedCard({ param}) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "black",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "stepline",
        colors: ["gray"],
      },
      
      grid: {
        show: true,
      },
      xaxis: {         
        categories: param.xaxis,       
      },
      series: [{
        name: param.title,
        data: []
      }],
      series2: [{
        name: param.title,
        data: []
      }],
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <span style={{color:"black"}}>{param.title}{" :"+param.value}</span>
      <div className="chartContainer">
        <Chart options={data.options} xaxis={param.xaxis} series={param.series} type="area" />
      </div>
      
    </motion.div>
  );
}

export default Card;
