import StatHeading from "../../ui/StatHeading";
import { IconBox3D, IconBoxRecovery, IconBoxTime, IconTickCircle, IconTruckFast } from "../../styles/Icons";
import { apiUrl } from "../../services/apiConfigs";
import styled from "styled-components";
import Row from "../../ui/Row";
import { Status } from "../../ui/Status";
import { ActivityBox } from "../../ui/ActivityBox";

const ProgressBarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   gap: 0.5rem;
   max-width: 600px;
   position: relative;
`;

const ProgressCircle = styled.div`
   width: ${(props) => (props.$isCurrent ? "24px" : "12px")};
   height: ${(props) => (props.$isCurrent ? "24px" : "12px")};
   border-radius: 50%;
   background-color: ${({ $isActive, $isCurrent }) =>
      $isActive && !$isCurrent
         ? "var(--color-green-500)"
         : $isCurrent
         ? "transparent"
         : "var(--color-grey-300)"};
   transition: background-color 0.3s ease;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;

   &:nth-child(2)::before,
   &:nth-child(3)::before,
   &:nth-child(4)::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 100%;
      width: 10rem;
      z-index: -1;
      height: 3px;
      background-color: ${(props) =>
         props.$isActive ? "var(--color-green-500)" : "var(--color-grey-200)"};
      transform: translateY(-50%);
   }

   & svg {
      width: 24px;
      height: 24px;
   }
`;

const ImageContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   width: 55%;
   flex-grow: 3;
   & img {
      width: 45px;
      object-fit: contain;
      border-radius: var(--border-radius-md);
   }
`;

const LeftImages = styled(Row)`
   width: 45%;
   & h4 {
      color: var(--color-grey-500);
      font-size: 1.3rem;
      font-family: poppins;
   }
   & h3 {
      font-family: var(--morabba);
   }
`;

const OrderBoxComponent = ({ createdAt, user, trackingCode, totalPriceAfterOff, groupedProductsByTransport:transportProduct, items }) => {
  const orderTime = createdAt.split("T")[0].replace("14", "");
  const order1 = transportProduct.transportsDetails1.transport;
  const order2 = transportProduct.transportsDetails2?.transport;
  const orderTransport = [order1, order2].sort((a, b) => a.statusBar - b.statusBar)[0];
  const orderStatus = orderTransport.statusBar / 25;
  const orderStatusName = orderTransport.status;
  const orderProductsImages = items.map((item) => item.product.covers[0]).slice(0, 4);
  const customer = `${user.firstName} ${user.lastName}`;
  const icons = {
     icon1: <IconBoxTime color="var(--color-green-500)" />,
     icon2: <IconBoxRecovery color="var(--color-green-500)" />,
     icon3: <IconTruckFast color="var(--color-green-500)" />,
     icon4: <IconTickCircle color="var(--color-green-500)" />
  };

  return (
     <ActivityBox key={trackingCode}>
        <Row type="horizontal">
           <StatHeading
              isReverse={true}
              label="مبلغ سفارش"
              type="thirty"
              fontSize="1.4rem"
              icon={icons[`icon${orderStatus}`]}
              amount={totalPriceAfterOff}
           />
           <Row>
              <Status>
                 <div />
                 <p>{orderStatusName}</p>
              </Status>
              <h3>{customer}</h3>
           </Row>
        </Row>
        <ProgressBarContainer>
           {[1, 2, 3, 4].map((_, index) => (
              <ProgressCircle
                 key={index}
                 $isActive={index < orderStatus}
                 $isCurrent={index + 1 === orderStatus}
              >
                 {index + 1 === orderStatus && (
                    <IconBox3D color="var(--color-green-500)" />
                 )}
              </ProgressCircle>
           ))}
        </ProgressBarContainer>
        <Row type="horizontal">
           <ImageContainer>
              {orderProductsImages.map((cover) => (
                 <img key={cover} src={`${apiUrl}/${cover}`} alt="covers of products images" />
              ))}
           </ImageContainer>
           <LeftImages>
              <h3>#{trackingCode}</h3>
              <h4>{orderTime}</h4>
           </LeftImages>
        </Row>
     </ActivityBox>
  );
};

export default OrderBoxComponent