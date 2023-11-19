import { HiArrowLeft } from 'react-icons/hi';
import { BackLinkBtn, Link } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BackLinkBtn>
        <HiArrowLeft size="18" />
        {children}Go back
      </BackLinkBtn>
    </Link>
  );
};
