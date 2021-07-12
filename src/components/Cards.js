import mqtt from "mqtt";
import "./Cards.css";
import React, { useState, Fragment, lazy } from "react";
const CardItem = lazy(() => import("./CardItem"));

function Cards() {
  let mesg;
  const [ultra, setUltra] = useState(
    <Fragment>
      <em>N/A</em>
    </Fragment>
  );
  const [water, setWater] = useState(
    <Fragment>
      <em>N/A</em>
    </Fragment>
  );
  const [pompa, setPompa] = useState(
    <Fragment>
      <em>N/A</em>
    </Fragment>
  );
  const options = {
    protocolId: "MQTT",
    protocolVersion: 4,
    username: "xxkxgfeq",
    password: "Z2aLRnr4FMC-",
    reconnectPeriod: 1000,
  };
  const client = mqtt.connect("wss://soldier.cloudmqtt.com:33825", options);
  client.on("connect", function () {
    client.subscribe("florence/ultrastation", function (err) {
      if (!err) {
        //client.publish('florence/ultrastation', '30');
      }
    });
    client.subscribe("florence/waterstation", function (err) {
      if (!err) {
        //client.publish('florence/waterstation', '2');
      }
    });
    client.subscribe("florence/pompastation", function (err) {
      if (!err) {
        //client.publish('florence/pompastation', 'Pompa ON');
      }
    });
  });
  client.on("message", function (topic, message) {
    mesg = message.toString();
    // Updates React state with message
    if (topic === "florence/ultrastation") {
      setUltra(mesg);
    }

    if (topic === "florence/waterstation") {
      setWater(mesg);
    }

    if (topic === "florence/pompastation") {
      setPompa(mesg);
    }
  });
  return (
    <div className="cards">
      <h1>Dashboard Monitoring</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem text="Ketinggian Air" value={`${ultra}cm`} />
            <CardItem text="Debit Air" value={`${water}cm/s`} />
          </ul>
          <ul className="cards__items">
            <CardItem text="Status Pompa" value={pompa} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
