import styled from "styled-components";

function ContactTitle({ onMouseEnter, onMouseLeave }) {
  return (
    <ContactTitleWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      CONTACT
    </ContactTitleWrap>
  );
}

const ContactTitleWrap = styled.div`
  font-family: sans-serif;
  font-size: 17vw;
  opacity: 0.07;
  text-align: left;
  font-weight: 900;
  margin: 22vh -1.2vw;
`;

export default ContactTitle;
