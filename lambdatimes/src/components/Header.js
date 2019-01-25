import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TimesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const DateSpan = styled(Span)`
  margin-left: 25px;
  flex: 1;
`;

const TempSpan = styled(Span)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header = () => {
  return (
    <TimesHeader>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <Title>Lambda Times</Title>
      <TempSpan>98°</TempSpan>
    </TimesHeader>
  );
};

export default Header;
