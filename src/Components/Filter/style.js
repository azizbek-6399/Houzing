import styled from 'styled-components'
// import {ReactComponent as price} from '../../Assets/icons/price.svg';
import {ReactComponent as home} from '../../Assets/icons/homeInput.svg';
// import {ReactComponent as searchKey} from '../../Assets/icons/searchKey.svg';
import {ReactComponent as setting} from '../../Assets/icons/setting.svg';
import {ReactComponent as search} from '../../Assets/icons/search.svg';

const Container = styled.div`
    display: flex;
    gap: 20px;
    margin: 10px 0;
    width: 100%;
`;

const Icon = styled.div`
    margin-right: 8px;
`;

// Icon.Price = styled(price)`
//     margin-right: 8px;
// `;

Icon.Home = styled(home)`
    margin-right: 8px;
    margin-top: 6px;
`;

// Icon.Key = styled(key)`
//     margin-right: 8px;
// `;

Icon.Setting = styled(setting)`
    margin-right: 8px;
`;

Icon.Search = styled(search)`
    margin-right: 8px;
`;
const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;

Advanced.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: start;
  gap: 0 20px;
  border: 1px solid red;
`;

export { Container, Wrapper, Icon, Advanced, Section };