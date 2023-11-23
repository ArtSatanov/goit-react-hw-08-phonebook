import { StyledLink } from './Navigation.styled';
export const Navigation = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/phonebook">Contacts</StyledLink>
      </nav>
    </div>
  );
};
