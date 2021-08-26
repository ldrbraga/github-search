import { HeaderCont } from './styles';

import logo from '../../assets/logo-github.svg';

export function Header() {
  return (
    <>
      <HeaderCont>
        <img src={ logo } alt="Github Logo" />
        <h2>Search for a github user.</h2>
      </HeaderCont>
    </>
  )
}