import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";
import styled from "styled-components";
import Image from "../../assets/images/tiny-todo.png";
import { motion } from "framer-motion";

function ProjectTinyTodo({ onMouseEnter, onMouseLeave }) {
  return (
    <>
      <ProductWrap>
        <motion.div
          whileHover={{ scale: 1.05 }}
          layout
          transition={{ layout: { duration: 5 }, type: "spring" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <a href="https://github.com/dannsgo/tiny-todo">
            <div className="p">
              <div className="browser">
                <VscCircleLargeFilled className="browserBtn1" />
                <VscCircleLargeFilled className="browserBtn2" />
                <VscCircleLargeFilled className="browserBtn3" />
              </div>
              <img src={Image} alt="" className="p-img" />
            </div>
          </a>
        </motion.div>
      </ProductWrap>
    </>
  );
}

const ProductWrap = styled.div`
  display: flex;
  justify-content: center;

  .p {
    border: 2px solid rgb(243, 242, 242);
    background: linear-gradient(to bottom, rgb(243, 242, 242), #263238);
    inline-size: 80vw;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
  }

  .browser {
    block-size: 2vh;
    background-color: rgb(243, 242, 242);
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 3;
    gap: 0.3vw;
    padding: 0.3vw;
    font-size: 0.9vh;
  }

  .browserBtn1 {
    padding: 0.05rem;
    color: #e51f24;
  }
  .browserBtn2 {
    padding: 0.05rem;
    color: #f7c52a;
  }
  .browserBtn3 {
    padding: 0.05rem;
    color: #008026;
  }

  .p-img {
    inline-size: 100%;
    transition: all 30s ease;
  }

  .p:hover .p-img {
    transform: translateY(-65%);
  }
`;

export default ProjectTinyTodo;
