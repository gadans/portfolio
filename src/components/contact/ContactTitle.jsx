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
  font-size: 15vw;
  opacity: 0.05;
  text-align: right;
  font-weight: 900;
  margin: 0 -1.2vw;
`;

export default ContactTitle;
