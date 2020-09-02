import styled, { css } from 'styled-components';
import { HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock } from 'react-icons/hi';

export const Container = styled.div`
  padding:48px 32px;
  display:flex;
  flex-direction:column;
  border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
  font-size:18px;
  margin-bottom:20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items:center;
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }
    > strong {
      font-size:14px;
      font-weight: normal;
      color:var(--color-gray);
    }
  }
`;

const iconsCss = css`
width: 30px;
height:30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`${iconsCss}`;

export const ReputationCard = styled.div`
  margin-top:33px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ReputationThermometer = styled.ol`
  list-style:none;

  width: 100%;
  display:grid;
  grid-template-columns: repeat(5,1fr);

  grid-gap: 7px;
  padding: 0 4px;

  > li {
    width:100%;
    height: 8px;

    &:nth-child(1) {
      background: var(--reputation-1);
    }
    &:nth-child(2) {
      background: var(--reputation-2);
    }
    &:nth-child(3) {
      background: var(--reputation-3);
    }
    &:nth-child(4) {
      background: var(--reputation-4);
    }
    &:nth-child(5) {
      background: var(--reputation-5);
    }
    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div``;

export const SupportIcon = styled(HiOutlineChatAlt2)`${iconsCss}`;

export const ClockIcon = styled(HiOutlineClock)`${iconsCss}`;

export const More = styled.a``
