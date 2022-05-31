import React from "react";
import styled from "styled-components";
import movielogImg from "../../assets/images/movielog.png";
import { motion } from "framer-motion";

function ProjectMovielog({ onMouseEnter, onMouseLeave }) {
  return (
    <ProductWrap>
      <motion.div whileHover={{ scale: 1.2 }}>
        <a href="https://github.com/movielog/movielog-client">
          <div
            className="p"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="browser"></div>
            <img src={movielogImg} alt="" className="p-img" />
          </div>
        </a>
      </motion.div>
    </ProductWrap>
  );
}

const ProductWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 14vw;

  .p {
    border: 2px solid #1d1d1f;
    inline-size: 50vw;
    block-size: 40vh;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
  }

  .browser {
    block-size: 2vh;
    background-color: #1d1d1f;
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 3;
  }

  .p-img {
    width: 100%;
    transition: all 10s ease;
  }

  .p:hover .p-img {
    padding-top: 5px;
    margin-top: 5px;
    transform: translateY(-100%);
  }
`;

export default ProjectMovielog;
