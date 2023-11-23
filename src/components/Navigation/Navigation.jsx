import { StyledLink, StyledNav } from './Navigation.styled';
export const Navigation = () => {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/phonebook">Contacts</StyledLink>
      </StyledNav>
    </div>
  );
};
