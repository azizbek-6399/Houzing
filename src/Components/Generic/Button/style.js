import styled from 'styled-components';

// button type ga qarab style ga kode uzatish
const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        border: "none",
        color: "#FFFFFF",
        background: "#0061DF",
      };
    default:
      return {
        border: "1px solid #E6E9EC",
        color: "#FFFFFF",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  justify-content: center;
  align-items: center;
  border-radius: 2px;

  // prop orqali keladigan qiymatlar automatically ozlashtiriladi

  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};

  // type ga qarab bu funksiya orniga yuqoridagi funksiydan css kode yoziladi
  ${({ type }) => getType(type)}

  cursor: pointer;

  //active bolganida nima bo'lishi
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export {Container};
