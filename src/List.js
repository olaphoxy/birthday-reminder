import React from "react";
// import ListUser from "./ListUser";
import { motion } from "framer-motion";

export const List = ({ people }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="grid"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {people.map((person) => {
        const { id, name, age, image, position } = person;
        return (
          <motion.div key={id} className="person" layout variants={item}>
            <img src={image} alt={name} />
            <div>
              <p className="myName">{name}</p>
              <p className="myAge">{age} years</p>
              <p className="myPos">{position}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default List;
