import React from "react";
import styled from "styled-components";
import bookjjokImg from "../../assets/images/bookjjok1.png";
import { motion } from "framer-motion";

function ProjectBookjjok({ onMouseEnter, onMouseLeave }) {
  return (
    <>
      <ProductWrap>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://github.com/dannsgo/bookjjok">
            <div
              className="p"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="browser"></div>
              <img src={bookjjokImg} alt="" className="p-img" />
            </div>
          </a>
        </motion.div>
      </ProductWrap>
    </>
  );
}

const ProductWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 12vw;

  .p {
    border: 2px solid rgb(243, 242, 242);
    background: white;
    inline-size: 50vw;
    block-size: 50%;
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
  }

  .p-img {
    width: 100%;
    transition: all 5s ease;
  }

  .p:hover .p-img {
    transform: translateY(-65%);
  }
`;

export default ProjectBookjjok;
